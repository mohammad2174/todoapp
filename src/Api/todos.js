import axios from "axios";


const instanse = axios.create({
    baseURL : 'https://react-cousre-169dd-default-rtdb.firebaseio.com',
    timeout : 5000
});


export default instanse;