import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Button from "../../components/Button";
import OrderInput from "../../components/OrderInput";
import Popup from "../../components/Popup";
import Select from "../../components/Select";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";

export default function OrderingScreen({ navigation }) {

    const [selectedPaymentType, setSelectedPaymentType] = useState(0)
    const [paymentTypes, setPaymentTypes] = useState([
        { id: 0, text: 'Банковский перевод' },
        { id: 1, text: 'Банковская карта на сайте' },
        { id: 2, text: 'Наличный расчёт при получении' },
        { id: 3, text: 'Банковская карта при получении' },
    ])
    const [selectedCommunicationWay, setSelectedCommunicationWay] = useState(0)
    const [communicationWays, setCommunicationWays] = useState([
        { id: 0, text: 'Звонок не нужен. Буду отслеживать заказ самостоятельно в личном кабинете, по электронной почте или в моб. приложении)' },
        { id: 1, text: 'Перезвоните мне. Хочу подтвердить заказ по телефону' },
    ])

    const [selectedToDo, setSelectedToDo] = useState(0)
    const [toDos, setToDos] = useState([
        { id: 0, text: 'Позвонить и согласовать изменения' },
        { id: 1, text: 'Не звонить и подобрать аналог' },
    ])
    const [showPopup, setShowPopup] = useState(false)
    // const [delivery, setDelivery] = useState([
    //     {}
    // ])
    const [date, setDate] = useState(new Date())
    const [phone, setPhone] = useState('+7 (999) 977-79-97')
    const [name, setName] = useState('Name Surname')
    const [email, setEmail] = useState('usermail@mail.com')




    function onPressOk() {
        navigation.popToTop()
        navigation.navigate('BasketScreen')
        setShowPopup(false)
    }

    return <View style={[Styles.container, { paddingTop: 20 }]}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            <Text style={[Styles.blackSemiBold18, { marginBottom: 15 }]}>Укажите информация для доставки</Text>
            <OrderInput label={'Адрес доставки'} addressButton />
            <OrderInput label={'Способ доставки'} dropdown />
            <OrderInput label={'Дата доставки'} date />
            <OrderInput label={'Телефон'} value={phone} phone />
            <OrderInput label={'Имя'} />
            <OrderInput label={'Электронная почта'} />
            <OrderInput label={'Комментарий'} />
            
            <Text style={[Styles.blackSemiBold18, { marginBottom: 15 }]}>Выберите способ оплаты</Text>
            <Select data={paymentTypes} selectedIndex={selectedPaymentType} setSelectedIndex={setSelectedPaymentType} />
            <Text style={[Styles.blackSemiBold18, { marginBottom: 15 }]}>Проверьте ваш заказ</Text>
            <Text style={[Styles.blackSemiBold18, { marginBottom: 15 }]}>Что делать, если какой-то товар закончился?</Text>
            <Select data={toDos} selectedIndex={selectedToDo} setSelectedIndex={setSelectedToDo} />
            <Text style={[Styles.blackSemiBold18, { marginBottom: 15 }]}>Укажите удобный способ коммуникации по заказу с Вами</Text>
            <Select data={communicationWays} selectedIndex={selectedCommunicationWay} setSelectedIndex={setSelectedCommunicationWay} />
            <Button text={'Оформить заказ'} marginBottom={20} onPress={() => setShowPopup(true)} />
            <Text style={[Styles.greyRegular12, { textAlign: 'center', marginBottom: 20 }]}>{`Нажимая на кнопку <<Оформить заказ>> вы соглашаетесь с `} <Text style={{ color: AppColors.GREEN_COLOR }}>пользовательским соглашением</Text></Text>
        </ScrollView>
        <Popup showPopup={showPopup} title={'Заказ успешно оформлен'} text={''} btnText={'Ок'} onPressBtn={onPressOk} />
    </View>
}