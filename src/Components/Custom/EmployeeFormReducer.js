import { INPUT_TEXT_CHANGED } from './EmployeeFormActions';

const INITIAL_STATE = {name:'', phone:'', shift: ''};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case INPUT_TEXT_CHANGED:
            // {"name":"ugur"} gibi burda prop name olmuş oldu, prop key runtime sırasında belirlenir 
            return {...state, [action.payload.prop]: action.payload.value};
        default:
            return state;
    }
}