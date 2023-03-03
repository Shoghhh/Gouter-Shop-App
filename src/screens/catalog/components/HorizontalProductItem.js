import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BasketIcon } from "../../../../assets/svgs/CatalogSvgs";
import { CheckMark } from "../../../../assets/svgs/HomeSvgs";
import { AppColors } from "../../../styles/AppColors";
import { Styles } from "../../../styles/Styles";

export default function HorizontalProductItem({ productInfo, hideBasket, hideLine, selectMode, onPress, onPressBasket }) {
    return <TouchableOpacity style={[styles.container, hideLine && { borderBottomWidth: 0 }]} onPress={onPress}>
        <View style={Styles.flexRow}>
            <Image style={styles.image} source={productInfo.imgPath} resizeMode={'cover'} />
            <View style={{ marginLeft: 15 }}>
                <Text style={Styles.blackSemiBold16}>{productInfo.productName}</Text>
                <Text style={[Styles.greyRegular14, { marginTop: 5 }]}>{productInfo.category}</Text>
            </View>
        </View>
        {(selectMode && productInfo.isSelected) && <CheckMark />}
        {!hideBasket && <TouchableOpacity onPress={onPressBasket}>
            <BasketIcon />
        </TouchableOpacity>}
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderColor: AppColors.WHITE_SMOKE_COLOR,
    },
    image: {
        width: 70,
        height: 70,
    }
})