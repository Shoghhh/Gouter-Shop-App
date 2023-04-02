import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../../../components/Button";
import { AppColors } from "../../../styles/AppColors";
import { Styles } from "../../../styles/Styles";
import HorizontalProductItem from "../../catalog/components/HorizontalProductItem";
import TitleAll from "./TitleAll";

export default function ReviewsBlock({ navigation, data }) {
    return <>
        <TitleAll title={'Отзывы гостей'} onPressAll={() => navigation.navigate('ReviewsNavigator', {screen: 'ReviewsScreen', params: {data}}, )} />
        <ScrollView horizontal style={{ marginLeft: 20 }} showsHorizontalScrollIndicator={false}>
            {data.map((item, i) => <View style={styles.reviewContainer} key={i}>
                <View>
                    <Text style={Styles.blackSemiBold18}>{item.username}</Text>
                    <Text style={Styles.blackRegular13}>{item.comment}</Text>
                </View>
                <View style={{ borderTopWidth: 1, borderColor: AppColors.GREY_COLOR, marginTop: 20 }}>
                    <HorizontalProductItem productInfo={item.productInfo} hideBasket hideLine onPress={() => navigation.navigate('ProductScreen', {productInfo: item.productInfo})} />
                </View>
            </View>)}
        </ScrollView>
        <View style={{ marginHorizontal: 20 }}>
            <Button text={'Оставить отзыв'} marginBottom={80} backgroundColor={AppColors.PURPLE_COLOR} onPress={() => navigation.navigate('ReviewsNavigator', { screen: 'LeaveAReviewAboutScreen' })} />
        </View>
    </>
}

const styles = StyleSheet.create({
    reviewContainer: {
        width: 280,
        backgroundColor: AppColors.WHITE_SMOKE_COLOR,
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginRight: 10,
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'space-between',
    }
})