import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
import {EmailChangedAction,PasswordChangedAction,LoginUserAction} from '../Actions';
import {Card, CardSection, Input, Button, Spinner} from './Common';

class LoginForm extends Component{

    onEmailTyped(text){
        this.props.EmailChangedAction(text);
    }

    onPasswordTyped(text){
        this.props.PasswordChangedAction(text);
    }

    onLoginPressed(){
        const {email,password} = this.props;
        this.props.LoginUserAction({email,password});
    }

    renderError()
    {
        if(this.props.error){
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton()
    {
        if(this.props.loading){
            return(
                <Spinner size="large"/>
            );
        }

        return(
            <Button onPress={this.onLoginPressed.bind(this)}>Login</Button>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input label="Email" placeholder="email@domain.com"
                        onChangeText={this.onEmailTyped.bind(this)} value={this.props.email}/>
                </CardSection>
                <CardSection>
                    <Input secureTextEntry label="Password" placeholder="Password"
                        onChangeText={this.onPasswordTyped.bind(this)} value={this.props.password}/>
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    return {
         email: state.AppStateLoginForm.email, 
         password: state.AppStateLoginForm.password,
         error: state.AppStateLoginForm.error,
         loading: state.AppStateLoginForm.loading
    };
}

export default connect(mapStateToProps, 
        {EmailChangedAction,PasswordChangedAction,LoginUserAction}
    )(LoginForm);