import React, { useState } from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {DefaultIcon} from '../../../assets/svgs/CatalogSvgs';
import {Styles} from '../../styles/Styles';
import Productitem from './components/ProductItem';

export default function ProductsScreen({navigation, route}) {
  const [products, setProducts] = useState(route.params.products)
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
    console.log(id, 'added to favorites');
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
    //todo 
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
              onPressProduct={() =>
                navigation.navigate('ProductScreen', {productInfo: item})
              }
              onPressHeart={onPressHeart}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
