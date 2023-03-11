<!-- eslint-disable no-undef -->
<script setup lang="ts">
// import useConfig from '@renderer/composables/useConfig'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { onMounted } from 'vue'

// 1.从pinia中获取数据
const { config } = useConfigStore()

onMounted(() => {
  // 2.设置传递给getUserMedia方法的参数
  const constraints = {
    audio: false, // 设置这个摄像头不捕获声音
    video: {
      deviceId: config.deviceId, // 使用的媒体设备id
      width: 1920,
      height: 1080
    }
  } as MediaStreamConstraints

  // 3.挂载后获获取video标签
  const video = document.querySelector('video')!

  // 4.调用getUserMedia使用用户的媒体设备
  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
    video.play()
  })
})
</script>

<template>
  <!-- 让它占满窗口 与弹性布局  -->
  <!-- :class判断是否展示圆角 -->
  <main
    class="w-screen h-screen flex overflow-hidden rounded-xl"
    :class="{ 'rounded-full': config.rounded }"
    :style="{
      border: !config.rounded
        ? `solid ${config.borderWidth}px ${config.borderColor}`
        : ''
    }"
  >
    <video
      class="object-cover h-full w-full"
      :class="{ 'rounded-full': config.rounded }"
      :style="{
        border: config.rounded
          ? `solid ${config.borderWidth}px ${config.borderColor}`
          : ''
      }"
      src=""
    ></video>
  </main>
</template>

<style lang="less" scoped></style>
