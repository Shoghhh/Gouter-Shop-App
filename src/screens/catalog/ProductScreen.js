import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FilledHeartIcon, GreyArrowRightIcon, HeartIcon, YellowStarIcon } from "../../../assets/svgs/CatalogSvgs";
import { getRequest, url } from "../../api/RequestHelpers";
import Button from "../../components/Button";
import Count from "../../components/Count";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";

export default function ProductScreen({ navigation, route }) {
    const { id, subcategory } = route.params;
    const [count, setCount] = useState('1');
    const [productInfo, setProductInfo] = useState({})

    useEffect(()=>{
        getRequest(`getProducts/${id}`).then(res => {
            console.log(res.data);
            let product = {
                id: res.data.id,
                title: res.data.title,
                degreeOfRoast: res.data.degreeOfRoast, 
                subcategory: subcategory, 
                price: res.data.price, 
                description: res.data.description, 
                compound: res.data.compound,
                imgPath: res.data.get_product_image[0].image
            }
            setProductInfo(product)
        })
    },[])


    function ComplementProductItem() {
        return <TouchableOpacity style={styles.productContainer}>
            <Image source={productInfo.imgPath} style={styles.image} resizeMode={'cover'} />
            <Text style={Styles.blackSemiBold12}>{productInfo.productName}</Text>
            <Text style={[Styles.greySemiBold12, { marginVertical: 3 }]}>{productInfo.category}</Text>
        </TouchableOpacity>
    }

    function incrementCount() {
        let myCount = +count + 1
        setCount(myCount)
    }
    function decrementCount() {
        let myCount = +count - 1
        count != '1' && setCount(myCount)
    }

    return <View style={Styles.container}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            <Image source={{uri:  `${url}uploads/${productInfo.imgPath}`}} style={{ width: '100%', height: 230, marginVertical: 15 }} />
            <View style={Styles.flexRowJustifyBetween}>
                <View>
                    <Text style={[Styles.greyRegular14, { marginBottom: 5 }]} >{productInfo.subcategory}</Text>
                    <Text style={Styles.blackSemiBold18}>{productInfo.title}</Text>
                </View>
                <TouchableOpacity style={styles.favoriteIconContainer}>
                    {false ? <FilledHeartIcon /> : <HeartIcon />}
                </TouchableOpacity>
            </View>
            <View style={[Styles.flexRow, { marginVertical: 15 }]}>
                <Text style={Styles.blackSemiBold13}>{productInfo.price} </Text>
                <Text style={Styles.greySemiBold13}>100г</Text>
            </View>
            <View style={Styles.flexRowJustifyBetween}>
                <Count count={count} incrementCount={incrementCount} decrementCount={decrementCount} />
                <Button text={'В корзину'} width={'48%'} />
            </View>
            <TouchableOpacity style={[Styles.flexRowJustifyBetween, styles.reviewsContainer]} onPress={() => navigation.navigate('ProductReviewsScreen')}>
                <Text style={Styles.greySemiBold14}> Отзывы: 16 </Text>
                <View style={Styles.flexRow}>
                    <YellowStarIcon />
                    <Text style={styles.rating} >4.6   </Text>
                    <GreyArrowRightIcon />
                </View>
            </TouchableOpacity>
            <Text style={Styles.greyRegular14}>{productInfo.description}</Text>
            <Text style={[Styles.blackSemiBold14, { marginTop: 10, marginBottom: 5 }]}>Состав:</Text>
            <Text style={Styles.greyRegular14}>{productInfo.compound}</Text>
            <Text style={[Styles.blackSemiBold14, { marginTop: 10, marginBottom: 5 }]}>Степень обжарки:</Text>
            <Text style={Styles.greyRegular14}>{productInfo.degreeOfRoast}</Text>
            {/* <Text style={[Styles.blackSemiBold18, { marginVertical: 30 }]}>Этот товар отлично дополняют</Text>
            <View style={Styles.flexRowJustifyBetween}>
                <ComplementProductItem />
                <ComplementProductItem />
            </View> */}
        </ScrollView>
    </View>
}


const styles = StyleSheet.create({
    favoriteIconContainer: {
        height: 45,
        width: 45,
        backgroundColor: AppColors.WHITE_SMOKE_COLOR,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rating: {
        color: AppColors.YELLOW_COLOR,
        fontFamily: 'OpenSans-SemiBold',
        marginHorizontal: 4,
    },
    reviewsContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: AppColors.GREY_COLOR,
        padding: 15,
        marginBottom: 20
    },
    productContainer: {
        width: '48%',
        marginBottom: 20
    },
    image: {
        width: '100%',
        height: 100,
        marginBottom: 5
    },

})