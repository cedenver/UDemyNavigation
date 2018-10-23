import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from '../../Components/Custom/EmployeeForm';
import {SaveButtonPressedAction, EmployeeDeleteAction} from './EmployeeEditActions';
import {Card, CardSection, Button, Confirm} from '../../Components/Common';
import {InputTextChangedAction} from '../../Components/Custom/EmployeeFormActions' 


class EmployeeEditForm extends Component {

    state = {showModal: false}

    componentWillMount(){
        _.each(this.props.employee, (value,prop) =>{
            this.props.InputTextChangedAction({prop,value});
        });
    }
    
    onButtonPress(){
        const {name,phone,shift} = this.props;
        // name:name yazmak yerine kısa kesiyoruz
        this.props.SaveButtonPressedAction({name,phone,shift, uid:this.props.employee.uid});
    }

    onTextPress(){
        const {phone,shift} = this.props;
        // SMS editörünü açarak mail göndermeni sağlar
        Communications.text(phone,`Your upcoming shift is on ${shift}`);
    }

    onDecline(){
        this.setState({showModal: false});
    }

    onAccept(){
        this.props.EmployeeDeleteAction({uid: this.props.employee.uid} )
    }

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=>this.setState({showModal: !this.state.showModal})}>Fire Employee</Button>
                </CardSection>
                <Confirm visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)} onDecline={this.onDecline.bind(this)}>
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

mapStateToProps = (state) => {
    const {name, phone, shift} = state.AppStateEmployeeForm;
    return {name,phone,shift};
}

export default connect(mapStateToProps,{InputTextChangedAction,SaveButtonPressedAction,EmployeeDeleteAction})(EmployeeEditForm);