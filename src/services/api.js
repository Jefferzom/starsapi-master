import axios from 'axios';

export const Swapi = axios.create({
  baseURL: 'https://swapi.dev/api/films/',
});
