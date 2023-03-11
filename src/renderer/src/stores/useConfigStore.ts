import { defineStore } from 'pinia'
import { ref } from 'vue'

interface IConfig {
  deviceId: string
  page: 'camera' | 'setting'
  borderWidth: number
  borderColor: string
  rounded: boolean
}

export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref<IConfig>({
      deviceId: '', // 摄像头id
      page: 'camera', // 页面
      borderWidth: 5, // 边框大小
      borderColor: '', // 边框颜色
      rounded: false // 圆角
    })

    return { config }
  },
  {
    persist: true
  }
)
