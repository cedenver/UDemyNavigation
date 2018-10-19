import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {EmployeeUpdateAction} from '../../Actions';
import {CardSection,Input} from '../Common';

class EmployeeForm extends Component{
    
    onNameTyped(text){
        this.props.EmployeeUpdateAction({prop:'name', value: text});
    }

    onPhoneTyped(text){
        this.props.EmployeeUpdateAction({prop:'phone', value: text});
    }

    render(){
        return(
            <View>
                <CardSection>
                    <Input label="Name" placeholder="jane" value= {this.props.name} 
                        onChangeText={this.onNameTyped.bind(this)} />
                </CardSection>
                <CardSection>
                    <Input label="Phone" placeholder="555-555-5555" value={this.props.phone}
                        onChangeText={this.onPhoneTyped.bind(this)} />
                </CardSection>
                <CardSection>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker style={{flex:1}} selectedValue={this.props.shift} 
                        onValueChange={day=>this.props.EmployeeUpdateAction({prop:'shift', value: day})}>
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state) =>{
    return {
        name: state.AppStateEmployeeCreate.name, 
        phone: state.AppStateEmployeeCreate.phone,
        shift: state.AppStateEmployeeCreate.shift
   };
}

export default connect(mapStateToProps,{EmployeeUpdateAction})(EmployeeForm);