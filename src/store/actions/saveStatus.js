import { STATUS } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function saveStatus() {
  return async function (dispatch) {
    await AsyncStorage.setItem(
      'logged',
      JSON.stringify(true),
    )
    dispatch({
      type: STATUS,
      payload: 'true',
    })
  }
  // return ({
  //   type: STATUS,
  //   payload: '',
  // })
}

export function deleteStatus() {
  return async function (dispatch) {
    await AsyncStorage.removeItem('logged')
    dispatch({
      type: STATUS,
      payload: '',
    })
  }
  // return ({
  //   type: STATUS,
  //   payload: '',
  // })
}


export function checkStatus() {
  return async function (dispatch) {
    const value = await AsyncStorage.getItem('logged');
    if (value) {
      await dispatch({
        type: STATUS,
        payload: 'true',
      })
    }
  }
  // return ({
  //   type: STATUS,
  //   payload: '',
  // })
}