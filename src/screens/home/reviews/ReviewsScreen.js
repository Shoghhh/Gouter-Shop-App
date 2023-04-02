import React from "react";
import { ScrollView, View } from "react-native";
import Button from "../../../components/Button";
import { AppColors } from "../../../styles/AppColors";
import { Styles } from "../../../styles/Styles";
import ReviewItem from "./ReviewItem";


export default function ReviewsScreen({ navigation, route }) {
    const {data} = route.params
    return <View style={Styles.container}>
        <ScrollView>
            {data.map((item, i) => <View style={(i === data.length - 1) && { marginBottom: 80 }} key={i}>
                <ReviewItem navigation={navigation} reviewInfo={item} />
            </View>)}
        </ScrollView>
        <View style={Styles.absoluteButton}>
            <Button text={'Оставить отзыв'} backgroundColor={AppColors.PURPLE_COLOR} onPress={() => navigation.navigate('LeaveAReviewAboutScreen')} />
        </View>
    </View>
}