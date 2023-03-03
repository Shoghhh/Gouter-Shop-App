import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import SearchInput from "../../components/SearchInput";
import HorizontalProductItem from "./components/HorizontalProductItem";
import Popup from "../../components/Popup";


export default function ProductSearchScreen() {
    const [searchValue, setSearchValue] = useState()
    const productsInfo = [
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р', isFavorite: true },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png') },
    ]
    const [showPopup, setShowPopup] = useState(false)

    return <View style={Styles.container}>
        <Text style={[Styles.blackRegular22, { margin: 20 }]}>Выберите товар</Text>
        <SearchInput value={searchValue} onChangeValue={setSearchValue} placeholder={'Поиск...'}/>
        {searchValue && <ScrollView style={{paddingHorizontal: 20}}>
            {productsInfo.map((item, i) => <HorizontalProductItem productInfo={item} key={i} onPressBasket={() => setShowPopup(true)}/>)}
        </ScrollView>}
        <Popup showPopup={showPopup} title={'Добавлено в корзину'} text={''} btnText={'Ок'} onPressBtn={() => setShowPopup(false)} />
    </View>
}