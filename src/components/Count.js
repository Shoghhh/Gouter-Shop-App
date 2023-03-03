import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppColors } from "../styles/AppColors";
import { Styles } from "../styles/Styles";


export default function Count({ count, incrementCount, decrementCount, horizontal }) {
    return <View style={[styles.selectAmountContainer, horizontal && { width: '70%', height: 30, marginBottom: 0, paddingRight: 2 }]}>
        <Text style={Styles.blackSemiBold14}>{count} шт.</Text>
        <View style={horizontal && { flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={horizontal ? { paddingHorizontal: 8, borderRightWidth: 1, borderColor: AppColors.GREY_COLOR } : styles.bottomBorder} onPress={incrementCount}>
                <Text style={[Styles.blackSemiBold20, { textAlign: 'center', color : AppColors.GREEN_COLOR }]}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={horizontal && { paddingHorizontal: 8 }} onPress={decrementCount}>
                <Text style={[Styles.blackSemiBold20, { textAlign: 'center', color : AppColors.GREEN_COLOR }]}>-</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    selectAmountContainer: {
        backgroundColor: AppColors.WHITE_SMOKE_COLOR,
        height: 50,
        borderRadius: 10,
        width: '48%',
        marginBottom: 15,
        paddingLeft: 15,
        paddingRight: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomBorder: {
        borderBottomWidth: 1,
        borderColor: AppColors.GREY_COLOR,
        paddingHorizontal: 15
    }
})