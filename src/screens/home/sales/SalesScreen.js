import React from "react";
import { ScrollView, View } from "react-native";
import { Styles } from "../../../styles/Styles";
import SaleItem from "./SaleItem";

export default function SalesScreen({ navigation, route }) {
    const {salesInfo} = route.params

    return <View style={Styles.container}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            {salesInfo.map((item, i) => <SaleItem saleInfo={item} key={i} onPressItem={() => navigation.navigate('SaleSingleScreen', { title: item.title, itemInfo: item })} />)}
        </ScrollView>
    </View>
}
