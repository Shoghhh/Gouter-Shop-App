import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Styles } from "../../../styles/Styles";

export default function NewPasswordScreen({navigation}){
    const [ newPass, setNewPass] = useState('')
    const [ confirmPass, setConfirmPass] = useState('')

    return (
        <View style={Styles.containerPadding}>
            <Text style={[Styles.greyRegular16, {textAlign: 'center', paddingVertical: 15 }]}>Введите новый пароль</Text>
            <Input placeholder={'Новый пароль'} value={newPass} setValue={setNewPass} inputType={'pass'}/> 
            <Input placeholder={'Повтор пароля'} value={confirmPass} setValue={setConfirmPass} inputType={'pass'}/> 
            <Button text={'Сохранить'} onPress={() => navigation.navigate('ForgotPasswordVerificationSuccessScreen')}/>
        </View>
    )
}