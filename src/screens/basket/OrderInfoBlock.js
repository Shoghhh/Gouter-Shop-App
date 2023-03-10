import React, { useState } from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";


export default function OrderInfoBlock() {

    const [productsInfo, setProductsInfo] = useState([
        { productName: 'Ил Дивино, 100г', price: '397 Р' },
        { productName: 'Ил Дивино, 100г', price: '397 Р' },
        { productName: 'Ил Дивино, 100г', price: '397 Р' },
        { productName: 'Ил Дивино, 100г', price: '397 Р' },
    ])
    return <>
        <View style={styles.productsContainer}>
            {productsInfo.map((item, i) => <View style={[styles.productItem, i === productsInfo.length - 1 && { borderBottomWidth: 0 }]} key={i}>
                <Text style={Styles.blackRegular14}>{item.productName}</Text>
                <Text style={Styles.blackSemiBold14}>{item.price}</Text>
            </View>)}
        </View>
        <View style={[styles.productsContainer, {borderColor: AppColors.BLACK_COLOR}]}>
            <View style={styles.productItem}>
                <Text style={Styles.blackRegular14}>Товаров на сумму</Text>
                <Text style={Styles.blackSemiBold14}>1430 Р</Text>
            </View>
            <View style={styles.productItem}>
                <Text style={Styles.blackRegular14}>Доставка</Text>
                <Text style={Styles.blackSemiBold14}>0 Р</Text>
            </View>
            <View style={[styles.productItem, { borderBottomWidth: 0 }]}>
                <Text style={Styles.blackRegular14}>Итог</Text>
                <Text style={Styles.blackSemiBold14}>1430 Р</Text>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    productsContainer: {
        borderWidth: 1, 
        borderRadius: 5,
        borderColor: AppColors.WHITE_SMOKE_COLOR,
        marginBottom: 15
    },
    productItem: {
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: AppColors.WHITE_SMOKE_COLOR,
        flexDirection: 'row'
    },
})