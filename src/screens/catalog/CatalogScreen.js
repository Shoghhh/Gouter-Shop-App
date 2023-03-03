import React from "react";
import { ScrollView, Text, View } from "react-native";
import CategoriesDropDown from "./components/CategoriesDropDown";
import { Styles } from "../../styles/Styles";


export default function CatalogScreen({ navigation }) {
    const productsInfo = [
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р', isFavorite: true },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
    ]
    const categoriesInfo = [
        { title: 'Весь кофе', imgPath: require('../../../assets/pngs/categories/category1.png'), productsInfo: productsInfo },
        { title: 'Классический', imgPath: require('../../../assets/pngs/categories/category2.png'), productsInfo: productsInfo },
        { title: 'Ароматизированный', imgPath: require('../../../assets/pngs/categories/category3.png'), productsInfo: productsInfo },
        { title: 'Новинки', imgPath: require('../../../assets/pngs/categories/category4.png'), productsInfo: productsInfo },
        { title: 'Растворимый', imgPath: require('../../../assets/pngs/categories/category5.png'), productsInfo: productsInfo },
        { title: 'Капусулы', imgPath: require('../../../assets/pngs/categories/category6.png'), productsInfo: productsInfo },
        { title: 'Кофе в пачках', imgPath: require('../../../assets/pngs/categories/category3.png'), productsInfo: productsInfo },
        { title: 'Продукция месяца', imgPath: require('../../../assets/pngs/categories/category4.png'), productsInfo: productsInfo },
        { title: 'ТОП-наборы', imgPath: require('../../../assets/pngs/categories/category2.png'), productsInfo: productsInfo },
    ]

    return <View style={Styles.container}>
        <ScrollView>
            <CategoriesDropDown
                data={[
                    { id: 0, title: 'Чай', categories: categoriesInfo },
                    { id: 1, title: 'Кофе', categories: categoriesInfo },
                    { id: 2, title: 'Сладости', categories: categoriesInfo },
                    { id: 3, title: 'Подарки', categories: categoriesInfo },
                    { id: 4, title: 'Цветы', categories: categoriesInfo },
                    { id: 5, title: 'Oil&Vinegar', categories: categoriesInfo },
                    { id: 6, title: 'Аксессуары', categories: categoriesInfo },
                    { id: 7, title: 'Приятные цены', categories: categoriesInfo },
                    { id: 8, title: 'Корпоративным клиентам', categories: categoriesInfo },
                ]} navigation={navigation} />
        </ScrollView>
    </View>
}