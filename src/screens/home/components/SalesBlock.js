import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Styles } from "../../../styles/Styles";
import TitleAll from "./TitleAll";

export default function SalesBlock({navigation}) {
    const salesInfo = [
        { imgPath: require('../../../../assets/pngs/home/Sale.png'), text: 'Скидка 5%' },
        { imgPath: require('../../../../assets/pngs/home/Sale.png'), text: 'Скидка 5%' },
        { imgPath: require('../../../../assets/pngs/home/Sale.png'), text: 'Скидка 5%' },
        { imgPath: require('../../../../assets/pngs/home/Sale.png'), text: 'Скидка 5%' },
    ]
    return <>
        <TitleAll title={'Акции'} onPressAll={() => navigation.navigate('SalesNavigator')}/>
        <ScrollView horizontal style={{ marginLeft: 20 }} showsHorizontalScrollIndicator={false}>
            {salesInfo.map((item, i) => <View style={{marginRight: 10, marginBottom: 5}} key={i}>
                <Image source={item.imgPath} style={{ width: 190, height: 115 }} />
                <Text style={Styles.blackSemiBold14}>{item.text}</Text>
            </View>)}
        </ScrollView>
    </>
}

