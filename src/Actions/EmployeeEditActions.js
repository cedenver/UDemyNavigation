import firebase from 'firebase';

export const EmployeeSaveAction = ({name,phone,shift,uid}) => {
    const {currentUser} = firebase.auth();

    return() => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({name,phone,shift})
            .then(()=>console.warn('saved'))
    }
}