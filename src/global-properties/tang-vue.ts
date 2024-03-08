import type { App } from 'vue'
import { getDicts } from '@/utils/dict'
import { download } from '@/utils/download'
import { getFullPath } from '@/utils/path'
import webSocketService from '@/utils/websocket'
import contextMenu from '@/components/ContextMenu'
import { resetForm } from '@/utils/form'
import { notImplemented } from '@/utils/notImplemented'
import { copy } from '@/utils/clipboard'

export const setupTangVue = (app: App) => {
  app.config.globalProperties.$dict = getDicts
  app.config.globalProperties.$download = download
  app.config.globalProperties.$path = getFullPath
  app.config.globalProperties.$socket = webSocketService
  app.config.globalProperties.$contextMenu = contextMenu
  app.config.globalProperties.$resetForm = resetForm
  app.config.globalProperties.$notImplemented = notImplemented
  app.config.globalProperties.$copy = copy
}
