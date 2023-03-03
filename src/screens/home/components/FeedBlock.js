import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Styles } from "../../../styles/Styles";
import TitleAll from "./TitleAll";

export default function FeedBlock({navigation}) {
    const postsInfo = [
        { imgPath: require('../../../../assets/pngs/home/Post.png'), text: 'Сильным и смелым! Подарки на 23 февраля' },
        { imgPath: require('../../../../assets/pngs/home/Post.png'), text: 'Сильным и смелым! Подарки на 23 февраля' },
        { imgPath: require('../../../../assets/pngs/home/Post.png'), text: 'Сильным и смелым! Подарки на 23 февраля' },
        { imgPath: require('../../../../assets/pngs/home/Post.png'), text: 'Сильным и смелым! Подарки на 23 февраля' },
    ]
    return <>
        <TitleAll title={'Лента'} onPressAll={() => navigation.navigate('FeedNavigator')} />
        <ScrollView horizontal style={{ marginLeft: 20 }} showsHorizontalScrollIndicator={false}>
            {postsInfo.map((item, i) => <View style={{marginRight: 10, marginBottom: 5, width: 190}} key={i}>
                <Image source={item.imgPath} style={{ width: 190, height: 115, borderRadius: 10, marginBottom: 10 }} />
                <Text style={Styles.blackSemiBold14}>{item.text}</Text>
            </View>)}
        </ScrollView>
    </>
}

