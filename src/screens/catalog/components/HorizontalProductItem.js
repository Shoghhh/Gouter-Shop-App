import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BasketIcon, GreyBasketicon } from "../../../../assets/svgs/CatalogSvgs";
import { CheckMark } from "../../../../assets/svgs/HomeSvgs";
import { postRequestAuth, url } from "../../../api/RequestHelpers";
import { AppColors } from "../../../styles/AppColors";
import { Styles } from "../../../styles/Styles";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function HorizontalProductItem({ productInfo, hideBasket, hideLine, selectMode, onPress, onPressBasket }) {
    const [basketLoading, setBasketLoading] = useState(false)
    const token = useSelector(state => state.auth.token)
    return <TouchableOpacity style={[styles.container, hideLine && { borderBottomWidth: 0 }]} onPress={(selectMode && productInfo.reviewAlreadyLeft) ? null : () => onPress(productInfo)}>
        <View style={Styles.flexRow}>
            <Image style={styles.image} source={{ uri: `${url}uploads/${productInfo.images[0]}` }} resizeMode={'cover'} />
            <View style={{ marginLeft: 15 }}>
                <Text style={Styles.blackSemiBold16}>{productInfo.productName}</Text>
                <Text style={[Styles.greyRegular14, { marginTop: 5 }]}>{productInfo.subcategory}</Text>
            </View>
        </View>
        {selectMode && (productInfo.reviewAlreadyLeft ? <Text style={Styles.greyRegular12}>отзыв уже оставлен</Text> : productInfo.isSelected && <CheckMark />)}
        {!hideBasket && <TouchableOpacity onPress={token ? (productInfo.inBasket ? null : () => {
                setBasketLoading(true)
                onPressBasket(productInfo.id).then(res => setBasketLoading(false))
        }) : navigation.navigate('Profile')}>
            {basketLoading ? <ActivityIndicator color={AppColors.GREEN_COLOR} size={"small"} /> : <BasketIcon />}
        </TouchableOpacity>}
    </TouchableOpacity>
}
//todo favorites pagination , get all galleries, color-nery gallery-i 

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
        borderRadius: 50
    }
})