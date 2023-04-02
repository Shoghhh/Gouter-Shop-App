import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { useSelector } from 'react-redux';
import {DefaultIcon} from '../../../assets/svgs/CatalogSvgs';
import {getRequest, postRequestAuth} from '../../api/RequestHelpers';
import Loading from '../../components/Loading';
import {Styles} from '../../styles/Styles';
import Productitem from './components/ProductItem';

export default function CategoryScreen({navigation, route}) {
  const {id, title} = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    getRequest(`get_product_by_subcategory_id/${id}`).then(res => {
      let products = res.data.map(el => {
        return {
          id: el.id,
          productName: el.title,
          subcategory: title,
          price: el.price,
          description: el.description,
          degreeOfRoast: el.degreeOfRoast,
          compound: el.compound,
          images: el.get_product_image.map(e => e.image),
          isFavorite: el.get_favorites_authuser.length > 0 ? true : false,
          reviewCount: el.review_count,
          rating: el.review_avg_stars,
        };
      });
      setProducts(products);
      setLoading(false);
    });
  }

  const token = useSelector(state => state.auth.token);
  function onPressHeart(productInfo) {
    console.log(productInfo);
    if (token) {
      productInfo.isFavorite
        ? RemoveFromFavorites(productInfo.id, token)
        : AddToFavorites(productInfo.id, token);
    } else navigation.navigate('Profile');
  }

  function AddToFavorites(id, token) {
    console.log(id);
    console.log('added to favorites');
    //   setProducts([...products, { ...productInfo, isFavorite: true }]);
    postRequestAuth('add_favorites', token, {
      product_id: id,
    }).then(res => {
      console.log(res);
      const updatedProducts = products.map(item => {
        if (item.id === id) {
          return {...item, isFavorite: true};
        }
        return item;
      });
      setProducts(updatedProducts);
    });
  }

  function RemoveFromFavorites(id) {
    //todo remove favorites
    const updatedProducts = products.map(item => {
      if (item.id === id) {
        return {...item, isFavorite: false};
      }
      return item;
    });
    setProducts(updatedProducts);
  }

  return (
    <View style={Styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <View style={[Styles.flexRowJustifyBetween, {padding: 20}]}>
            <Text style={Styles.greyRegular14}>Товаров: {products.length}</Text>
            <TouchableOpacity style={Styles.flexRow}>
              <DefaultIcon />
              <Text style={[Styles.greyRegular14, {marginLeft: 5}]}>
                По умолчанию
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{paddingHorizontal: 20}}>
            <View style={[Styles.flexRowJustifyBetween, {flexWrap: 'wrap'}]}>
              {products.map((item, i) => (
                <Productitem
                  key={i}
                  productInfo={item}
                  products={products}
                  setProducts={setProducts}
                  onPressProduct={() =>
                    navigation.navigate('ProductScreen', {productInfo: item, onPressHeart: onPressHeart})
                  }
                  onPressHeart={onPressHeart}
                />
              ))}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
}
