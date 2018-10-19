import {EMAIL_CHANGED_TYPE,PASSWORD_CHANGED_TYPE, LOGIN_SUCCESS_TYPE, LOGIN_FAIL_TYPE, LOGIN_BUTTON_PRESSED_TYPE} from '../Actions/types';

const INITIAL_STATE = {email: 'test@test.com', password: '1q2w3e4r', user:null, error:'', loading:false};

export default (state=INITIAL_STATE,action) => {
    switch(action.type){
        case EMAIL_CHANGED_TYPE:
            return {...state, email: action.payload};
        case PASSWORD_CHANGED_TYPE:
            return {...state, password: action.payload};
        case LOGIN_SUCCESS_TYPE:
            return {...state, ...INITIAL_STATE, user: action.payload}; // Bir sonraki gelen eziyor her zaman
        case LOGIN_FAIL_TYPE:
            return {...state, error: action.payload, loading:false};
        case LOGIN_BUTTON_PRESSED_TYPE:
        return {...state, loading: true, error:''};
        default: 
            return state;
    }
}