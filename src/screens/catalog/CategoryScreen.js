import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { DefaultIcon } from "../../../assets/svgs/CatalogSvgs";
import { Styles } from "../../styles/Styles";
import Productitem from "./components/ProductItem";


export default function CategoryScreen({ navigation, route }) {
    const { productsInfo } = route.params;

    return <View style={Styles.container}>
        <View style={[Styles.flexRowJustifyBetween, { padding: 20 }]}>
            <Text style={Styles.greyRegular14}>Товаров: 105</Text>
            <TouchableOpacity style={Styles.flexRow}>
                <DefaultIcon />
                <Text style={[Styles.greyRegular14, { marginLeft: 5 }]}>По умолчанию</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            <View style={[Styles.flexRowJustifyBetween, { flexWrap: 'wrap' }]}>
                {productsInfo.map((item, i) => <Productitem key={i} productInfo={item} onPressProduct={() => navigation.navigate('ProductScreen', { productInfo: item })} />)}
            </View>
        </ScrollView>
    </View>
}