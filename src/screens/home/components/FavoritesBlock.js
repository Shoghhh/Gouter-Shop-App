import React from "react";
import { ScrollView } from "react-native";
import Productitem from "../../catalog/components/ProductItem";
import TitleAll from "./TitleAll";

export default function FavoritesBlock() {
    const productsInfo = [
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
    ]

    return <>
        <TitleAll title={'Избранное'} />
        <ScrollView horizontal style={{ marginLeft: 20 }} showsHorizontalScrollIndicator={false}>
            {productsInfo.map((item, i) => <Productitem key={i} productInfo={item} width={150} marginRight={10} hideFavorite />)}
        </ScrollView>
    </>
}