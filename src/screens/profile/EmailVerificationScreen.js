import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { deleteStatus } from "../../store/actions/saveStatus";
import { Styles } from "../../styles/Styles";


export default function EmailVerificationScreen({ navigation }) {
    const [code, setCode] = useState('')
    const dispatch = useDispatch()
    const [showPopup, setShowPopup] = useState()

    return <View style={[Styles.container, { paddingTop: 20 }]}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            <Text style={[Styles.greyRegular16, { textAlign: 'center', marginBottom: 20 }]}>Введите код безопасности для подтверждения эл. почты</Text>
            <Input value={code} setValue={setCode} placeholder={'Код безопасности'} inputType={'code'} />
            <Button text={'Подтвердить'} onPress={() => {
                // dispatch(deleteStatus())
                // navigation.popToTop()
                navigation.navigate('EmailChangedSuccess')
            }} />
        </ScrollView>
        <Popup showPopup={showPopup} title={'Ваш аккаунт успешно подтверждён'} text={''} btnText={'Ок'} onPressBtn={onPressConfirm} />
    </View>
}