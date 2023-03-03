import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Styles } from "../../../styles/Styles";


export default function ForgotPasswordVerificationScreen({navigation}) {
    const [code, setCode] = useState('')

    return (
        <View style={Styles.containerPadding}>
            <Text style={[Styles.greyRegular16, { textAlign: 'center', marginVertical: 20 }]}>Мы отправили код безопасности на вашу эл. почту,введите её ниже для подтверждения</Text>
            <Input placeholder={'Код безопасности'} value={code} setValue={setCode} inputType={'code'} />
            <Button text={'Подтвердить'} onPress={() => navigation.navigate('NewPasswordScreen')} />
        </View>
    )
}