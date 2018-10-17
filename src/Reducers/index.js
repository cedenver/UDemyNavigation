import {combineReducers} from 'redux';
import LoginFormReducer from './LoginFormReducer';

export default combineReducers({
    AppStateLoginForm : LoginFormReducer
});