import React, { useContext, useState } from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
const SingUp = () => {
    const [error , setError] = useState('');
    const {createUser} = useContext(AuthContext)
    const handelSingUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;

        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;
        console.log(email, password, confirmPassword)
         setError('')
        if(password !== confirmPassword ){
            setError('your password did not match');
            return
        }
        else if (password.length < 6){
            setError('password must be 6 characters or longer')
            return
        }
        createUser(email, password)
        .then(result => {
            const loggedUser =  result.user;
            console.log(loggedUser)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            setError (errorMessage);
            
          })

    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sing Up</h2>
        <form onSubmit={handelSingUp} >
            <div className="from-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required placeholder='Your Email' id="" />
            </div>
            <div className="from-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required placeholder='Your Password' id="" />
            </div>
            <div className="from-control">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" name="confirm_password" required placeholder='Confirm Your Password' id="" />
            </div>
            <input className='btn-submit' type="submit" value="Sing up" />
        </form>
        <p className='tols'><small>Already Have An account? <Link to='/login'>Login</Link></small></p>
        <p className='text-error'>{error}</p>
    </div>
    );
};

export default SingUp;