
// ACTION TYPES
const prefix = 'EmployeeForm';
export const INPUT_TEXT_CHANGED =  prefix + "InputTextChanged";

// ACTIONS
export const InputTextChangedAction = ({prop,value}) => {
    return {
        type: INPUT_TEXT_CHANGED,
        payload: {prop, value}
    }
};