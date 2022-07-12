import axios from 'axios'
 //axios.defaults.baseURL = 'https://api.garba.info/api/';
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.baseURL = 'https://api.restroworld.com/api/';
// axios.defaults.baseURL = 'http://192.168.29.90:8000/api/';



axios.defaults.headers.common['Authorization'] = " Bearer " + localStorage.getItem('token')

