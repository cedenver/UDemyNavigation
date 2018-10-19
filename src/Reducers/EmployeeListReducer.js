import {EMPLOYEES_FETCH_TYPE} from '../Actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMPLOYEES_FETCH_TYPE:
            return action.payload;
        default:
            return state;
    }
}