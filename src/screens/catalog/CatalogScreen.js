import React, {useEffect, useState} from 'react';
import { ScrollView, View} from 'react-native';
import CategoriesDropDown from './components/CategoriesDropDown';
import {Styles} from '../../styles/Styles';
import {getRequest} from '../../api/RequestHelpers';

export default function CatalogScreen({navigation}) {
  // const productsInfo = [
  //     { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
  //     { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р', isFavorite: true },
  //     { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
  //     { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
  //     { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
  //     { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
  // ]
  // const categoriesInfo = [
  //     { title: 'Весь кофе', image: '1678718955.png' },
  //     { title: 'Классический', image: '1678718955.png' },
  //     { title: 'Ароматизированный', image: '1678718955.png' },
  //     { title: 'Новинки', image: '1678718955.png' },
  //     { title: 'Растворимый', image: '1678718955.png' },
  //     { title: 'Капусулы', image: '1678718955.png' },
  //     { title: 'Кофе в пачках', image: '1678718955.png' },
  //     { title: 'Продукция месяца', image: '1678718955.png' },
  //     { title: 'ТОП-наборы', image: '1678718955.png' },
  // ]

  // data={[
  //   {id: 0, title: 'Чай', categories: categoriesInfo},
  //   {id: 1, title: 'Кофе', categories: categoriesInfo},
  //   {id: 2, title: 'Сладости', categories: categoriesInfo},
  //   {id: 3, title: 'Подарки', categories: categoriesInfo},
  //   {id: 4, title: 'Цветы', categories: categoriesInfo},
  //   {id: 5, title: 'Oil&Vinegar', categories: categoriesInfo},
  //   {id: 6, title: 'Аксессуары', categories: categoriesInfo},
  //   {id: 7, title: 'Приятные цены', categories: categoriesInfo},
  //   {
  //     id: 8,
  //     title: 'Корпоративным клиентам',
  //     categories: categoriesInfo,
  //   },
  // ]}
  const [categories, setCategories] = useState([]);

  function getCategories() {
    getRequest('getCategores').then(res => {
      let categories = res.data.map(el => {
        return {
          id: el.id,
          title: el.title,
          subcategories: [{"id": 1, "image": "1678718955.png", "title": "adasd"}, {"id": 4, "image": "1678778587.png", "title": "subcategory 22"}, {"id": 1, "image": "1678718955.png", "title": "adasd"}, {"id": 1, "image": "1678718955.png", "title": "adasd"}]
          // el.get_sub_category.map(el => {
          //   return {id: el.id, title: el.title, image: el.image};
          // }),
        };
      });
      categories.forEach(el => console.log(el));
      setCategories(categories);
    });
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={Styles.container}>
      <ScrollView>
        <CategoriesDropDown data={categories} navigation={navigation} />
      </ScrollView>
    </View>
  );
}
