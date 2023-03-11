class Drag {
  private pageX = 0 // 当前的x轴距离
  private pageY = 0 // 当前的y轴距离
  private innerWidth = 0 // 当前宽度
  private innerHeight = 0 // 当前高度
  private body?: HTMLBodyElement

  constructor() {}

  public run() {
    window.addEventListener('DOMContentLoaded', () => {
      // 1.获取body对象
      this.body = document.querySelector('body')!

      // 2.监听鼠标按下的事件 把this改成Drag的实例
      this.body.addEventListener('mousedown', this.mouseDown.bind(this))
    })
  }

  private mouseDown(e: MouseEvent) {
    // 3.获取开始的位置 并通过window对象或默认的宽度与高度
    this.pageX = e.pageX
    this.pageY = e.pageY
    this.innerWidth = window.innerWidth
    this.innerHeight = window.innerHeight

    // 把this改成Drag的实例
    const mouseMoveCallback = this.mouseMove.bind(this)

    // 4..点击后监听鼠标的移动事件
    this.body?.addEventListener('mousemove', mouseMoveCallback)

    // 7.监听鼠标弹起事件 删除鼠标移动事件
    this.body?.addEventListener('mouseup', () => {
      this.body?.removeEventListener('mousemove', mouseMoveCallback)
    })

    // 8.监听鼠标移出事件 删除鼠标移动事件
    this.body?.addEventListener('mouseout', () => {
      this.body?.removeEventListener('mousemove', mouseMoveCallback)
    })
  }

  private mouseMove(e: MouseEvent) {
    // 5.计算移动后的位置与原本位置的距离
    const x = e.pageX - this.pageX
    const y = e.pageY - this.pageY

    // 6.调用预加载脚本拖拽事件
    window.api.drag({ x, y, width: this.innerWidth, height: this.innerHeight })
  }
}

export default () => {
  const drag = new Drag()

  return { drag }
}
