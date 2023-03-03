import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { BigGreyStarIcon, BigYellowStarIcon } from "../../../../assets/svgs/HomeSvgs";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { AppColors } from "../../../styles/AppColors";
import { Styles } from "../../../styles/Styles";


export default function LeaveAReviewScreen() {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('')
    return <View style={Styles.container}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            <Text style={[Styles.blackSemiBold20, { marginVertical: 20 }]}>Комментарий</Text>
            <Input placeholder={'Напишите отзыв'} value={comment} setValue={setComment} />
            <Text style={[Styles.blackSemiBold20, { marginBottom: 10 }]}>Оценка</Text>

            <View style={Styles.flexRow}>
                {[...Array(rating)].map((e, i) => (
                    <TouchableOpacity
                        onPress={() => {
                            setRating(i + 1);
                        }}
                        key={i}>
                        <BigYellowStarIcon />
                    </TouchableOpacity>
                ))}
                {[...Array(5 - rating)].map((e, i) => (
                    <TouchableOpacity
                        onPress={() => {
                            setRating(rating + i + 1);
                        }}
                        key={i}>
                        <BigGreyStarIcon />
                    </TouchableOpacity>
                ))}
            </View>
            
        </ScrollView>
        {rating > 0 && <View style={Styles.absoluteButton}>
            <Button text={'Отправить'} backgroundColor={AppColors.GREEN_COLOR} />
        </View>}
    </View>
}