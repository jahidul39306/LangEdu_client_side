import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../provider/AuthProvider';

const server_url = import.meta.env.VITE_server_url;
const axiosInstance = axios.create({
    baseURL: server_url,
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { userLogOut } = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('api response error status', error.status);
            if (error.status === 401 || error.status === 403) {
                userLogOut()
                    .then(() => {
                        // redirect to the login page
                        navigate('/login')
                    })
                    .catch(err => console.log(err))
            }
            return Promise.reject(error);
        })
    }, []);

    return axiosInstance;
};

export default useAxiosSecure;