import {combineReducers} from 'redux';
import LoginFormReducer from '../Forms/Login/LoginFormReducer';
import EmployeeListReducer from '../Forms/EmployeeList/EmployeeListReducer';
import EmployeeFormReducer from '../Components/Custom/EmployeeFormReducer';

export default combineReducers({
    AppStateLoginForm : LoginFormReducer,
    AppStateEmployeeList : EmployeeListReducer,
    AppStateEmployeeForm : EmployeeFormReducer
});