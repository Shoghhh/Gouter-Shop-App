import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";
import MapScreen from "./MapScreen";
import ShopsList from "./ShopsList";


export default function ShopsScreen({ navigation }) {
    const [selectedIndex, setSelectedIndex] = useState(1)
    return <View style={[Styles.container, { marginTop: 0, paddingTop: 60 }]}>
        <Text style={[Styles.blackSemiBold20, { textAlign: 'center' }]} >Магазины</Text>
        <View style={{ marginHorizontal: 20 }}>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={[styles.tab, selectedIndex === 0 && { backgroundColor: AppColors.WHITE_COLOR }]} onPress={() => setSelectedIndex(0)}>
                    <Text style={[Styles.blackRegular14, { textAlign: 'center' }]}>Карта</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tab, selectedIndex === 1 && { backgroundColor: AppColors.WHITE_COLOR }]} onPress={() => setSelectedIndex(1)}>
                    <Text style={[Styles.blackRegular14, { textAlign: 'center' }]}>Список</Text>
                </TouchableOpacity>
            </View>
        </View>
        {selectedIndex === 0 ? <MapScreen /> : <ShopsList navigation={navigation} />}
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
        marginTop: 40,
        padding: 2,
        marginBottom: 20,

    },
    tab: {
        width: '50%',
        borderRadius: 5,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

})