import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppColors } from "../../../styles/AppColors";
import { Styles } from "../../../styles/Styles";


export default function SaleSingleScreen({ navigation, route }) {
    const { itemInfo } = route.params
    return <View style={Styles.container}>
        <ScrollView >
            <Text style={[Styles.blackSemiBold24, { margin: 20 }]}>{itemInfo.title}</Text>
            <Image style={{ width: '100%', height: 220 }} source={itemInfo.imgPath} />
            <Text style={[Styles.dimGreyBold20, styles.text]}>{itemInfo.mainText}</Text>
            <Text style={[Styles.blackRegular16, { paddingHorizontal: 20 }]}>{itemInfo.text}</Text>
            <Text style={styles.greenSemiBold16}>Полный условия акции</Text>
        </ScrollView>
    </View>
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        paddingVertical: 15,
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderColor: '#FFE664',
        margin: 20
    },
    greenSemiBold16: {
        color: AppColors.GREEN_COLOR,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
        paddingHorizontal: 20,
        marginBottom: 20,
        textDecorationLine: 'underline'
    }

})