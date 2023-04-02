import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";
import Productitem from "../catalog/components/ProductItem";


export default function BasketScreen({ navigation }) {
    const token = useSelector(state => state.auth.token)

    const [productsInfo, setProductsInfo] = useState([
        // { id: 0, productName: 'Ил Дивино1', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023', count: '1' },
        // { id: 1, productName: 'Ил Дивино2', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023', count: '2' },
        // { id: 2, productName: 'Ил Дивино3', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023', count: '1' },
        // { id: 3, productName: 'Ил Дивино4', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023', count: '1' },
        // { id: 4, productName: 'Ил Дивино5', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023', count: '1' },
        // { id: 5, productName: 'Ил Дивино6', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), date: '11 февраля 2023', count: '1' },
    ])

    function onPressDelete(item) {
        let index = productsInfo.indexOf(item);
        if (index !== -1)
            setProductsInfo([...productsInfo.slice(0, index), ...productsInfo.slice(index + 1, productsInfo.length)])
    }

    function incrementCount(id) {
        setProductsInfo([...productsInfo, { ...productsInfo[id], count: ++productsInfo[id].count }]);
    }

    function decrementCount(id) {
        productsInfo[id].count !== 1 && setProductsInfo([...productsInfo, { ...productsInfo[id], count: --productsInfo[id].count }]);
    }

    return <View style={Styles.container}>
        {token ? (productsInfo.length > 0 ?
            <>
                <Text style={[Styles.blackSemiBold20, { padding: 20, borderBottomWidth: 2, borderColor: AppColors.WHITE_SMOKE_COLOR }]}>Товаров на: 3500,65 Р</Text>
                <ScrollView>
                    <View style={[Styles.flexRowJustifyBetween, { flexWrap: 'wrap', paddingHorizontal: 20, marginBottom: 80 }]}>
                        {/* {productsInfo.map((item, i) => <Productitem productInfo={item} basketMode incrementCount={() => incrementCount(item.id)} decrementCount={() => decrementCount(item.id)} onPressCross={() => onPressDelete(item)} key={i} />)} */}
                    </View>
                </ScrollView>
                <View style={Styles.absoluteButton}>
                    <Button text={'Оформить заказ'} onPress={() => navigation.navigate('OrderingScreen')} />
                </View>
            </>
            : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
                <Text style={[Styles.greySemiBold24, { textAlign: 'center' }]}>Корзина пуста!</Text>
                <Text style={[Styles.greySemiBold12, { textAlign: 'center', marginVertical: 15 }]}>Выбирайте товары из католога или из списка избранных</Text>
                <Button text={'Перейти в избранное'} width={'100%'} marginBottom={10} />  
                <Button text={'Выбрать из каталога'} width={'100%'} noFill onPress={() => navigation.navigate('Catalog')} />
            </View>) :
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
                <Text style={[Styles.greySemiBold24, { textAlign: 'center', color: AppColors.GREEN_COLOR }]}>Внимание</Text>
                <Text style={[Styles.greySemiBold12, { textAlign: 'center', marginVertical: 15, color: AppColors.GREEN_COLOR }]}>Выбирайте товары из католога или из списка избранных</Text>
                <Button text={'Войти'} width={'100%'} marginBottom={10} onPress={() => navigation.navigate('Profile')} />
                <Button text={'Зарегистрироваться'} width={'100%'} noFill onPress={() => navigation.navigate('Profile')} />
            </View>
        }
        {/* navigation.navigate('AuthScreen', { page: 'login' }) */}
        {/* {screen: 'FavoritesScreen'}     onPress={() => navigation.navigate('Profile')}*/}
    </View>
}