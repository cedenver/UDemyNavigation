import {combineReducers} from 'redux';
import LoginFormReducer from './LoginFormReducer';
import EmployeeCreateReducer from './EmployeeCreateReducer';
import EmployeeListReducer from './EmployeeListReducer';

export default combineReducers({
    AppStateLoginForm : LoginFormReducer,
    AppStateEmployeeCreate : EmployeeCreateReducer,
    AppStateEmployeeList : EmployeeListReducer
});