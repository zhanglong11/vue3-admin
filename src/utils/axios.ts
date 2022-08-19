import axios from 'axios'
const timeout = 30000
export const baseUrl = `/bf3d-basic`
export const system = create(baseUrl)

export const server = {
  system
}

export default axios

function create(baseURL) {
  const instance = axios.create({
    baseURL,
    timeout
  })
  addInterceptor(instance)
  return instance
}
function addInterceptor(service) {
  // request interceptor
  service.interceptors.request.use(
    config => {
      config.headers['x-access-token'] =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb3VpcyIsInVzZXJJZCI6IjlmOWIxYmY1ZDgwYjQ3YTQ5ODgzMmIyNWExNmQ5YTA0IiwiYXBwbGljYXRpb25UeXBlIjoidXNlciIsImV4cCI6MTY0Njk5MDYxOH0.GwO2hwQ1VnFxZ3WmzWoly3kPFtiQr644EZvshhKd_DA'
      // do something before request is sent
      return config
    },
    error => {
      // do something with request error
      return Promise.reject(error)
    }
  )

  // response interceptor
  service.interceptors.response.use(
    response => {
      if (
        response.config.responseType === 'blob' ||
        response.config.responseType === 'arraybuffer' ||
        response.config.type === 'noHold'
      ) {
        return response
      }
      if (response.config.url.indexOf('.json') > -1 && response.data instanceof Array) {
        return response.data
      }

      // if the custom code is not 20000, it is judged as an error.
      if (response.status === 200 && !response.data) {
        return errorHandler('status: 200 服务器没有返回任何响应')
      } else if (response.data.code === 1000) {
        const message = response.data.message || response.data.msg || 'Error'
        return Promise.reject(new Error(message))
      } else if (!response.data.success && response.data.code !== 200) {
        const message = response.data.message || response.data.msg || 'Error'
        return Promise.reject(new Error(message))
      } else {
        return response.data
      }
    },
    error => {
      if (error.message === 'abort') {
        return errorHandler('取消上传')
      }
      return errorHandler(
        'status: ' + _.get(error, 'response.status') + ' ' + error.message || _.get(error, 'response.data.message')
      )
    }
  )
}

/**
 * 弹出错误提示,生产环境只提示服务重启或者维护中，请稍后重试
 * @param message
 */
function errorHandler(message) {
  return Promise.reject(new Error(message))
}
