import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import {useDispatch} from 'react-redux'
import { setError } from '../../actions/ui'

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        name: 'Hernando',
        email: 'namdo@gmail.com',
        password: '123456',
        password2: '123456'
    })

    const {name,email,password, password2} =formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if( isFormValid()) {
            
        }
        
    }
    const isFormValid = () => {

        if(name.trim().length === 0){
            console.log('Name is required');
            dispatch(setError('Name is required'))
            return false;
        }else if(!validator.isEmail(email)){
            console.log('email is not valid');
            return false;
        }else if(password !==password2 || password.length < 5){
            console.log('pasword is required');
            return false;
        }

        return true;
    }


    return (
        <>

            <h3 className = 'auth__title'>Register</h3>

            <form onSubmit = {handleSubmit}>

                <div className = 'auth__alert-error'>
                    Hola mundo
                </div>
                <input
                    type = 'text'
                    placeholder = 'Name'
                    name = 'name'
                    className = 'auth__input'
                    autoComplete = 'off'
                    value = {name}
                    onChange = {handleInputChange}

                />
                <input
                    type = 'text'
                    placeholder = 'Email'
                    name = 'email'
                    className = 'auth__input'
                    autoComplete = 'off'
                    value = {email}
                    onChange = {handleInputChange}
                />
                
                <input
                    type = 'password'
                    placeholder = 'Password'
                    name = 'password'
                    className = 'auth__input'
                    value = {password}
                    onChange = {handleInputChange}
                />
                
                <input
                    type = 'password'
                    placeholder = 'Confirm Password'
                    name = 'password2'
                    className = 'auth__input'
                    value = {password2}
                    onChange = {handleInputChange}
                />

                <button
                    type = 'submit'
                    className = 'btn btn-primary btn-block mb-5'
                >
                    Register
                </button>

                <Link
                    className = 'link'
                    to = '/auth/login'
                >
                    Already registered ?
                </Link>
            </form>
        </>
    )
}
