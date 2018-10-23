import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {INPUT_TEXT_CHANGED} from '../../Components/Custom/EmployeeFormActions';

export const EmployeeCreateAction = ({name,phone,shift}) => {
    const {currentUser} = firebase.auth();

    const nameReset = {prop:'name',value:''};
    const phoneReset = {prop:'phone',value:''};
    const shiftReset = {prop:'shift',value:null};
    // her zaman type/payload döndürmemiz gerekmiyor, hiçbirşey döndürmeyebiliriz de
    return(dispatch) => {
        // ` karakteri kullanımına dikkat
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name,phone,shift})
            .then(()=> {
                dispatch({type: INPUT_TEXT_CHANGED,payload:nameReset});
                dispatch({type: INPUT_TEXT_CHANGED,payload:phoneReset});
                dispatch({type: INPUT_TEXT_CHANGED,payload:shiftReset});
                Actions.pop();
            })
    }
};