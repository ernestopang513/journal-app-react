import {firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import Swal from 'sweetalert2'
import { types } from "../types/types"
import { removeError, setError, uiFinishLoading, uiStartLoading } from "./ui";
import { noteLogout } from "./notes";




export const startLoginEmailPassword = (email,password) => {
    return (dispatch) => {
        dispatch(uiStartLoading());
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then( ({user}) => {

                dispatch(
                    login(user.uid, user.displayName)
                )
                dispatch(uiFinishLoading())
            })
            .catch(({message}) => {

               dispatch(uiFinishLoading())
               Swal.fire('Error', message, 'error');
            } )


        // dispatch(login(123,'pedro'))
    }
}

export const startRegisterWithEmailPasswordName = (email,password, name)  => {

    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async({user}) => {

            await user.updateProfile({displayName: name});

            dispatch(
                login(user.uid, user.displayName)
            )
        })
        .catch( ({message}) => {
            
            Swal.fire('Error', message, 'error');

            
        })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup( googleAuthProvider)
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}


export const login = (uid,displayName) => ({
    
        type: types.login,
        payload: {
            uid,
            displayName
        }
    })

    export const startLogout = () => {

        return async(dispatch) => {
            await firebase.auth().signOut();
            dispatch(logout());
            dispatch(noteLogout());
        }
    }
export const logout = () => ({
    type: types.logout
})