// actions aslında bunlar fonksiyonlar
// çalışması bitince geriye bir action nesnesi döndürüyorlar
// bu nesne içinde ise type diye bir özellik var
// hangi nesneden döndüğüne buna göre karar veriyor
import firebase from 'firebase';
import {EMAIL_CHANGED_TYPE, PASSWORD_CHANGED_TYPE, LOGIN_SUCCESS_TYPE, LOGIN_FAIL_TYPE, LOGIN_BUTTON_PRESSED_TYPE} from './types';
import { Actions } from 'react-native-router-flux';

export const EmailChangedAction = (text) => {
    return {
        type: EMAIL_CHANGED_TYPE,
        payload: text
    };
}

export const PasswordChangedAction = (text) => {
    return {
        type: PASSWORD_CHANGED_TYPE,
        payload: text
    };
}

//console.warn("user" + user.password);
export const LoginUserAction = ({email,password}) => {
    // geriye obje değil function dönüyor, redux thunk bunu dispatch ile calistirir
    return (dispatch) => {

        // dispatch ile birden action içinde birden fazla kere reducer'ları tetikleyebiliyoruz
        // Böylece birden fazla kere state değişimi olabiliyor
        dispatch({type: LOGIN_BUTTON_PRESSED_TYPE});

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user => LoginUserSuccess(dispatch,user))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user=> LoginUserSuccess(dispatch,user))
                .catch((ex)=> LoginUserFailed(dispatch,ex));
        });
    };
}

const LoginUserFailed = (dispatch, ex) => {
    dispatch({
        type: LOGIN_FAIL_TYPE,
        payload: ex.message
    });
}

const LoginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS_TYPE,
        payload: user
    });

    Actions.main();
}