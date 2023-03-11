import { BrowserWindow, ipcMain } from 'electron'

export default (win: BrowserWindow) => {
  ipcMain.handle(
    'drag',
    (_event, opt: { x: number; y: number; width: number; height: number }) => {
      // 通过event也能获取窗口对象
      // 1.通过win对象获取当前位置
      const [x, y] = win.getPosition()

      // 2.在当前位置的基础上修改位置
      // win.setPosition()
      win.setBounds({
        x: x + opt.x,
        y: y + opt.y,
        width: opt.width,
        height: opt.height
      })
    }
  )
}
