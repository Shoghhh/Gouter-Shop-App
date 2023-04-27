import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { BasketIcon, CrossIcon, FilledHeartIcon, HeartIcon, YellowStarIcon } from "../../../../assets/svgs/CatalogSvgs";
import { CheckMark, WhiteCheckMark } from "../../../../assets/svgs/HomeSvgs";
import { postRequestAuth, url } from "../../../api/RequestHelpers";
import Count from "../../../components/Count";
import { AppColors } from "../../../styles/AppColors";
import { Styles } from "../../../styles/Styles";
import Loading from "../../../components/Loading";

export default function Productitem({ productInfo, setProducts, products, onPressProduct, width, marginRight, hideFavorite, selectMode, onPressSelect, historyMode, onPressCross, basketMode, incrementCount, decrementCount, favoritesMode, onPressBasket, navigation }) {
    const token = useSelector(state => state.auth.token)
    const [loading, setLoading] = useState(false)
    const [countLoading, setCountLoading] = useState(false)

    function onPressHeart() {
        if (token) {
            setLoading(true)
            return productInfo.isFavorite
                ? RemoveFromFavorites(productInfo.id, token)
                : AddToFavorites(productInfo.id, token);
        } else navigation.navigate('Profile');
    }

    function AddToFavorites() {
        postRequestAuth('add_favorites', token, {
            product_id: productInfo.id,
        }).then(res => {
            const updatedProducts = products.map(item => {
                if (item.id === productInfo.id) {
                    return { ...item, isFavorite: true };
                }
                return item;
            });
            setProducts(updatedProducts);
            setLoading(false)
        });
    }

    function RemoveFromFavorites() {
        postRequestAuth('remove_favorite', token, {
            product_id: productInfo.id,
        }).then(res => {
            const updatedProducts = products.map(item => {
                if (item.id === productInfo.id) {
                    return { ...item, isFavorite: false };
                }
                return item;
            })
            setProducts(updatedProducts);
            setLoading(false)
        })
    }

    return <TouchableOpacity style={[styles.productContainer, width && { width: width }, marginRight && { marginRight: marginRight }]} onPress={onPressProduct}>
        <Image source={{ uri: `${url}uploads/${productInfo.images[0]}` }} style={styles.image} resizeMode={'cover'} />
        <Text style={Styles.blackSemiBold12}>{productInfo.productName}</Text>
        <Text style={[Styles.greySemiBold12, { marginVertical: 3 }]}>{productInfo.subcategory}</Text>
        <View style={Styles.flexRow}>
            <YellowStarIcon />
            <Text style={styles.rating}>{productInfo.rating}</Text>
        </View>
        <View style={[Styles.flexRow, { marginVertical: 5 }]}>
            {productInfo.oldPrice && <Text style={styles.redRegular13}><Text style={{ textDecorationLine: 'line-through', textDecorationColor: 'red' }}>397 Р</Text>  </Text>}
            <Text style={Styles.blackSemiBold13}>{productInfo.price}  </Text>
            <Text style={Styles.greySemiBold13}>100г</Text>
        </View>
        {
            selectMode ?
                <View style={Styles.flexRowJustifyBetween}>
                    <Text style={Styles.greyRegular12}>{productInfo.date}</Text>
                    <TouchableOpacity style={[styles.selectButton, productInfo.isSelected && { backgroundColor: AppColors.GREEN_COLOR }]} onPress={onPressSelect}>
                        {productInfo.isSelected ? <WhiteCheckMark /> : <CheckMark />}
                    </TouchableOpacity>
                </View>
                : historyMode ? <View style={Styles.flexRowJustifyBetween}>
                    <Text style={Styles.greyRegular12}>{productInfo.date}</Text>
                    <TouchableOpacity style={styles.deleteButton} onPress={onPressCross}>
                        <CrossIcon />
                    </TouchableOpacity>
                </View>
                    : basketMode ? <View style={Styles.flexRowJustifyBetween}>
                        <Count count={productInfo.count} incrementCount={() => {
                            setCountLoading(true)
                            incrementCount(productInfo.id).then(res => setCountLoading(false))
                        }} decrementCount={() => {
                            setCountLoading(true)
                            decrementCount(productInfo.id).then(res => setCountLoading(false))
                        }} basket loading={countLoading} />
                        <TouchableOpacity style={styles.deleteButton} onPress={onPressCross}>
                            <CrossIcon />
                        </TouchableOpacity>
                    </View> :
                        hideFavorite ? <TouchableOpacity style={[styles.button, { width: '100%' }]} onPress={onPressBasket}>
                            <BasketIcon />
                        </TouchableOpacity> :
                            favoritesMode ?
                                <View style={Styles.flexRowJustifyBetween}>
                                    <TouchableOpacity style={styles.button} onPress={onPressBasket}>
                                        <BasketIcon />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button} onPress={onPressCross}>
                                        <CrossIcon />
                                    </TouchableOpacity>
                                </View> : <View style={Styles.flexRowJustifyBetween}>
                                    <TouchableOpacity style={styles.button} onPress={onPressBasket}>
                                        <BasketIcon />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button} onPress={loading ? null : onPressHeart}>
                                        {loading ? <ActivityIndicator color={AppColors.GREEN_COLOR} /> : productInfo.isFavorite ? <FilledHeartIcon /> : <HeartIcon />}
                                    </TouchableOpacity>
                                </View>
        }
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    productContainer: {
        width: '48%',
        marginBottom: 20
    },
    rating: {
        color: AppColors.YELLOW_COLOR,
        fontSize: 12,
        fontFamily: 'OpenSans-SemiBold',
        marginLeft: 3
    },
    button: {
        backgroundColor: AppColors.WHITE_SMOKE_COLOR,
        height: 30,
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    selectButton: {
        height: 30,
        backgroundColor: AppColors.WHITE_SMOKE_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingHorizontal: 10
    },
    deleteButton: {
        backgroundColor: AppColors.WHITE_SMOKE_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    image: {
        width: '100%',
        height: 100,
        marginBottom: 5
    },
    redRegular13: {
        fontSize: 13,
        color: AppColors.RED_COLOR,
        fontFamily: 'OpenSans-Regular',
    }

})