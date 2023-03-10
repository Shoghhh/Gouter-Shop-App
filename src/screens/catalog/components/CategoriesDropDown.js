import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  LayoutAnimation,
  Platform,
  View,
  ImageBackground,
} from 'react-native';
import { Styles } from '../../../styles/Styles';
import { AppColors } from '../../../styles/AppColors';
import { ArrowDownIcon, ArrowUpIcon } from '../../../../assets/svgs/CatalogSvgs';

export default function CategoriesDropDown({ data, defaultOpenedId, navigation }) {
  const [selectedItem, setSelectedItem] = useState(defaultOpenedId);

  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  function onSelect(id) {
    if (id === selectedItem) {
      setSelectedItem(null);
      return;
    }
    setSelectedItem(id);
  }

  function toggleExpand() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  const Categories = ({ data, isOpened, onPress }) => {
    return (
      <>
        <TouchableOpacity
          style={styles.blockContainer}
          onPress={onPress}>
          <View>
            <Text style={Styles.blackSemiBold18}>{data.title}</Text>
          </View>
          {isOpened ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </TouchableOpacity>
        {isOpened && (
          <View style={styles.categoriesContainer}>
            {data.categories.map((item, i) => <TouchableOpacity style={styles.categoryContainer} key={i} onPress={() => navigation.navigate('CategoryScreen', { title: item.title, productsInfo: item.productsInfo })}>
              <ImageBackground source={item.imgPath} resizeMode="cover" style={styles.image} borderRadius={10} >
                <Text style={styles.categoryName}>{item.title}</Text>
              </ImageBackground>
            </TouchableOpacity>)}
          </View>
        )}
      </>
    );
  };
  return data.map((item, i) => <Categories key={i} data={item} isOpened={selectedItem === item.id} onPress={() => {onSelect(item.id); toggleExpand()}} />)
}

const styles = StyleSheet.create({
  blockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    height: 25,
    marginTop: 25,
  },
  categoriesContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  categoryContainer: {
    borderRadius: 10,
    width: '30%',
    marginBottom: 12
  },
  image: {
    width: '100%',
    height: 90,
  },
  categoryName: {
    color: AppColors.WHITE_COLOR,
    fontSize: 12,
    fontFamily: 'OpenSans-SemiBold',
    margin: 8,
  }
});
