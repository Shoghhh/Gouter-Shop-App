import { REGISTER_STATUS_CODE, LOGIN_STATUS_CODE, TOKEN } from "./constants";

const initialState = {
    register: '',
    login: '',
    token: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_STATUS_CODE:
            return {
                ...state,
                register: action.payload,
            };
        case LOGIN_STATUS_CODE:
            return {
                ...state,
                login: action.payload,
            };
        case STATUS:
            return {
                ...state,
                status: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer