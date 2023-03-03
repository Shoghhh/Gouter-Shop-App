import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppColors } from "../../../styles/AppColors";
import { Styles } from "../../../styles/Styles";

export default function SaleItem({ saleInfo, onPressItem }) {
    return <TouchableOpacity style={styles.container} onPress={onPressItem}>
        <Image source={saleInfo.imgPath} style={styles.image} />
        <Text style={[Styles.greyRegular14, {marginVertical: 10}]}>{saleInfo.text}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: AppColors.GREY_COLOR,
        marginTop: 20
    },
    image: {
        height: 200,
        borderRadius: 10,
        width: '100%'
    }
})