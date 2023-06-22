import Axios from 'axios';

import { BASE_URL } from 'src/constant';

const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axios;
