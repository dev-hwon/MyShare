import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8081/guibundle/', // 서버의 URL로 대체
});

export default instance;