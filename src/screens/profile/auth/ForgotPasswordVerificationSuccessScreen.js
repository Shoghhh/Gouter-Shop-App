import React from "react";
import { Text, View } from "react-native";
import Button from "../../../components/Button";
import { Styles } from "../../../styles/Styles";


export default function ForgotPasswordVerificationSuccessScreen(){
    return (
        <View style={Styles.containerPadding}>
            <Text style={[Styles.greyRegular16, { textAlign: 'center', marginVertical: 20 }]}>Ваш пароль успешно изменён</Text>
            <Button text={'Войти'}/>
        </View>
    )
}