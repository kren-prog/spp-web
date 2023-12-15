import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import { AuthContext } from 'Components/AuthContext';

const isTokenExpired = (token) => {
    try {
        const decodedToken = jwtDecode(token);
        const expirationDate = decodedToken.exp;
        const currentTimestamp = Math.floor(new Date().getTime() / 1000);

        return expirationDate < currentTimestamp;
    } catch (error) {
        console.error('Error al decodificar el token:', error);
        return true;  // Se considera expirado en caso de error
    }
};

const ProtectedRoute = ({
    redirectPath = '/login'
})=> {
    const authContext = React.useContext(AuthContext);
    const token = localStorage.getItem('token');
    if(token && isTokenExpired(token)){
        authContext.updateUser(null);
        localStorage.removeItem('token');
        return <Navigate to = {redirectPath} replace />
    } else if(!token){
        return <Navigate to = {redirectPath} replace />
    }
    return <Outlet/>
}

export default ProtectedRoute;