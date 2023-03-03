import React, { useState } from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Popup from "../../../components/Popup";
import { saveStatus } from "../../../store/actions/saveStatus";
import { Styles } from "../../../styles/Styles";


export default function VerificationScreen({ navigation }) {
    const dispatch = useDispatch()
    const [code, setCode] = useState('')
    const [showPopup, setShowPopup] = useState(false)

    function onPressConfirm() {
        navigation.popToTop()
        navigation.navigate('Home');
        dispatch(saveStatus())
        setShowPopup(false)
    }

    return (
        <View style={Styles.containerPadding}>
            <Text style={[Styles.greyRegular16, { textAlign: 'center', marginVertical: 20 }]}>Мы отправили код безопасности на
                вашу эл. почту,введите её ниже для
                подтверждения</Text>
            <Input placeholder={'Код безопасности'} value={code} setValue={setCode} inputType={'code'} />
            <Button text={'Подтвердить'} onPress={() => setShowPopup(true)} />
            <Popup showPopup={showPopup} title={'Ваш аккаунт успешно подтверждён'} text={''} btnText={'Ок'} onPressBtn={onPressConfirm}/>
        </View>
    )
}