import {EMPLOYEE_UPDATE_TYPE} from '../Actions/types';

const INITIAL_STATE = {name:'', phone:'', shift: ''};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMPLOYEE_UPDATE_TYPE:
            // {"name":"ugur"} gibi burda prop name olmuş oldu, prop key runtime sırasında belirlenir 
            return {...state, [action.payload.prop]: action.payload.value};
        default:
            return state;
    }
}