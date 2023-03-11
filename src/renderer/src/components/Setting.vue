<script setup lang="ts">
// import useConfig from '@renderer/composables/useConfig'

import { useConfigStore } from '@renderer/stores/useConfigStore'

// 1.获取系统的所有音频设备
const devices = await navigator.mediaDevices.enumerateDevices()
// console.log(devices)

// 2.从音频设备中过滤出摄像头
const cameras = devices.filter((d) => d.kind.includes('video'))

// 3.从pinia中获取摄像头配置
const { config } = useConfigStore()
</script>

<template>
  <main class="bg-[#2c3e50] w-screen h-screen p-5 flex flex-col gap-5 py-10">
    <h2 class="text-gray-50 text-center text-sm mb-3 opacity-70">参数设置</h2>
    <el-select v-model="config.deviceId" placeholder="请选择摄像头">
      <el-option
        v-for="item in cameras"
        :key="item.deviceId"
        :label="item.label"
        :value="item.deviceId"
      ></el-option>
    </el-select>

    <el-input
      v-model="config.borderWidth"
      placeholder="边框宽度"
      size="large"
    ></el-input>
    <el-input
      v-model="config.borderColor"
      placeholder="边框颜色"
      size="large"
    ></el-input>

    <h2 class="text-center text-yellow-400">codersx</h2>
  </main>
</template>

<style lang="less" scoped></style>
