import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './Components/Forms/LoginForm';
import EmployeeList from './Components/Forms/EmployeeList';
import EmployeeCreate from './Components/Forms/EmployeeCreate';
import EmployeeEdit from './Components/Forms/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene initial key="login" component={LoginForm} title="Please Login" />
                </Scene>
                <Scene key="main">
                    <Scene key="employeeList" rightTitle="Add" 
                        onRight={()=>{Actions.employeeCreate()}} component={EmployeeList} title="Employee List" />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee"/>
                    <Scene key="employeeEdit" component = {EmployeeEdit} title="Edit Employee" />
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;