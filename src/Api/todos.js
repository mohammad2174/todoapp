import axios from "axios";


const instanse = axios.create({
    baseURL : 'https://react-cousre-169dd-default-rtdb.firebaseio.com',
    timeout : 5000
});

axios.interceptors.request.use(function (config) {
    return config;
}, function (err) {
    return Promise.reject(err)
})

axios.interceptors.response.use(function (response) {
    return response;
}, function (err) {
    return Promise.reject(err)
})


export default instanse;