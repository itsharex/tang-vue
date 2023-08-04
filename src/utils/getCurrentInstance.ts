import { ComponentInternalInstance, ComponentPublicInstance, getCurrentInstance } from 'vue'

// 获取当前组件实例
export const getInstance = (): ComponentInternalInstance => {
  const instance = getCurrentInstance() as ComponentInternalInstance
  if (!instance) {
    throw new Error('instance is undefined')
  }
  return instance
}

// 获取当前组件实例的代理
export const getProxy = (): ComponentPublicInstance => {
  const { proxy } = getInstance()
  if (!proxy) {
    throw new Error('proxy is undefined')
  }
  return proxy
}