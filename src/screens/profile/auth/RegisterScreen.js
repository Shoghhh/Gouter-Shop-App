import React, { useState } from "react";
import { Text, View } from "react-native";
import { postRequest } from "../../../api/RequestHelpers";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { AppColors } from "../../../styles/AppColors";
import { Styles } from "../../../styles/Styles";


export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [phone, setPhone] = useState('')

    const [errors, setErrors] = useState({
        name: false,
        surname: false,
        email: false,
        pass: false,
        confirmPass: false,
        phone: false,
        confirmPassMsg: false,
        passMsg: false,
        emailMsg: false
    })

    function validate() {
        let items = { ...errors }
        let error = false
        if (!name) {
            items.name = true
            error = true
        } else {
            items.name = false
        }
        if (!surname) {
            items.surname = true
            error = true
        } else {
            items.surname = false
        }
        if (!email) {
            items.email = true
            error = true
        } else {
            items.email = false
        }
        if (!pass) {
            items.pass = true
            error = true
        } else if (pass && pass.length < 6) {
            items.pass = true
            items.passMsg = true
            error = true
        } else {
            items.pass = false
            items.passMsg = false
        }
        if (!confirmPass) {
            items.confirmPass = true
            error = true
        } else {
            items.confirmPass = false
        }
        if (!phone) {
            items.phone = true
            error = true
        } else {
            items.phone = false
        }
        if ((pass && confirmPass) && (pass != confirmPass)) {
            items.confirmPassMsg = true
            error = true
        } else {
            items.confirmPassMsg = false
        }

        setErrors(items)
        return error ? false : true
    }

    function register() {
        let areValid = validate() 
        areValid && postRequest('registration', {
            name: name,
            last_name: surname,
            email: email,
            password: pass,
            phone: phone
        }).then(res => {
            console.log('res', res);
            if (res.status) {
                navigation.navigate('VerificationScreen')
            } else {
                let myErrors = { ...errors }
                myErrors.emailMsg = true
                setErrors(myErrors)
            }
        })
    }

    return (
        <>
            <Input placeholder={'Имя'} value={name} setValue={setName} error={errors.name} />
            <Input placeholder={'Фамилия'} value={surname} setValue={setSurname} error={errors.surname} />
            <Input placeholder={'Электронная почта'} value={email} setValue={setEmail} inputType={'email'} error={errors.email || errors.emailMsg} />
            {errors.emailMsg && <Text style={[Styles.blackRegular12, { color: AppColors.RED_COLOR, marginBottom: 15 }]}>Введите корректный адрес эл. почты.</Text>}
            <Input placeholder={'Пароль'} value={pass} setValue={setPass} inputType={'pass'} error={errors.pass || errors.passMsg || errors.confirmPassMsg} />
            {errors.passMsg && <Text style={[Styles.blackRegular12, { color: AppColors.RED_COLOR, marginBottom: 15 }]}>Пароль должен содержать не менее 6-ти символов.</Text>}
            <Input placeholder={'Повторите пароль'} value={confirmPass} setValue={setConfirmPass} inputType={'pass'} error={errors.confirmPass || errors.confirmPassMsg} />
            {errors.confirmPassMsg && <Text style={[Styles.blackRegular12, { color: AppColors.RED_COLOR, marginBottom: 15 }]}>Пароли не совпадают.</Text>}
            <Input placeholder={'+7 (000) 000-00-00'} value={phone} setValue={setPhone} inputType={'phone'} error={errors.phone} />
            <View style={{ marginTop: 10 }} >
                <Button text={'Зарегистрироваться'} onPress={register} />
            </View>
        </>
    )
}