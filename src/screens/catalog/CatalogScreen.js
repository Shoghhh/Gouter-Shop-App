import React, {useEffect, useState} from 'react';
import { ScrollView, View} from 'react-native';
import CategoriesDropDown from './components/CategoriesDropDown';
import {Styles} from '../../styles/Styles';
import {getRequest} from '../../api/RequestHelpers';
import Loading from '../../components/Loading';

export default function CatalogScreen({navigation}) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true)

  function getCategories() {
    getRequest('getCategores').then(res => {
      let categories = res.data.map(el => {
        return {
          id: el.id,
          title: el.title,
          subcategories: el.get_sub_category.map(el => {
            return {id: el.id, title: el.title, image: el.image};
          })
        };
      });
      setCategories(categories);
      setLoading(false)
    });
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={Styles.container}>
      {loading ? <Loading /> :  <ScrollView>
        <CategoriesDropDown data={categories} navigation={navigation} />
      </ScrollView>}
    </View>
  );
}
