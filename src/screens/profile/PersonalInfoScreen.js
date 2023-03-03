import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Popup from "../../components/Popup";
import { deleteStatus } from "../../store/actions/saveStatus";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";


export default function PersonalInfoScreen({navigation}) {
    const [name, setName] = useState('Name')
    const [surname, setSurname] = useState('Username')
    const [phone, setPhone] = useState('+7 (984) 945-75-48')
    const [email, setEmail] = useState('norayr-00@mail.ru')
    const [showPopup, setShowPopup] = useState(false)
    const dispatch = useDispatch()

    function onPressDelete(){
        setShowPopup(false);
        navigation.popToTop()
        navigation.navigate('Home')
        dispatch(deleteStatus())
    }

    return <View style={[Styles.container, { paddingTop: 20 }]}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            <Input value={name} setValue={setName} />
            <Input value={surname} setValue={setSurname} />
            <Input value={phone} setValue={setPhone} />
            <Input value={email} setValue={setEmail} />
            <TouchableOpacity style={styles.delete} onPress={() => setShowPopup(true)}>
                <Text style={styles.deleteText}>Удалить свой акканут</Text>
            </TouchableOpacity>
        </ScrollView>
        <View style={Styles.absoluteButton}>
            <Button text={'Сохранить'} />
        </View>
        <Popup showPopup={showPopup} title={'Выход'} text={'Вы уверены, что хотите выйти?'} firstBtnText={'Да'} secondBtnText={'Нет'} firstBtnTextColor={AppColors.RED_COLOR} firstOnPress={onPressDelete} secondOnPress={() => setShowPopup(false)}/>
    </View>
}

const styles = StyleSheet.create({
    deleteText: {
        color: AppColors.RED_COLOR,
        fontFamily: 'OpenSans-Regular',
    },
    delete: {
        alignSelf: 'center',
        marginTop: 10
    }

})