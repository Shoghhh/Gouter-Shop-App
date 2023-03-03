import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Styles } from "../../../styles/Styles";

export default function PostSingleScreen({ navigation, route }) {
    const { width } = Dimensions.get('window')
    const { itemInfo } = route.params
    return <View style={Styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Text style={[Styles.blackSemiBold24, { margin: 20 }]}>{itemInfo.title}</Text>
            <Image style={{ width: width, height: 450, marginBottom: 20 }} source={itemInfo.imgPath} />
            <Text style={[Styles.blackRegular16, { paddingHorizontal: 20 }]}>{itemInfo.longText}</Text>
            <Text style={[Styles.blackRegular16, { padding: 20 }]}>{itemInfo.shortText}</Text>
            <Image style={{ width: width, height: 260 }} source={require('../../../../assets/pngs/home/PostSingleImage.png')} />
            <View style={styles.attention}>
                <Text style={[Styles.blackSemiBold24, { marginBottom: 20 }]}>Знак внимания</Text>
                <Text style={[Styles.greyRegular14, { textAlign: 'center' }]}>Мы вынуждены отталкиваться от того, что выбранный нами инновационный путь не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Вот вам яркий пример современных тенденций — социально-экономическое развитие</Text>
            </View>
            <Text style={[Styles.blackRegular16, { padding: 20 }]}>{itemInfo.longText}</Text>
            <Image style={{ width: width, height: 260 }} source={require('../../../../assets/pngs/home/PostSingleImage.png')} />
            <View style={styles.attention}>
                <Text style={[Styles.blackSemiBold24, { marginBottom: 20 }]}>Знак внимания</Text>
                <Text style={[Styles.greyRegular14, { textAlign: 'center' }]}>Мы вынуждены отталкиваться от того, что выбранный нами инновационный путь не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Вот вам яркий пример современных тенденций — социально-экономическое развитие</Text>
            </View>
            <Text style={[Styles.blackRegular16, { padding: 20 }]}>{itemInfo.shortText}</Text>
            <Text style={[Styles.blackRegular16, { paddingHorizontal: 20, marginBottom: 20 }]}>{itemInfo.longText}</Text>
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
    attention: {
        backgroundColor: '#EEEEEE',
        paddingVertical: 50,
        paddingHorizontal: 35,
        alignItems: 'center'
    }
})