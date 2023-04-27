import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { WhiteArrowRight } from '../../../assets/svgs/HomeSvgs';
import { getRequestAuth, postRequestAuth } from '../../api/RequestHelpers';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { Styles } from '../../styles/Styles';
import Productitem from '../catalog/components/ProductItem';

export function FavoritesScreen({ navigation }) {
  const token = useSelector(state => state.auth.token);
  const [favorites, setFavorites] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setLoading(true)
      getFavorites();
    });
    return unsubscribe;
  }, [navigation]);

  function getFavorites() {
    getRequestAuth('get_favorites', token).then(res => {
      let products = res.data.map(el => ({
        id: el.get_product.id,
        productName: el.get_product.title,
        subcategory: el.get_product.get_subcategory.title,
        price: el.get_product.price,
        description: el.get_product.description,
        degreeOfRoast: el.get_product.degreeOfRoast,
        compound: el.get_product.compound,
        images: el.get_product.get_product_image.map(e => e.image),
        isFavorite: true,
        reviewCount: el.review_count,
        rating: el.review_avg_stars,
      }));
      setFavorites(products);
      setLoading(false);
    });
  }

  function onPressDelete(item) {
    postRequestAuth('remove_favorite', token, {
      product_id: item.id,
    }).then(res => {
      let index = favorites.indexOf(item);
      if (index !== -1)
        setFavorites([
          ...favorites.slice(0, index),
          ...favorites.slice(index + 1, favorites.length),
        ]);
    })
  }

  return (
    <View style={Styles.container}>
      {loading ? (
        <Loading />
      ) : favorites.length > 0 ? (
        <ScrollView>
          <View
            style={[
              Styles.flexRowJustifyBetween,
              { flexWrap: 'wrap', paddingHorizontal: 20, marginBottom: 80 },
            ]}>
            {favorites.map((item, i) => (
              <Productitem
                productInfo={item}
                favoritesMode
                onPressProduct={() =>
                  navigation.navigate('ProductScreen', { productId: item.id })
                }
                onPressBasket={() => null}
                onPressCross={() => onPressDelete(item)}
                key={i}
              />
            ))}
          </View>
        </ScrollView>
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
    </View>
  );
}
