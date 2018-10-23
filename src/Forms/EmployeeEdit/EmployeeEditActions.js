import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {INPUT_TEXT_CHANGED} from '../../Components/Custom/EmployeeFormActions';

// ACTION TYPES
const prefix = 'EmployeeEditForm';
export const SAVE_BUTTON_PRESSED = prefix + 'SaveButtonPressed';
export const DELETE_BUTTON_PRESSED = prefix + 'DeleteButtonPressed';

// ACTIONS
export const SaveButtonPressedAction = ({name,phone,shift,uid}) => {
    const {currentUser} = firebase.auth();

    const nameReset = {prop:'name',value:''};
    const phoneReset = {prop:'phone',value:''};
    const shiftReset = {prop:'shift',value:null};

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({name,phone,shift})
            .then(()=>{
                dispatch({type: INPUT_TEXT_CHANGED,payload:nameReset});
                dispatch({type: INPUT_TEXT_CHANGED,payload:phoneReset});
                dispatch({type: INPUT_TEXT_CHANGED,payload:shiftReset});
                Actions.pop();
            });
    }
}

export const EmployeeDeleteAction = ({uid})=> {
    const {currentUser} = firebase.auth();

    return () => {
        firebase.database()
            .ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() =>
                Actions.pop()
            )
    };
}