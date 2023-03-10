import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import Button from "../../components/Button";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";


export default function DeliveryAddressScreen() {

    const [selectedIndex, setSelectedIndex] = useState(1)

    return <View style={[Styles.container, { marginTop: 0, paddingTop: '18%' }]}>
        <View style={{ marginLeft: 20, width: '70%' }}>
            <Text style={Styles.blackRegular22}>Куда доставить?</Text>
            <Text style={[Styles.greyRegular13, { marginTop: 10 }]}>Наличие товаров и способы доставки по вашему адресу</Text>
        </View>
        <View style={{ marginHorizontal: 20 }}>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={[styles.tab, selectedIndex === 0 && { backgroundColor: AppColors.WHITE_COLOR }]} onPress={() => setSelectedIndex(0)}>
                    <Text style={[Styles.blackRegular14, { textAlign: 'center' }]}>По адресу</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tab, selectedIndex === 1 && { backgroundColor: AppColors.WHITE_COLOR }]} onPress={() => setSelectedIndex(1)}>
                    <Text style={[Styles.blackRegular14, { textAlign: 'center' }]}>В пункт выдачи</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={Styles.absoluteButton}>
            <Button text={'Сохранить'} />
        </View>
    </View>
}


const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 5,
        backgroundColor: AppColors.WHITE_SMOKE_COLOR,
        height: 40,
        padding: 2,
        marginVertical: 20,

    },
    tab: {
        width: '50%',
        borderRadius: 5,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

})