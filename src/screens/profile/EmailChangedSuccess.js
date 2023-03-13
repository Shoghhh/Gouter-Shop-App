import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import Button from "../../components/Button";
import { Styles } from "../../styles/Styles";


export default function EmailChangedSuccess({ navigation }) {
    function onPressClose(){
        navigation.replace('AuthScreen', {page: 'login'})
    }
    //todo
    return <View style={[Styles.container, { padding: 20 }]}>
        <Text style={[Styles.greyRegular16, { marginBottom: 20, textAlign: 'center' }]}>Ваша эл. почта успешно изменена</Text>
        <Button text={'Закрыть'} onPress={onPressClose} />
    </View>
}