import axios from 'axios'
export const baseUrl = `/bf3d-basic`
import { getToken } from '@/utils/auth'
const timeout = 30000

const create = (baseURL: any) => {
  const instance = axios.create({
    baseURL,
    timeout
  })
  addInterceptor(instance)
  return instance
}

const addInterceptor = (service: any) => {
  service.interceptors.request.use(
    (config: any) => {
      config.headers['x-access-token'] = getToken()
      // config.headers['x-access-token'] =
      //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb3VpcyIsInVzZXJJZCI6IjlmOWIxYmY1ZDgwYjQ3YTQ5ODgzMmIyNWExNmQ5YTA0IiwiYXBwbGljYXRpb25UeXBlIjoidXNlciIsImV4cCI6MTY0Njk5MDYxOH0.GwO2hwQ1VnFxZ3WmzWoly3kPFtiQr644EZvshhKd_DA'
      // do something before request is sent
      return config
    },
    (error: any) => {
      return Promise.reject(error)
    }
  )
}

export const system = create(baseUrl)

export default axios
