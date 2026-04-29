import axios from "axios";


const API_KEY = '30800646-c6d90f2a5eec003f430555754';
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = query => {
  return axios
    .get(
      `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
    )
    .then(response => response.data);
};