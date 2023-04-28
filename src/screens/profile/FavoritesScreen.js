import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { WhiteArrowRight } from '../../../assets/svgs/HomeSvgs';
import { getRequestAuth, getRequestPagination, postRequestAuth } from '../../api/RequestHelpers';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { Styles } from '../../styles/Styles';
import Productitem from '../catalog/components/ProductItem';
import Popup from '../../components/Popup';

export function FavoritesScreen({ navigation }) {
  const token = useSelector(state => state.auth.token);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState(`https://kantata.justcode.am/api/get_favorites`)
  const [isRefreshing, setIsRefreshing] = useState(false);
  const firstPageUrl = `https://kantata.justcode.am/api/get_favorites`
  const [isLoading, setIsLoading] = useState()
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setLoading(true)
      getFavorites('refresh');
    });
    return unsubscribe;
  }, [navigation]);

  function getFavorites(refresh) {
    getRequestPagination(refresh ? firstPageUrl : nextUrl, token).then(res => {
      let myProducts = res.data.data.map(el => ({
        id: el.get_product.id,
        productName: el.get_product.title,
        subcategory: el.get_product.get_subcategory.title,
        price: el.get_product.price,
        images: el.get_product.get_product_image.map(e => e.image),
        rating: el.review_avg_stars,
      }));
      refresh ? setFavorites(myProducts) : setFavorites([...favorites, ...myProducts]);
      setNextUrl(res.data.next_page_url)
      setLoading(false);
      setIsLoading(false);
      setIsRefreshing(false);
    });
  }

  function onPressDelete(item) {
    postRequestAuth('remove_favorite', token, {
      product_id: item.id,
    }).then(res => {
      if (res.status) {
        let index = favorites.indexOf(item);
        if (index !== -1)
          setFavorites([
            ...favorites.slice(0, index),
            ...favorites.slice(index + 1, favorites.length),
          ]);
      }
    })
  }

  async function addToBasket(id) {
    await postRequestAuth('change_basket_products_count', token, {
      product_id: id,
      count: 1
    }).then(res => {
      console.log(res);
      if (res.status) {
        setShowPopup(true)
      }
    })
  }

  const handleLoadMore = () => {
    if (nextUrl) {
      setIsLoading(true)
      getFavorites()
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    getFavorites('refresh')
  };

  const renderFooter = () => {
    return isLoading ? <View style={{ marginBottom: 30 }}>
      <Loading />
    </View> : null
  };

  return (
    <View style={Styles.container}>
      {loading ? (
        <Loading />
      ) : favorites.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: 20, marginBottom: 80, paddingTop: 20 }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={favorites}
          numColumns={2}
          renderItem={(item, i) => (
            <Productitem
              productInfo={item.item}
              favoritesMode
              onPressProduct={() =>
                navigation.navigate('ProductScreen', { productId: item.item.id })
              }
              onPressBasket={addToBasket}
              navigation={navigation}
              onPressCross={() => onPressDelete(item.item)}
              key={i}
            />
          )}
          keyExtractor={item => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={1.5}
          ListFooterComponent={renderFooter}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
      ) : (
        <Text
          style={[Styles.blackRegular14, { textAlign: 'center', marginTop: 20 }]}>
          Ничего не найдено
        </Text>
      )}
      <View style={Styles.absoluteButton}>
        <Button
          text={'Весь каталог'}
          Icon={WhiteArrowRight}
          onPress={() => navigation.navigate('Catalog')}
        />
      </View>
      <Popup
        showPopup={showPopup}
        title={'Добавлено в корзину'}
        text={''}
        btnText={'Ок'}
        onPressBtn={() => setShowPopup(false)}
      />
    </View>
  );
}
