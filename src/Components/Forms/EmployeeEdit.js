import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {EmployeeUpdateAction,EmployeeSaveAction} from '../../Actions';
import {Card, CardSection, Button} from '../Common';

class EmployeeEdit extends Component {
    componentWillMount(){
        _.each(this.props.employee, (value,prop) =>{
            this.props.EmployeeUpdateAction({prop,value});
        });
    }
    
    onButtonPress(){
        const {name,phone,shift} = this.props;
        // name:name yazmak yerine kısa kesiyoruz
        this.props.EmployeeSaveAction({name,phone,shift, uid:this.props.employee.uid});
    }

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>
            </Card>
        );
    }
}

mapStateToProps = (state) => {
    const {name, phone, shift} = state.AppStateEmployeeCreate;

    return {name,phone,shift};
}

export default connect(mapStateToProps,{EmployeeUpdateAction,EmployeeSaveAction})(EmployeeEdit);