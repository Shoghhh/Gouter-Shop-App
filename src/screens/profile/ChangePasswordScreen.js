import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Styles } from "../../styles/Styles";
import { postRequestAuth } from "../../api/RequestHelpers";
import { useSelector } from "react-redux";
import { Text } from "react-native";
import Popup from "../../components/Popup";

export default function ChangePasswordScreen({ navigation }) {
    const { token } = useSelector(state => state.auth)

    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const [oldPassErr, setOldPassErr] = useState(false)
    const [newPassErr, setNewPassErr] = useState(false)
    const [confirmPassErr, setConfrmPassErr] = useState(false)

    const [passErrorMsg, setPassErrorMsg] = useState(false)

    const [loading, setLoading] = useState(false)
    const [showPopup, setShowPopup] = useState(false)


    function onChangePass() {
        setLoading(true)
        if (!oldPass || !newPass || !confirmPass) {
            if (!oldPass) {
                setOldPassErr(true)
            } else {
                setOldPassErr(false)
            }
            if (!newPass) {
                setNewPassErr(true)
            } else {
                setNewPassErr(false)
            }
            if (!confirmPass) {
                setConfrmPassErr(true)
            } else {
                setConfrmPassErr(false)
            }
            setLoading(false)
            setPassErrorMsg(false)
            return
        } else if (oldPass.length < 6 || newPass.length < 6 || confirmPass.length < 6) {
            if (oldPass.length < 6) {
                setOldPassErr(true)
            } else {
                setOldPassErr(false)
            }
            if (newPass.length < 6) {
                setNewPassErr(true)
            } else {
                setNewPassErr(false)
            }
            if (confirmPass.length < 6) {
                setConfrmPassErr(true)
            } else {
                setConfrmPassErr(false)
            }
            setPassErrorMsg('Пароль должен содержать не менее 6-ти символов.')
            setLoading(false)
            return
        } else if (newPass != confirmPass) {
            setPassErrorMsg('Пароли не совпадают.')
            setOldPassErr(false)
            setNewPassErr(true)
            setConfrmPassErr(true)
            setLoading(false)
            return
        } else {
            setOldPassErr(false)
            setNewPassErr(false)
            setConfrmPassErr(false)
            setPassErrorMsg(false)
        }

        postRequestAuth('change_password_data', token, {
            old_password: oldPass,
            new_password: newPass,
            new_password_confirmation: confirmPass
        }).then(res => {
            console.log(res);
            setLoading(false)
            if (res.status == true) {
                setShowPopup(true)
            } else if (res.message == 'not valid old password') {
                setOldPassErr(true)
                setPassErrorMsg('Неверный старый пароль')
            }

        })
    }
    function onPressOk() {
        navigation.popToTop();
        navigation.navigate('Profile');
        setShowPopup(false);
    }

    return <View style={[Styles.container, { paddingTop: 20 }]}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            <Input value={oldPass} setValue={setOldPass} placeholder={'Старый пароль'} inputType={'pass'} error={oldPassErr} />
            <Input value={newPass} setValue={setNewPass} placeholder={'Новый пароль'} inputType={'pass'} error={newPassErr} />
            <Input value={confirmPass} setValue={setConfirmPass} placeholder={'Повтор пароля'} inputType={'pass'} error={confirmPassErr} />
            {passErrorMsg && (
                <Text style={Styles.redRegular12}>{passErrorMsg}</Text>
            )}
            <Popup showPopup={showPopup} title={'Ваш пароль успешно изменён'} text={''} btnText={'Ок'} onPressBtn={onPressOk} />
            <Button text={'Сохранить'} onPress={onChangePass} loading={loading} />
        </ScrollView>
    </View>
}