import axios from 'axios'
import { apiUrl } from './config'

const requester = async (method, endpoint, data = null) => {
  const config = {
    method,
    baseURL: apiUrl,
    url: endpoint,
    data
  }
  return axios
    .request(config)
    .then(response => [null, response.data])
    .catch(error => [error])
}

export default requester
