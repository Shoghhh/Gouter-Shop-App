import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {postRequest, postRequestOld} from '../../../api/RequestHelpers';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {saveStatus} from '../../../store/actions/saveStatus';
import {Styles} from '../../../styles/Styles';

export default function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [errors, setErrors] = useState({
    pass: false,
    email: false,
  });

  function onPressLogin() {
    let isValid = validate();
    isValid &&
      postRequest('user_login', {
        email: email,
        password: pass,
      }).then(res => {
        console.log(res);
        let status = res.status

        if (status == 405) {
          setShowErrorMsg('Введите корректный адрес эл. почты');
        } else if (status == 403) {
          setShowErrorMsg('Нет такого пользователя');
        } else if (status == 402) {
          setShowErrorMsg('Неверный ввод данных. Повторите попытку.');
        } else if (status == 401) {
          //todo verify
        } else if (status == 200) {
            return res.json()
        }
        //todo status codes in redux 
      }).then((res) => {
        console.log(res);
      })
      ;
  }

  function validate() {
    let myErrors = {...errors};
    let error = false;
    // setShowErrorMsg(false);

    if (!pass) {
      myErrors.pass = true;
      error = true;
    } else if (pass.length < 6) {
      error = true;
      setShowErrorMsg('Пароль должен содержать не менее 6-ти символов.');
    } else {
      myErrors.pass = false;
      setShowErrorMsg(false);
    }

    if (!email) {
      myErrors.email = true;
      error = true;
    } else {
      myErrors.email = false;
    }
    setErrors(myErrors);
    return error ? false : true;
  }

  return (
    <>
      <Input
        placeholder={'Электронная почта'}
        value={email}
        setValue={setEmail}
        inputType={'default'}
        error={errors.email || showErrorMsg}
      />
      <Input
        placeholder={'Пароль'}
        value={pass}
        setValue={setPass}
        inputType={'pass'}
        error={errors.pass || showErrorMsg}
        secure
      />
      {showErrorMsg && <Text style={Styles.redRegular12}>{showErrorMsg}</Text>}
      {/* Неверный ввод данных. Повторите попытку. */}
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
