import type { App } from 'vue'
import { createPinia } from 'pinia'
import type { Pinia } from 'pinia'
import { useSettingStore } from './modules/setting'

const store: Pinia = createPinia()

/**
 * 全局挂载 store
 *
 * @param app 应用
 */
export const setupStore = (app: App<Element>): void => {
  app.use(store)
  useSettingStore().flashTheme()
}

export { store }
