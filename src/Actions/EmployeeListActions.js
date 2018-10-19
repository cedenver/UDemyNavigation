import firebase from 'firebase';
import {EMPLOYEES_FETCH_TYPE} from './types';

export const EmployeesFetchAction = () => {

    const {currentUser} = firebase.auth();

    return (dispatch) => {
        // ne zaman yeni employee kaydedilse EMPLOYEES_FETCH_SUCCESS type tetiklenecek. 
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({type: EMPLOYEES_FETCH_TYPE, payload: snapshot.val()});
            });
    };
};