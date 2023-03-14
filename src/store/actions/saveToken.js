import { TOKEN } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function saveToken(token) {
  return async function (dispatch) {
    await AsyncStorage.setItem(
      'token',
      JSON.stringify(token),
    )
    dispatch({
      type: TOKEN,
      payload: token,
    })
  }
}

export function deleteToken() {
  return async function (dispatch) {
    await AsyncStorage.removeItem('token')
    dispatch({
      type: TOKEN,
      payload: '',
    })
  }
}


export function checkToken() {
  return async function (dispatch) {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      await dispatch({
        type: TOKEN,
        payload: token,
      })
    }
  }
}