import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {postRequest} from '../../../api/RequestHelpers';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { saveToken } from '../../../store/actions/saveToken';
import {Styles} from '../../../styles/Styles';

export default function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passError, setPassError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({
    pass: false,
    email: false,
  });

  function onPressLogin() {
    setError(false)
    let isValidInfo = validateData();

    isValidInfo &&
      postRequest('user_login', {
        email: email,
        password: pass,
      }).then(([status, data]) => {
        console.log('response =====>>>>', status, data);
        if (status === 200) {
          dispatch(saveToken(data.token));
          navigation.popToTop();
          navigation.navigate('Home');
          setError(false);
        } else if (status === 402 || status === 403 || status === 405) {
          setError('Неверный ввод данных. Повторите попытку.');
        } else if (status === 401) {
          //show popup
          //navigate verification screen
        }
      });
  }

  const validateEmail = () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  function validateData() {
    let myErrors = {...errors};
    let error = false;

    if (!pass) {
      myErrors.pass = true;
      error = true;
      setPassError(false);
    } else if (pass.length < 6) {
      error = true;
      setPassError('Пароль должен содержать не менее 6-ти символов.');
    } else {
      myErrors.pass = false;
      setPassError(false);
    }

    if (!email) {
      myErrors.email = true;
      error = true;
      setEmailError(false);
    } else if (!validateEmail()) {
      myErrors.email = true;
      error = true;
      setEmailError('Введите корректный адрес эл. почты');
    } else {
      myErrors.email = false;
      setEmailError(false);
    }

    setErrors(myErrors);
    return !error;
  }

  return (
    <>
      <Input
        placeholder={'Электронная почта'}
        value={email}
        setValue={setEmail}
        inputType={'default'}
        error={errors.email}
      />
      {emailError && <Text style={Styles.redRegular12}>{emailError}</Text>}
      <Input
        placeholder={'Пароль'}
        value={pass}
        setValue={setPass}
        inputType={'pass'}
        error={errors.pass || passError}
        secure
      />
      {passError && <Text style={Styles.redRegular12}>{passError}</Text>}
      {error && <Text style={Styles.redRegular12}>{error}</Text>}

      {/* 402 kam 403 Неверный ввод данных. Повторите попытку. */}
      {/* 401 User not verifed */}
      {/* 405 validations errors */}
      <View style={{marginTop: 10}}>
        <Button text={'Войти'} onPress={onPressLogin} />
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={[Styles.greySemiBold12, {textAlign: 'center'}]}>
            Забыли пароль?
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
