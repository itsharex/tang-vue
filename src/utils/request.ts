import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import qs from 'qs'
import { getToken, removeToken } from '@/utils/auth'

let reLoginFlag: boolean = true

/**
 * 创建 axios 实例
 */
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 1000 * 20,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 添加请求拦截器
service.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = token
  }
  if (config.method === 'get') {
    config.paramsSerializer = {
      serialize: (params: Record<string, any>): string => qs.stringify(params, { arrayFormat: 'repeat' })
    }
  }
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(async (response: AxiosResponse) => {
  const binaryTypes: string[] = [
    'application/octet-stream',
    'application/zip'
  ]
  if (binaryTypes.includes(response.headers['content-type']) || response.data instanceof ArrayBuffer) {
    return response
  }
  const { code, msg } = response.data
  if (code === 200) {
    return response.data
  }
  if (code === 401) {
    if (reLoginFlag) {
      reLoginFlag = false
      try {
        await ElMessageBox.confirm('登陆已失效，请重新登录', '提示', {
          type: 'warning'
        })
        removeToken()
        window.location.href = '/login?redirect=' + window.location.pathname + window.location.search
      } catch (error) {
        reLoginFlag = true
      }
    }
    return Promise.reject(msg)
  }
  ElMessage.error({
    dangerouslyUseHTMLString: true,
    message: msg
  })
  return Promise.reject(new Error(msg))
}, (error: any) => {
  ElMessage.error(error)
  return Promise.reject(error)
})

export default service
