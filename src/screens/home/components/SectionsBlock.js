import React from "react";
import { View } from "react-native";
import TitleAll from "./TitleAll";
import { ScrollView } from "react-native";
import Productitem from "../../catalog/components/ProductItem";
import { postRequestAuth } from "../../../api/RequestHelpers";
import { useState } from "react";
import Popup from "../../../components/Popup";
import { useSelector } from "react-redux";


export default function SectionsBlock({ navigation, sections }) {
    const [showPopup, setShowPopup] = useState(false)
    const token = useSelector(state => state.auth.token)

    async function addToBasket(id) {
        await postRequestAuth('change_basket_products_count', token, {
            product_id: id,
            count: 1
        }).then(res => {
            console.log(res);
            if (res.status) {
                setShowPopup(true)
            }
        })
    }
    return sections.map((el, i) => {
        return (
            <View key={i}>
                <TitleAll
                    title={el.title}
                    onPressAll={() =>
                        navigation.navigate('ProductsScreen', {
                            title: el.title,
                            id: el.id
                        })
                    }
                />
                <ScrollView
                    horizontal
                    style={{ marginLeft: 20 }}
                    showsHorizontalScrollIndicator={false}>
                    {el.products.map((item, j) => (
                        <Productitem
                            key={j}
                            productInfo={item}
                            width={150}
                            marginRight={10}
                            hideFavorite
                            onPressBasket={addToBasket}
                            onPressProduct={() => navigation.navigate('ProductScreen', { productId: item.id })}
                            navigation={navigation}
                        />
                    ))}
                </ScrollView>
                <Popup
                    showPopup={showPopup}
                    title={'Добавлено в корзину'}
                    text={''}
                    btnText={'Ок'}
                    onPressBtn={() => setShowPopup(false)}
                />
            </View>
        );
    })
}