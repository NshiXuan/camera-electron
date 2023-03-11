import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  // 右键退出
  quit: () => {
    // 向主进程发送退出事件
    ipcRenderer.send('quit')
  },

  // 点击exit退出
  exit: () => {
    // 向主进程发送退出事件
    ipcRenderer.send('exit')
  },

  // 拖拽
  drag: (opt: { x: number; y: number; width: number; height: number }) => {
    ipcRenderer.invoke('drag', opt)
  },

  // 设置窗口尺寸事件
  setWindowSize: (opt: {
    AspectRatio: number
    width?: number
    height?: number
  }) => {
    ipcRenderer.send('setWindowSize', opt)
  }
}

// 开启隔离
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // 不隔离
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
