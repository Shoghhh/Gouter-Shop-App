import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { WhiteArrowRight } from "../../../assets/svgs/HomeSvgs";
import Button from "../../components/Button";
import { Styles } from "../../styles/Styles";
import Productitem from "../catalog/components/ProductItem";

export function FavoritesScreen() {


    const [favoriteProducts, setFavoriteProducts] = useState([
        { productName: 'Ил Дивино1', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023' },
        { productName: 'Ил Дивино2', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023' },
        { productName: 'Ил Дивино3', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023' },
        { productName: 'Ил Дивино4', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023' },
        { productName: 'Ил Дивино5', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023' },
        { productName: 'Ил Дивино6', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023' },
    ])

    function onPressDelete(item) {
        let index = favoriteProducts.indexOf(item);
        if (index !== -1)
            setFavoriteProducts([...favoriteProducts.slice(0, index), ...favoriteProducts.slice(index + 1, favoriteProducts.length)])
    }

    return <View style={Styles.container}>
        {favoriteProducts.length > 0 ?
            <ScrollView >
                <View style={[Styles.flexRowJustifyBetween, { flexWrap: 'wrap', paddingHorizontal: 20, marginBottom: 80 }]}>
                    {favoriteProducts.map((item, i) => <Productitem productInfo={item} favoritesMode onPressBasket={() => null} onPressCross={() => onPressDelete(item)} key={i} />)}
                </View>
            </ScrollView> :
            <Text style={[Styles.blackRegular14, { textAlign: 'center', marginTop: 20 }]}>Ничего не найдено</Text>}
        <View style={Styles.absoluteButton}>
            <Button text={'Весь каталог'} Icon={WhiteArrowRight} onPress={() => navigation.navigate('Catalog')} />
        </View>
    </View>
}