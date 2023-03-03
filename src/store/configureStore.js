import {createStore, combineReducers, applyMiddleware} from 'redux';
import statusReducer from './reducers/statusReducer';
import thunk from "redux-thunk" 

const rootReducer = combineReducers({
  auth: statusReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk) );
