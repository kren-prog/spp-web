import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// http://www.ingesoftware.net:8015  https://localhost:7197
const API_BASE_URL = 'http://www.ingesoftware.net:8015/api';

const callApi = async (url, method, data = null) => {
   
    const token = localStorage.getItem('token');


    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    try {
        const response = await axios({
            method: method,
            url: `${API_BASE_URL}/${url}`,
            data: data,
            headers: headers,
        });
       
        var status = response.data.status; //status enviado manualmente desde API, es un error conocido
        var msg = response.data.message;

        if (status === 200) {
            return response.data.data;
        }
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: "Oops!",
            text: msg,
            icon: "error"
          });
        console.log(response.message);
    } catch (error) {
        // Manejar errores de manera centralizada si es necesario
        console.error('Error en la solicitud:', error);
        throw error;
    }
};

// Función para obtener datos
export const fetchData = async (url) => {
    return await callApi(url, 'GET');
};

// Función para crear datos
export const createData = async (url, data) => {
    return await callApi(url, 'POST', data);
};

// Función para actualizar datos
export const updateData = async (url, data) => {
    return await callApi(url, 'PUT', data);
};

// Función para eliminar datos
export const deleteData = async (url) => {
    return await callApi(url, 'DELETE');
};

export const loginApi = async (url, username, password) => {

    const newUrl = `${API_BASE_URL}/${url}`;

    try {
        const response = await axios.post(newUrl, {
            username: username,
            password: password,
        });
        if(response.data.status !== 200){
            const MySwal = withReactContent(Swal);
            MySwal.fire({
                title: "Oops!",
                text: response.data.message,
                icon: "error"
              });
        }
        return response.data;
    } catch (error) {
        console.error('Error en el login:', error);
    }
}



