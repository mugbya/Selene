// src/api/client.ts
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:5555',  // Python 后端地址
})

export default client