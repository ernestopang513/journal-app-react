import {firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types"
import { removeError, setError } from "./ui";




export const startLoginEmailPassword = (email,password) => {
    return (dispatch) => {

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then( ({user}) => {

                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(({message}) => {

                dispatch(setError(message))
                console.log(message)
                setTimeout(() => {
                    dispatch(removeError())
                }, 3000);
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
            console.log(message);
            // alert(message)
            // return message;
            dispatch(setError(message))
            setTimeout(() => {
                dispatch(removeError())
            }, 3000);
            
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
