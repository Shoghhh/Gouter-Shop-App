import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";


export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <>
            <Input placeholder={'Имя'} value={name} setValue={setName} />
            <Input placeholder={'Фамилия'} value={surname} setValue={setSurname} />
            <Input placeholder={'Электронная почта'} value={email} setValue={setEmail} inputType={'email'} />
            <Input placeholder={'Пароль'} value={pass} setValue={setPass} inputType={'pass'} />
            <Input placeholder={'Повторите пароль'} value={confirmPass} setValue={setConfirmPass} inputType={'pass'} />
            <Input placeholder={'+7 (000) 000-00-00'} value={phone} setValue={setPhone} inputType={'phone'} />
            <View style={{ marginTop: 10 }} >
                <Button text={'Зарегистрироваться'} onPress={() => navigation.navigate('VerificationScreen')} />
            </View>
        </>
    )
}