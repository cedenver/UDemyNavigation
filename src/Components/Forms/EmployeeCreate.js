import React, {Component} from 'react';
import { connect } from 'react-redux';
import { EmployeeUpdateAction, EmployeeCreateAction } from '../../Actions';
import {Card,CardSection,Button} from '../Common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component{

    onButtonPress(){
        const {name, phone, shift} = this.props;
        // Eğer shift seçilmemiş ise yani null ise değeri default Monday
        this.props.EmployeeCreateAction({name, phone, shift: shift || 'Monday'});
    }

    render(){
        return(
            // ...props ile burdaki tüm parametreleri EmployeeForm tarafına paslıyoruz.
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.AppStateEmployeeCreate.name, 
        phone: state.AppStateEmployeeCreate.phone,
        shift: state.AppStateEmployeeCreate.shift
   };
}

export default connect(mapStateToProps, {EmployeeUpdateAction, EmployeeCreateAction})(EmployeeCreate);