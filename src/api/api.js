import axios from 'axios';

let base = 'http://localhost:8080';

export const addUser = params => { return axios.get(`${base}/shop/goodsListHasPage.do`, { params: params }); };