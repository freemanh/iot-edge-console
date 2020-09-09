const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:3000';

function getDevices() {
    return axios.get('/devices')
}

export { getDevices }