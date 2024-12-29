import axiosClient from 'axios';
import Cookies from 'js-cookie';

const axios = axiosClient.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const interceptorHandle = () => {
    axios.interceptors.response.use(
        (response) => response,
        async (error) => {
            if (error.response && error.response.status === 401) {
                Cookies.remove('username');
                Cookies.remove('token');
                window.location.href = '/login';
            }

            return Promise.reject(error);
        },
    );
};

export default axios;
