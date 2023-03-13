import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {postRequestOld} from '../../../api/RequestHelpers';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Popup from '../../../components/Popup';
import {saveStatus} from '../../../store/actions/saveStatus';
import {Styles} from '../../../styles/Styles';

export default function VerificationScreen({navigation, route}) {
  const {email} = route.params;
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  useEffect(() => {
    console.log(email);
  }, []);
  
  function onPressConfirm() {
    navigation.popToTop();
    navigation.navigate('Home');
    dispatch(saveStatus());
    setShowPopup(false);
  }
  function onPressVerify() {
    if (!code) {
      setCodeError(true);
      setShowErrorMsg(false)
    } else if (code.length < 6) {
      setCodeError(true);
      setShowErrorMsg(
        'Код безопасности должен содержать не менее 6-ти символов.',
      );
    } else {
      setCodeError(false);
      setShowErrorMsg(false);
      postRequestOld('user_verification', {
        mail: email,
        mail_code: code,
      }).then(res => {
        console.log(res);
        if (res.status) {
          setShowPopup(true);
        } else if (res.message === 'wrong mail_code') {
          setCodeError(true);
          setShowErrorMsg('Неверный код');
        }
      });
    }
  }

  return (
    <View style={Styles.containerPadding}>
      <Text
        style={[
          Styles.greyRegular16,
          {textAlign: 'center', marginVertical: 20},
        ]}>
        Мы отправили код безопасности на вашу эл. почту,введите её ниже для
        подтверждения
      </Text>
      <Input
        placeholder={'Код безопасности'}
        value={code}
        setValue={setCode}
        inputType={'code'}
        error={codeError}
      />
      {showErrorMsg && <Text style={Styles.redRegular12}>{showErrorMsg}</Text>}
      <Button text={'Подтвердить'} onPress={onPressVerify} />
      <Popup
        showPopup={showPopup}
        title={'Ваш аккаунт успешно подтверждён'}
        text={''}
        btnText={'Ок'}
        onPressBtn={onPressConfirm}
      />
    </View>
  );
}
