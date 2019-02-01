import axios from 'axios';

const base_url = 'https://reqres.in/api/';



export const getUser = (id) => {
    return axios.get(`${base_url}users?page=${id}`);
};

