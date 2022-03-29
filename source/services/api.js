import axios from 'axios';
import md5 from 'blueimp-md5';

import characters from './api/characters';

const publicKey = 'e60a8d747d7fb524126432dd77b739fe';
const privateKey = 'd0ee8406152b54956c7ac14742e2d7440dd27a84';
const baseURL = 'https://gateway.marvel.com/v1/public';

const api = axios.create({ baseURL });

const getParams = () => {
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);

  return {
    apikey: publicKey,
    ts,
    hash,
  };
};

export default {
  characters: characters(api, getParams()),
};
