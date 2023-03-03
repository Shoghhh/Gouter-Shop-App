import React from "react";
import { ScrollView, View } from "react-native";
import Button from "../../../components/Button";
import { AppColors } from "../../../styles/AppColors";
import { Styles } from "../../../styles/Styles";
import ReviewItem from "./ReviewItem";


export default function ReviewsScreen({ navigation }) {
    const reviewsInfo = [
        {
            username: 'Екатерина К', date: '11 февраля 2023', rating: 5, comment: 'Кофе очень вкусный - аромат потрясающий, вкус нежный и мягкий, очень приятное послевкусие. Идеально для завтрака', productInfo: {
                productName: 'Ил Дивино, 100г',
                imgPath: require('../../../../assets/pngs/categories/product.png'),
                category: 'Классический кофе'
            }
        },
        {
            username: 'Екатерина К', date: '11 февраля 2023', rating: 5, comment: 'Кофе очень вкусный - аромат потрясающий, вкус нежный и мягкий, очень приятное послевкусие. Идеально для завтрака', productInfo: {
                productName: 'Ил Дивино, 100г',
                imgPath: require('../../../../assets/pngs/categories/product.png'),
                category: 'Классический кофе'
            }
        },
        {
            username: 'Екатерина К', date: '11 февраля 2023', rating: 5, comment: 'Кофе очень вкусный - аромат потрясающий, вкус нежный и мягкий, очень приятное послевкусие. Идеально для завтрака', productInfo: {
                productName: 'Ил Дивино, 100г',
                imgPath: require('../../../../assets/pngs/categories/product.png'),
                category: 'Классический кофе'
            }
        },
    ]
    return <View style={Styles.container}>
        <ScrollView>
            {reviewsInfo.map((item, i) => <View style={(i === reviewsInfo.length - 1) && { marginBottom: 80 }} key={i}>
                <ReviewItem reviewInfo={item} />
            </View>)}
        </ScrollView>
        <View style={Styles.absoluteButton}>
            <Button text={'Оставить отзыв'} backgroundColor={AppColors.PURPLE_COLOR} onPress={() => navigation.navigate('LeaveAReviewAboutScreen')} />
        </View>
    </View>
}