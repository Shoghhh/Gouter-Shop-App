import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ArrowRightIcon, FilledHeartIcon, GreyArrowRightIcon, HeartIcon, YellowStarIcon } from "../../../assets/svgs/CatalogSvgs";
import Button from "../../components/Button";
import Count from "../../components/Count";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";

export default function ProductScreen({ navigation, route }) {
    const { productInfo } = route.params;
    const [count, setCount] = useState('1');

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
            <Image source={productInfo.imgPath} style={{ width: '100%', height: 230 }} />
            <View style={Styles.flexRowJustifyBetween}>
                <View>
                    <Text style={[Styles.greyRegular14, { marginBottom: 5 }]} >{productInfo.category}</Text>
                    <Text style={Styles.blackSemiBold18}>{productInfo.productName}</Text>
                </View>
                <TouchableOpacity style={styles.favoriteIconContainer}>
                    {productInfo.isFavorite ? <FilledHeartIcon /> : <HeartIcon />}
                </TouchableOpacity>
            </View>
            <View style={[Styles.flexRow, { marginVertical: 15 }]}>
                <Text style={Styles.blackSemiBold13}>{productInfo.price}  </Text>
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
            <Text style={Styles.greyRegular14}>{` Нежный бленд бразильской и гондурасской арабики светлой обжарки. Обладает мягким вкусом тропических фруктов, белого шоколада и лесного ореха.

Основа вкуса этого кофе - баланс кислинки и горчинки, который дарит ощущение свежести и законченности. Сбалансированный, спокойный вкус раскрывается нотами тропических фруктов, белого шоколада и лесного ореха. В послевкусии едва _уловимы кардамон и гвоздика.
Чашечка крепкого ароматного кофе из эспрессо-машины - один из популярнейших напитков для бодрого начала дня. Благодаря высокому давлению при приготовлении, кофе получается ярким и дерзким. Поэтому традиционно для эспрессо подбираются сорта сильной обжарки.
Однако, у каждого свои вкусовые предпочтения - иногда хочется нежности и воздушности. Для такого случая отлично подойдёт «Ил Дивино». С итальянского его название переводится как «божественный», что подчёркивает мягкость и приятный вкус.

Как и в случае с классическим рецептом эспрессо, «Ил Дивино» - тоже бленд нескольких сортов кофе, но уже светлой обжарки, которая раскрывает природные ноты арабики. Учитывая, что под давлением в эспрессо-машине все вкусы особенно заметны, наши бельгийские партнеры
CoffeeRoots создали бленд из сортов арабики, лишенных явной кислотности.`}
            </Text>
            <Text style={[Styles.blackSemiBold14, { marginTop: 10, marginBottom: 5 }]}>Состав:</Text>
            <Text style={Styles.greyRegular14}>100% арабика (Бразилия, Гондурас)</Text>
            <Text style={[Styles.blackSemiBold14, { marginTop: 10, marginBottom: 5 }]}>Степень обжарки:</Text>
            <Text style={Styles.greyRegular14}>слабая</Text>
            <Text style={[Styles.blackSemiBold18, { marginVertical: 30 }]}>Этот товар отлично дополняют</Text>
            <View style={Styles.flexRowJustifyBetween}>
                <ComplementProductItem />
                <ComplementProductItem />
            </View>
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