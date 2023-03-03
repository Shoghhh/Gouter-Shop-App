import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { GreyArrowRightIcon, YellowStarIcon } from "../../../assets/svgs/CatalogSvgs";
import Button from "../../components/Button";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";
import ProductReviewItem from "./components/ProductReviewItem";

export default function ProductReviewsScreen({ navigation }) {

    const productInfo = {
        name: 'Ил Дивино, 100г',
        category: 'Классический кофе',
        averageRating: '4.6',
        reviewsInfo: [
            { username: 'Екатерина К', date: '11 февраля 2023', rating: 5, comment: 'Кофе очень вкусный - аромат потрясающий, вкус нежный и мягкий, очень приятное послевкусие. Идеально для завтрака' },
            { username: 'Екатерина К', date: '11 февраля 2023', rating: 5, comment: 'Кофе очень вкусный - аромат потрясающий, вкус нежный и мягкий, очень приятное послевкусие. Идеально для завтрака' },
            { username: 'Екатерина К', date: '11 февраля 2023', rating: 5, comment: 'Кофе очень вкусный - аромат потрясающий, вкус нежный и мягкий, очень приятное послевкусие. Идеально для завтрака' },
            { username: 'Екатерина К', date: '11 февраля 2023', rating: 5, comment: 'Кофе очень вкусный - аромат потрясающий, вкус нежный и мягкий, очень приятное послевкусие. Идеально для завтрака' },
            { username: 'Екатерина К', date: '11 февраля 2023', rating: 5, comment: 'Кофе очень вкусный - аромат потрясающий, вкус нежный и мягкий, очень приятное послевкусие. Идеально для завтрака' },
            { username: 'Екатерина К', date: '11 февраля 2023', rating: 5, comment: 'Кофе очень вкусный - аромат потрясающий, вкус нежный и мягкий, очень приятное послевкусие. Идеально для завтрака' },
            { username: 'Екатерина К', date: '11 февраля 2023', rating: 5, comment: 'Кофе очень вкусный - аромат потрясающий, вкус нежный и мягкий, очень приятное послевкусие. Идеально для завтрака' },
            { username: 'Екатерина К', date: '11 февраля 2023', rating: 5, comment: 'Кофе очень вкусный - аромат потрясающий, вкус нежный и мягкий, очень приятное послевкусие. Идеально для завтрака' },
        ]
    }

    return <View style={Styles.container}>
        <ScrollView>
            <View style={styles.productInfo}>
                <Text style={Styles.blackSemiBold20}>{productInfo.name}</Text>
                <Text style={[Styles.greyRegular14, { marginVertical: 5 }]}>{productInfo.category}</Text>
                <View style={Styles.flexRow}>
                    <YellowStarIcon />
                    <Text style={styles.rating} >4.6   </Text>
                </View>
            </View>
            {productInfo.reviewsInfo.map((item, i) => <ProductReviewItem reviewInfo={item} key={i} />)}
            <View style={{height: 80}}/>
        </ScrollView>
        <View style={Styles.absoluteButton}>
            <Button text={'Оставить отзыв '} onPress={() => navigation.navigate('LeaveAReviewScreen')} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    rating: {
        color: AppColors.YELLOW_COLOR,
        fontFamily: 'OpenSans-SemiBold',
        marginLeft: 4,
    },
    productInfo: {
        padding: 20,
        borderBottomWidth: 2,
        borderColor: AppColors.WHITE_SMOKE_COLOR,
    }
})
