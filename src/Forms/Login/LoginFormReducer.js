import {INPUT_TEXT_CHANGED, LOGIN_SUCCESS, 
    LOGIN_FAIL, LOGIN_BUTTON_PRESSED} from './LoginFormActions';

const INITIAL_STATE = {email: 'test@test.com', password: '1q2w3e4r', user:null, error:'', loading:false};

export default (state=INITIAL_STATE,action) => {
    switch(action.type){
        case INPUT_TEXT_CHANGED:
            return {...state, [action.payload.prop]: action.payload.value};
        case LOGIN_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload}; // Bir sonraki gelen eziyor her zaman
        case LOGIN_FAIL:
            return {...state, error: action.payload, loading:false};
        case LOGIN_BUTTON_PRESSED:
        return {...state, loading: true, error:''};
        default: 
            return state;
    }
}