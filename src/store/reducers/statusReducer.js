import { STATUS } from "../constants";
const initialState = {
  status: '',
};

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
export default statusReducer;
