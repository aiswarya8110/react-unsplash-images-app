import axios from 'axios';

const imagesAxios = axios.create({
    baseURL: `https://api.unsplash.com/search/photos?client_id=${process.env.API_KEY}&query=`
});

export default imagesAxios;