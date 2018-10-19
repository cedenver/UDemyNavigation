import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {EMPLOYEE_UPDATE_TYPE} from './types';

export const EmployeeUpdateAction = ({prop,value}) => {
    return {
        type: EMPLOYEE_UPDATE_TYPE,
        payload: {prop, value}
    }
};

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
                dispatch({type: EMPLOYEE_UPDATE_TYPE,payload:nameReset});
                dispatch({type: EMPLOYEE_UPDATE_TYPE,payload:phoneReset});
                dispatch({type: EMPLOYEE_UPDATE_TYPE,payload:shiftReset});
                Actions.pop();
            })
    }
};