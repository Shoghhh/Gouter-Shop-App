import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Styles } from "../../styles/Styles";

export default function ChangePasswordScreen({ navigation }) {
    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    return <View style={[Styles.container, { paddingTop: 20 }]}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            <Input value={oldPass} setValue={setOldPass} placeholder={'Старый пароль'} />
            <Input value={newPass} setValue={setNewPass} placeholder={'Новый пароль'} />
            <Input value={confirmPass} setValue={setConfirmPass} placeholder={'Повтор пароля'} />
            <Button text={'Сохранить'} onPress={() => {
                //todo
                navigation.navigate()
            }} />
        </ScrollView>
    </View>
}