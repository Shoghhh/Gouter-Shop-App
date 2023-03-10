import React, { createRef, useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, TextInput, View } from "react-native";
import { CrossedEye, EditIcon, OpenedEye } from "../../assets/svgs/ProfileSvgs";
import { AppColors } from "../styles/AppColors";
import { Styles } from "../styles/Styles";


export default function Input({ placeholder, inputType, value, setValue, notEditable, onPressEdit, isCurrentEditingField }) {
    const [isOpenEye, setIsOpenEye] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    return <View style={[styles.inputContainer, Styles.flexRowJustifyBetween, isFocused && { borderColor: AppColors.GREEN_COLOR }]}>
        <TextInput
            style={[styles.input, Styles.blackSemiBold14]}
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            keyboardType={inputType === 'phone' || inputType === 'code' ? 'numeric' : 'default'}
            secureTextEntry={inputType === 'pass' && !isOpenEye ? true : false}
            placeholderTextColor={AppColors.GREY_COLOR}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            editable={(notEditable && !isCurrentEditingField) ? false : true}
        />
        {notEditable && !isCurrentEditingField ?
            <TouchableOpacity onPress={onPressEdit}>
                <EditIcon />
            </TouchableOpacity>
            : inputType === 'pass' && (isOpenEye ?
                <TouchableOpacity onPress={() => setIsOpenEye(false)}>
                    <OpenedEye />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => setIsOpenEye(true)}>
                    <CrossedEye />
                </TouchableOpacity>)
        }
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 50,
        backgroundColor: AppColors.WHITE_SMOKE_COLOR,
        borderRadius: 4,
        paddingHorizontal: 15,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: AppColors.WHITE_COLOR,
    },
    input: {
        width: '90%'
    }
})