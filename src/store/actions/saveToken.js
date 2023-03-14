import { TOKEN } from "..";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function saveToken() {
  return async function (dispatch) {
    await AsyncStorage.setItem(
      'logged',
      JSON.stringify(true),
    )
    dispatch({
      type: TOKEN,
      payload: 'true',
    })
  }
}

export function deleteToken() {
  return async function (dispatch) {
    await AsyncStorage.removeItem('logged')
    dispatch({
      type: TOKEN,
      payload: '',
    })
  }
}


export function checkToken() {
  return async function (dispatch) {
    const value = await AsyncStorage.getItem('logged');
    if (value) {
      await dispatch({
        type: TOKEN,
        payload: 'true',
      })
    }
  }
}