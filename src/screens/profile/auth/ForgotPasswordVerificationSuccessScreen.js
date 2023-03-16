import React from "react";
import { Text, View } from "react-native";
import Button from "../../../components/Button";
import { Styles } from "../../../styles/Styles";


export default function ForgotPasswordVerificationSuccessScreen({navigation}){
    return (
        <View style={Styles.containerPadding}>
            <Text style={[Styles.greyRegular16, { textAlign: 'center', marginVertical: 20 }]}>Ваш пароль успешно изменён</Text>
            <Button text={'Войти'} onPress={() => {
                navigation.popToTop()
                navigation.navigate('AuthScreen', {page: 'login'})
            }}/>
        </View>
    )
}