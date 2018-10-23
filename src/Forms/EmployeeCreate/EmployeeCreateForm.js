import React, {Component} from 'react';
import { connect } from 'react-redux';
import {EmployeeCreateAction } from './EmployeeCreateActions';
import {Card,CardSection,Button} from '../../Components/Common';
import EmployeeForm from '../../Components/Custom/EmployeeForm';

class EmployeeCreateForm extends Component{

    onButtonPress(){
        const {name, phone, shift} = this.props;
        // Eğer shift seçilmemiş ise yani null ise değeri default Monday
        this.props.EmployeeCreateAction({name, phone, shift: shift || 'Monday'});
    }

    render(){
        return(
            // ...props ile burdaki tüm parametreleri EmployeeForm tarafına paslıyoruz.
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}
// Employee Form üzerinde değişiklik olduğu anda burdaki props'larda güncellensin
const mapStateToProps = (state) => {
    return {
        name: state.AppStateEmployeeForm.name, 
        phone: state.AppStateEmployeeForm.phone,
        shift: state.AppStateEmployeeForm.shift
   };
}

export default connect(mapStateToProps, {EmployeeCreateAction})(EmployeeCreateForm);