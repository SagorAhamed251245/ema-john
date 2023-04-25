import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user, isLoading} = useContext(AuthContext);
    console.log(isLoading)
    if(isLoading){
        return <h1>Loading....</h1>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to='/login' state={{from: location}}  replace ></Navigate>
    );
};

export default PrivateRoutes;