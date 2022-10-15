// webhook.site
// https://gamabackend-with-node.herokuapp.com/
import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});
