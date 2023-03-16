import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {postRequest} from '../../../api/RequestHelpers';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {Styles} from '../../../styles/Styles';

export default function ForgotPasswordScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  function send() {
    if (!email) {
      setEmailError(true);
      setErrorMsg(false);
    } else if (!validateEmail()) {
      setEmailError(true);
      setErrorMsg('Введите корректный адрес эл. почты.');
    } else {
      setEmailError(false);
      setErrorMsg(false);
      postRequest('forget_password', {
        email: email,
      }).then(([status, body]) => {
          if (status === 200) {
            navigation.navigate('ForgotPasswordVerificationScreen', {email})
        } else if (401) {
          setErrorMsg('Нет такого пользователя');
        } else if (status === 405) {
          setErrorMsg('Введите корректный адрес эл. почты.');
        }
      });
    }
}


  const validateEmail = () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (
    <View style={[Styles.containerPadding, {paddingTop: 20}]}>
      <Input
        placeholder={'Электронная почта '}
        value={email}
        setValue={setEmail}
        error={emailError || errorMsg}
      />
      {errorMsg && <Text style={Styles.redRegular12}>{errorMsg}</Text>}
      <Button text={'Отправить'} onPress={send} />
    </View>
  );
}
