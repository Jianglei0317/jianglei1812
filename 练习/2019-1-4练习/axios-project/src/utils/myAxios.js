import axios from 'axios'

const http = axios.create({
        baseURL:'/api',
        timeout:3000,
        headers:{
            token:localStorage.getItem('token')
        }

})

export default http