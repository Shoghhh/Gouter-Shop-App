import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Popup from "../../components/Popup";
import { deleteToken } from "../../store/actions/saveToken";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";

export default function PersonalInfoScreen({ navigation }) {
    const userInfo = { name: 'Name', username: 'Username', phone: '+7 (984) 945-75-48' }
    const [name, setName] = useState('Name')
    const [username, setUsername] = useState('Username')
    const [phone, setPhone] = useState('+7 (984) 945-75-48')
    const [email, setEmail] = useState('norayr-00@mail.ru')
    const [pass, setPass] = useState('norayr-00@mail.ru')
    const [showPopup, setShowPopup] = useState(false)
    const [currentEditingField, setCurrentEditingField] = useState(null)
    const [nameChanged, setNameChanged] = useState(false)
    const [phoneChanged, setPhoneChanged] = useState(false)
    const [usernameChanged, setUsernameChanged] = useState(false)
    const dispatch = useDispatch()

    function onPressDelete() {
        setShowPopup(false);
        navigation.popToTop()
        navigation.navigate('Home')
        dispatch(deleteToken())
    }

    return <View style={[Styles.container, { paddingTop: 20 }]}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            <Input value={name} setValue={(e) => { setName(e); setNameChanged(e === userInfo.name ? false : true) }} notEditable onPressEdit={() => setCurrentEditingField('name')} isCurrentEditingField={currentEditingField == 'name'} />
            <Input value={username} setValue={(e) => { setUsername(e); setUsernameChanged(e === userInfo.username ? false : true) }} notEditable onPressEdit={() => setCurrentEditingField('username')} isCurrentEditingField={currentEditingField == 'username'} />
            <Input value={phone} setValue={(e) => { setPhone(e); setPhoneChanged(e === userInfo.phone ? false : true) }} notEditable inputType={'phone'} onPressEdit={() => setCurrentEditingField('phone')} isCurrentEditingField={currentEditingField == 'phone'} />
            <Input value={email} setValue={setEmail} notEditable onPressEdit={() => {
                setCurrentEditingField(null)
                navigation.navigate('ChangeEmailScreen')
            }} />
            <Input value={pass} setValue={setPass} notEditable inputType={'pass'} onPressEdit={() => {
                setCurrentEditingField(null)
                navigation.navigate('ChangePasswordScreen')
            }} />
            <TouchableOpacity style={styles.delete} onPress={() => setShowPopup(true)}>
                <Text style={styles.deleteText}>Удалить свой акканут</Text>
            </TouchableOpacity>
        </ScrollView>
        {(nameChanged || phoneChanged || usernameChanged) && <View style={Styles.absoluteButton}>
            <Button text={'Сохранить'} />
        </View>}
        <Popup showPopup={showPopup} title={'Выход'} text={'Вы уверены, что хотите выйти?'} firstBtnText={'Да'} secondBtnText={'Нет'} firstBtnTextColor={AppColors.RED_COLOR} firstOnPress={onPressDelete} secondOnPress={() => setShowPopup(false)} />
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