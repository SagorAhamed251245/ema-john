import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
const Login = () => {
  
    const [error , setError] = useState('')
    const [show, setShow] = useState(false);
    const [successfullyLogin , setSuccessfullyLogin ] = useState('')
    const {singInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location= useLocation();
    
    console.log(location)
    const from = location.state?.from?.pathname || './'



       const handelLogin = (event)=> {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        setSuccessfullyLogin('')

      

        singInUser(email , password)
        .then(result => {
            const loggedUser = result.user;
         
            setSuccessfullyLogin('Successfully Login')
            form.result;
            navigate(from , {replace: true})
            
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage)

        })

       }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handelLogin}>
                <div className="from-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required placeholder='Your Email'  />
                </div>
                <div className="from-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" required placeholder='Your Password'  />
                    <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span>Hide Password</span>: <span>Show Password</span>
                        }
                        </small></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='message'><small>New To Ema jhon? <Link to='/singup'>Sing up</Link></small></p>
            <p className='message'><small>{error}</small></p>
            <p className='message-success'><small>{successfullyLogin}</small></p>
        </div>
    );
};

export default Login;