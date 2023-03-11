import { ref } from 'vue'

// 定义config类型
type ConfigType = {
  deviceId: string
  page: 'camera' | 'setting'
}

// config默认值
const initConfig: ConfigType = {
  deviceId: '',
  page: 'camera'
}

// 将config通过函数暴露出去
export default () => {
  //  1.从localStorage获取配置
  const cache = localStorage.getItem('config')

  // 2.如果localStorage中没有 使用默认配置
  const data = cache ? (JSON.parse(cache) as ConfigType) : initConfig

  // 3.将config变为响应式数据
  const config = ref(data)

  // 4.定义更新localStorage的函数并暴露出去
  const updateConfig = () => {
    localStorage.setItem('config', JSON.stringify(config.value))
  }

  return { config, updateConfig }
}
