import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.myanimelist.net/v2/anime/',
  headers: {
    "X-MAL-CLIENT-ID": "09ca53e8e4f9cd4d40d8fafafb7285fb" // MAL API KEY
  }
});

export default instance;
