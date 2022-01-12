import axios from 'axios';

import React from 'react';

let api = axios.create({
    baseURL: 'http://localhost:3001'
});

export default api;
