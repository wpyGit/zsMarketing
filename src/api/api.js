import axios from 'axios';

let base = 'http://localhost:8080/shop';

export const addColumn = params => { return axios.post(`${base}/addColumn.do`, { params: params }); };