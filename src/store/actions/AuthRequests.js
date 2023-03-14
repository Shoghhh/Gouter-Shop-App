import { postRequest } from "../../api/RequestHelpers"
import { saveRegisterStatus } from "./authActions";
import { saveToken } from "./saveToken";


export function LoginFunc(body) {
    // console.log(body, 'body');
    return function (dispatch){
        // console.log(body);
        postRequest('user_login', body).then(([status, data]) => {
            console.log(status, data);
            if (status === 200) {
               saveToken(data.token)
            } else {
                dispatch(saveRegisterStatus(status))
            }
        })
    }
}