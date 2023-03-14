import { REGISTER_STATUS_CODE, LOGIN_STATUS_CODE } from "..";

export function saveRegisterStatus(statusCode) {
    return ({
        type: REGISTER_STATUS_CODE,
        payload: statusCode,
    })
}

export function saveLoginStatus(statusCode) {
    return {
        type: LOGIN_STATUS_CODE,
        payload: statusCode,
    }
}
