import axios from 'axios';
import UIkit from 'uikit';

;
const base_url = 'https://reqres.in/api/';



export const getUser = (id) => {
    return axios.get(`${base_url}/users?page=${id}`);
};

