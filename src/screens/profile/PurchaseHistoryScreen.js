import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Button from "../../components/Button";
import { Styles } from "../../styles/Styles";
import Productitem from "../catalog/components/ProductItem";

export default function PurchaseHistoryScreen({navigation}) {

    const [purchasesInfo, setPurchasesInfo] = useState([
        // { productName: 'Ил Дивино1', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023' },
        // { productName: 'Ил Дивино2', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023' },
        // { productName: 'Ил Дивино3', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023' },
        // { productName: 'Ил Дивино4', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023' },
        // { productName: 'Ил Дивино5', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023' },
        // { productName: 'Ил Дивино6', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023' },
    ])

    function onPressDelete(item) {
        let index = purchasesInfo.indexOf(item);
        if (index !== -1)
            setPurchasesInfo([...purchasesInfo.slice(0, index), ...purchasesInfo.slice(index + 1, purchasesInfo.length)])
    }
    return <View style={Styles.container}>
        {purchasesInfo.length > 0 ? <ScrollView style={{ paddingHorizontal: 20 }}>
            <View style={[Styles.flexRowJustifyBetween, { flexWrap: 'wrap' }]}>
                {/* {purchasesInfo.map((item, i) => <Productitem productInfo={item} historyMode onPressCross={() => onPressDelete(item)} key={i} />)} */}
            </View>
        </ScrollView> : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
            <Text style={[Styles.greySemiBold24, { textAlign: 'center' }]}>История покупок пуста</Text>
            <Text style={[Styles.greySemiBold12, { textAlign: 'center', marginVertical: 15 }]}>Выбирайте товары из католога или из списка избранных</Text>
            <Button text={'Перейти в избранное'} width={'100%'} marginBottom={10} onPress={() => navigation.navigate('FavoritesScreen')} />
            <Button text={'Выбрать из каталога'} width={'100%'} noFill onPress={() => navigation.navigate('Catalog')}  />
        </View>}
    </View>
}