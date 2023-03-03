import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AppColors } from "../styles/AppColors";
import { Styles } from "../styles/Styles";
// import moment from 'moment';

export default function OrderInput({ label, placeholder, value, setValue, addressButton }) {
    return <View>
        <Text style={Styles.blackSemiBold14}>{label}</Text>
        <TextInput 
            placeholder={placeholder}
            value={value}
            onChangeText={setValue}
            style={[Styles.blackRegular12, styles.input]}
        />
        {/* moment(date).format('D.M.YYYY') */}
    </View>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: AppColors.WHITE_SMOKE_COLOR,
        borderRadius: 6,
        marginBottom: 20,
        marginTop: 10
    }
})