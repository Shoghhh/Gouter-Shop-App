import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppColors } from "../styles/AppColors";

export default function Button({ text, noFill, onPress, width, Icon, marginBottom, backgroundColor }) {
    return <TouchableOpacity style={[styles.button, noFill && {backgroundColor: AppColors.WHITE_COLOR}, width && {width: width, borderRadius: 10}, Icon && {justifyContent : 'space-between'}, marginBottom && {marginBottom: marginBottom}, backgroundColor && {backgroundColor: backgroundColor, borderWidth: 0}]} onPress={onPress}>
        <Text style={[styles.text, noFill && {color: AppColors.GREEN_COLOR}]}>{text}</Text>
        {Icon && <Icon />}
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: AppColors.GREEN_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: AppColors.GREEN_COLOR,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    text: {
        color: AppColors.WHITE_COLOR,
        fontFamily: 'OpenSans-Regular',
    }
})