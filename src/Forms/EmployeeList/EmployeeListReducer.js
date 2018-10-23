import {LIST_REQUESTED} from './EmployeeListActions';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LIST_REQUESTED:
            return action.payload;
        default:
            return state;
    }
}