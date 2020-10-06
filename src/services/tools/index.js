import axios from 'axios';
export const Content_Type = "application/json";
export const ACCEPT = 'application/json';
export const BASE_URL = 'https://jsonplaceholder.typicode.com';

const config = {
    baseURL:BASE_URL,
    timeout:30000
}
export const authInstance = axios.create(config);
authInstance.interceptors.request.use(
    config => {
        config.headers.common['ACCEPT'] = ACCEPT;
        config.headers.common['Content_Type'] = Content_Type;
        return config
    },
    error => {
        console.log('error', error);
    }
)

export const globalInstance = axios.create(config);
globalInstance.interceptors.request.use(
    config => {
        config.headers.common['ACCEPT'] = ACCEPT;
        config.headers.common['Content_Type'] = Content_Type;
        config.headers.common['Authorization'] = 'token';
        console.log('conf', config);

        return config
    },
    error => {
        console.log('error', error);
    }
)

export default {
    authInstance,
    globalInstance
}