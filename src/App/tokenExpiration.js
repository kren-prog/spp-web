import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom'; // Asume que estás utilizando react-router-dom
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

const RedirectOnTokenExpiration = () => {
    const authContext = React.useContext(AuthContext);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token && isTokenExpired(token)) {
            authContext.updateUser(null);
            localStorage.removeItem('token');
            // El token ha expirado, redirigir al usuario al login
            navigate('/login');
        } else {
            return <Outlet/>
        }
    }, [token, navigate]);

    // Puedes renderizar el resto del componente aquí
    return (
        <div>
            {/* Contenido del componente */}
            <h1>Token expiration</h1>
        </div>
    );
};

export default RedirectOnTokenExpiration;
