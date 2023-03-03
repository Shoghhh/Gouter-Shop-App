import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { saveStatus } from "../../../store/actions/saveStatus";
import { Styles } from "../../../styles/Styles";

export default function LoginScreen({ navigation }) {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    function onPressLogin(){
        navigation.popToTop()
        navigation.navigate('Home');
        dispatch(saveStatus())
    }

    return (
        <>
            <Input placeholder={'Электронная почта или телефон'} value={email} setValue={setEmail} inputType={'default'} />
            <Input placeholder={'Пароль'} value={pass} setValue={setPass} inputType={'pass'} secure />
            <View style={{ marginTop: 10 }} >
                <Button text={'Войти'} onPress={onPressLogin}/>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                    <Text style={[Styles.greySemiBold12, { textAlign: 'center' }]}>Забыли пароль?</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}