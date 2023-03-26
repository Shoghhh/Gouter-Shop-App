import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { View } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Popup from "../../components/Popup";
import { Styles } from "../../styles/Styles";


export default function EmailVerificationScreen({ navigation }) {
    const [code, setCode] = useState('')
    const [showPopup, setShowPopup] = useState(false)

    function onPressConfirm() {
        navigation.popToTop();
        navigation.navigate('Profile');
        setShowPopup(false);
      }

    return <View style={[Styles.container, { paddingTop: 20 }]}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            <Text style={[Styles.greyRegular16, { textAlign: 'center', marginBottom: 20 }]}>Введите код безопасности для подтверждения эл. почты</Text>
            <Input value={code} setValue={setCode} placeholder={'Код безопасности'} inputType={'code'} />
            <Button text={'Подтвердить'} onPress={() => {
                setShowPopup(true)
            }} />
        </ScrollView>
        <Popup showPopup={showPopup} title={'Ваша эл. почта успешно изменена'} text={''} btnText={'Ок'} onPressBtn={onPressConfirm}  />
    </View>
}