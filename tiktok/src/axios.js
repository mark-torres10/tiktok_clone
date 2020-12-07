import axios from 'axios'; 

const instance = axios.create({
    baseURL: "http://tiktok-clone-backend-0.herokuapp.com/",
}); 

export default instance; 