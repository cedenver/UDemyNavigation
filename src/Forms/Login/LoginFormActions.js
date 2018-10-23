// actions aslında bunlar fonksiyonlar
// çalışması bitince geriye bir action nesnesi döndürüyorlar
// bu nesne içinde ise type diye bir özellik var
// hangi nesneden döndüğüne buna göre karar veriyor
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

// ACTION TYPES
const prefix = 'LoginForm';
export const INPUT_TEXT_CHANGED = prefix + "InputTextChanged";
export const LOGIN_BUTTON_PRESSED = prefix + 'LoginButtonPressed';
export const LOGIN_SUCCESS = prefix + 'LoginSuccess';
export const LOGIN_FAIL = prefix + 'LoginFail';

// ACTIONS

export const InputTextChangedAction = ({prop,value}) => {
    return {
        type: INPUT_TEXT_CHANGED,
        payload: {prop, value}
    }
};

//console.warn("user" + user.password);
export const LoginUserAction = ({email,password}) => {
    // geriye obje değil function dönüyor, redux thunk bunu dispatch ile calistirir
    return (dispatch) => {

        // dispatch ile birden action içinde birden fazla kere reducer'ları tetikleyebiliyoruz
        // Böylece birden fazla kere state değişimi olabiliyor
        dispatch({type: LOGIN_BUTTON_PRESSED});

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
        type: LOGIN_FAIL,
        payload: ex.message
    });
}

const LoginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    });

    Actions.main();
}