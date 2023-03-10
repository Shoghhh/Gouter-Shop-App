import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Styles } from "../../styles/Styles";


export default function ChangeEmailScreen({navigation}) {
    const [email, setEmail] = useState('')
    return <View style={[Styles.container, {paddingTop: 20}]}>
        <ScrollView style={{paddingHorizontal: 20}}>
            <Input value={email} setValue={setEmail} placeholder={'Новая эл. почта '} />
            <Button text={'Отправить'} onPress={() => navigation.navigate('EmailVerificationScreen')}/>
        </ScrollView>
    </View>
}