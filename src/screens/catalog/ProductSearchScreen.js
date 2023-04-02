import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Styles} from '../../styles/Styles';
import SearchInput from '../../components/SearchInput';
import HorizontalProductItem from './components/HorizontalProductItem';
import Popup from '../../components/Popup';
import Loading from '../../components/Loading';
import {postRequest} from '../../api/RequestHelpers';

export default function ProductSearchScreen() {
  const [searchValue, setSearchValue] = useState();
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [products, setProducts] = useState([]);

  function onSearch(value) {
    setSearchValue(value);
    setLoading(true);
    postRequest('search_product', {
      search_text: searchValue,
    }).then(([status, body]) => {
      if (status === 200) {
        //todo
        let products = body.data.map(e => ({
          id: e.id,
          productName: e.title,
          subcategory: res.data.title,
          price: e.price,
          description: e.description,
          degreeOfRoast: e.degreeOfRoast,
          compound: e.compound,
          images: e.get_product_image.map(e => e.image),
          isFavorite: el.get_favorites_authuser.length > 0 ? true : false,
          reviewCount: el.review_count,
          rating: el.review_avg_stars,
        }));
        setProducts(products)
      }
      setLoading(false);
    });
  }

  return (
    <View style={Styles.container}>
      <Text style={[Styles.blackRegular22, {margin: 20}]}>Выберите товар</Text>
      <SearchInput
        value={searchValue}
        onChangeValue={onSearch}
        placeholder={'Поиск...'}
      />
      {searchValue &&
        (loading ? (
          <Loading />
        ) : products.length === 0 ? (
          <Text
            style={[
              Styles.blackRegular14,
              {textAlign: 'center', marginTop: 20},
            ]}>
            Ничего не найдено
          </Text>
        ) : (
          <ScrollView style={{paddingHorizontal: 20}}>
            {products.map((item, i) => <HorizontalProductItem productInfo={item} key={i} onPressBasket={() => setShowPopup(true)}/>)}
          </ScrollView>
        ))}
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
