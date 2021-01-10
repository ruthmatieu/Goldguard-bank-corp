import axios from 'axios';

//build a module that returns new instance of axios obj
//with the auth info already plugged in

const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        baseUrl: 'endpoint',
        headers: {//check jj video 1:37:00
            Authorization: token
        } 
    });
};

export default axiosWithAuth;