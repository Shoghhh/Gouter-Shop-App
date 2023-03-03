import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Styles } from "../../../styles/Styles";


export default function ForgotPasswordScreen({navigation}){
    const [email, setEmail] = useState('')
    return (
        <View style={[Styles.containerPadding, {paddingTop: 20}]}>
            <Input placeholder={'Электронная почта '} value={email} setValue={setEmail}/> 
            <Button text={'Отправить'} onPress={() => navigation.navigate('ForgotPasswordVerificationScreen')}/>
        </View>
    )
}