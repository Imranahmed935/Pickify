import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <span className="loading loading-spinner text-success relative top-52 ml-[650px] "></span>
    }
    if(user){
        return children;
    }
     return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;