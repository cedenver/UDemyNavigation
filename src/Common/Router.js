import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from '../Forms/Login/LoginForm';
import EmployeeListForm from '../Forms/EmployeeList/EmployeeListForm';
import EmployeeCreateForm from '../Forms/EmployeeCreate/EmployeeCreateForm';
import EmployeeEditForm from '../Forms/EmployeeEdit/EmployeeEditForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene initial key="login" component={LoginForm} title="Please Login" />
                </Scene>
                <Scene key="main">
                    <Scene key="employeeList" rightTitle="Add" 
                        onRight={()=>{Actions.employeeCreate()}} component={EmployeeListForm} title="Employee List" />
                    <Scene key="employeeCreate" component={EmployeeCreateForm} title="Create Employee"/>
                    <Scene key="employeeEdit" component = {EmployeeEditForm} title="Edit Employee" />
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;