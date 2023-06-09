import { BrowserWindow, ipcMain, IpcMainEvent } from 'electron'

// 定义获取win对象的方法
const getWin = (event: IpcMainEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}

// 主进程监听设置窗口尺寸事件
ipcMain.on(
  'setWindowSize',
  (
    event: IpcMainEvent,
    opt: { AspectRatio: number; width?: number; height?: number }
  ) => {
    //  1.获取win对象
    const win = getWin(event)

    // 2.改变win缩放比例
    win.setAspectRatio(opt.AspectRatio)

    // 3.设置win宽高
    win.setBounds({ width: opt.width, height: opt.height })

    // console.log(opt, 'opt')
  }
)
