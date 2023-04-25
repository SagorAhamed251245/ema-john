import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const Header = () => {
    const {user , logout} = useContext(AuthContext)
 
    const handelLogout = ()=> {
        logout()
        .then(result =>{})
        .catch(error =>{
            console.log(error.message)

        })
        
    }
    
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to='/singup'>Sing up</Link>
                {user && <p className='text-color'><small>Welcome   {user.email} <button onClick={handelLogout}>SingOut</button></small></p>}
               
            </div>
        </nav>
    );
};

export default Header;