import axios from 'axios'

// axios.defaults.baseURL = 'https://api.restroworld.com/api/';
axios.defaults.baseURL = 'https://api.restroworld.com/api/';


axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token')

