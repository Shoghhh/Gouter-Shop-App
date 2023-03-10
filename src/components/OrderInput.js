import React, { useState } from "react";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, TextInput, View } from "react-native";
import DatePicker from "react-native-date-picker";
import { AppColors } from "../styles/AppColors";
import { Styles } from "../styles/Styles";
import moment from 'moment';

export default function OrderInput({ label, placeholder, value, setValue, addressButton, date, dropdown, phone }) {
    const [openDatePicker, setOpenDatePicker] = useState(false)
    const [myDate, setMyDate] = useState(new Date())

    // const options = [
    //     { label: 'Доставка курьером', value: 0 },
    //     { label: 'Cамовывоз', value: 1 }
    // ];

    // const [selectedOption, setSelectedOption] = useState(null);

    // const handleSelect = option => {
    //     setSelectedOption(option);
    // };

    return <View>
        <Text style={Styles.blackSemiBold14}>{label}</Text>
        {addressButton ?
            <TouchableOpacity style={styles.input}>
                <Text>{value}</Text>
            </TouchableOpacity>
            : dropdown ?
            //todo
            <></>
                : date ? <>
                    <TouchableOpacity style={styles.input} onPress={() => setOpenDatePicker(true)}>
                        <Text>{moment(myDate).format('D.M.YYYY')}</Text>
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        mode="date"
                        cancelText="отменить"
                        confirmText="подтвердить"
                        title={'Выберите дату'}
                        open={openDatePicker}
                        date={myDate}
                        minimumDate={new Date()}
                        onConfirm={(date) => {
                            setOpenDatePicker(false)
                            setMyDate(date)
                        }}
                        onCancel={() => {
                            setOpenDatePicker(false)
                        }}
                    />
                </> : <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={(value) => setValue(value)}
                    keyboardType={phone ? 'numeric' : 'default'}
                    style={[Styles.blackRegular12, styles.input]}
                />}
    </View>
}

const styles = StyleSheet.create({
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: AppColors.WHITE_SMOKE_COLOR,
        borderRadius: 6,
        marginBottom: 20,
        marginTop: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        // alignItems: 'center'
    }
})