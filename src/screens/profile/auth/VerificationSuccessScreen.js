import React from "react";
import { Text, View } from "react-native";
import Button from "../../../components/Button";
import { Styles } from "../../../styles/Styles";

export default function VerificationSuccessScreen(){

    return (
        <View style={Styles.containerPadding}>
            <Text style={[Styles.greyRegular16, { textAlign: 'center', marginVertical: 20 }]}>Ваш аккаунт успешно подтверждён</Text>
            <Button text={'Войти'}/>
        </View>
    )
}