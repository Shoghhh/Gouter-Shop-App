import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { postRequest, postRequestOld } from '../../../api/RequestHelpers';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { login, LoginFunc } from '../../../store/actions/AuthRequests';
import { Styles } from '../../../styles/Styles';

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.login)
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passError, setPassError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [errors, setErrors] = useState({
    pass: false,
    email: false,
  });

  useEffect(() => {
    console.log('status',status);
  }, [status])


  // function onPressLogin() {
  //   let isValid = validate();
  //   isValid &&
  //     postRequest('user_login', {
  //       email: email,
  //       password: pass,
  //     }).then(res => {
  //       console.log(res);
  //       let status = res.status

  //       if (status == 405) {
  //         setShowErrorMsg('Введите корректный адрес эл. почты');
  //       } else if (status == 403) {
  //         setShowErrorMsg('Нет такого пользователя');
  //       } else if (status == 402) {
  //         setShowErrorMsg('Неверный ввод данных. Повторите попытку.');
  //       } else if (status == 401) {
  //         //todo verify
  //       } else if (status == 200) {
  //           return res.json()
  //       }
  //       //todo status codes in redux 
  //     }).then((res) => {
  //       console.log(res);
  //     })
  //     ;
  // }

  function onPressLogin() {

    let isValidInfo = validate();
    console.log(isValidInfo);
    isValidInfo && dispatch(LoginFunc({
      email: email,
      password: pass,
    }))
    // isValid &&
    //   postRequest('user_login', {
    //     email: email,
    //     password: pass,
    //   })
  }

  const validateEmail = () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function validate() {
    let myErrors = { ...errors };
    let error = false;

    if (!pass) {
      myErrors.pass = true;
      error = true;
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
    } else if (!validateEmail()) {
      myErrors.email = true;
      error = true;
      setEmailError('Введите корректный адрес эл. почты');
    } else {
      myErrors.email = false;
      setEmailError(false)
    }

    setErrors(myErrors);
    return !error
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

      {/* {error && <Text style={Styles.redRegular12}>{showErrorMsg}</Text>} */}

      {/* 402 kam 403 Неверный ввод данных. Повторите попытку. */}
      {/* 401 User not verifed */}
      {/* 405 validations errors */}
      <View style={{ marginTop: 10 }}>
        <Button text={'Войти'} onPress={onPressLogin} />
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={[Styles.greySemiBold12, { textAlign: 'center' }]}>
            Забыли пароль?
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
