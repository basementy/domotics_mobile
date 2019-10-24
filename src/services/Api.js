import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-domotics.herokuapp.com'
})

export default api