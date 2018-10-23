import firebase from 'firebase';

// ACTION TYPES

const prefix = 'EmployeeList';
export const LIST_REQUESTED = prefix + 'ListRequested';

// ACTIONS 

export const EmployeeListRequestedAction = () => {

    const {currentUser} = firebase.auth();

    return (dispatch) => {
        // ne zaman yeni employee kaydedilse EMPLOYEES_FETCH_SUCCESS type tetiklenecek. 
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({type: LIST_REQUESTED, payload: snapshot.val()});
            });
    };
};