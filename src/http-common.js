import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `https://data.medicare.gov/resource/`,
  headers: {
    // Authorization: 'Bearer {token}'
  }
})

// import {HTTP} from './http-common';

// HTTP.get(`posts`)
