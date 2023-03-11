<script setup lang="ts">
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import { Config, CameraFive, InnerShadowDown, Close } from '@icon-park/vue-next'
import { useConfigStore } from './stores/useConfigStore'
import useDrag from './composables/useDrag'

// 从pinia中获取数据
const { config } = useConfigStore()

// 拖拽窗口
const { drag } = useDrag()
drag.run()

// 右键退出
const quit = () => {
  window.api.quit()
}

// 点击退出icon
const exit = () => {
  window.api.exit()
}
</script>

<template>
  <Suspense>
    <main class="relative group" @contextmenu="quit">
      <section>
        <!-- 退出icon -->
        <Close
          v-if="config.page == 'camera'"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10 hidden group-hover:flex"
          theme="outline"
          size="16"
          @click="exit"
        />

        <!-- 摄像头页展示 -->
        <div
          v-if="config.page == 'camera'"
          class="absolute bottom-3 left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10 flex gap-5 hidden group-hover:flex"
        >
          <Config theme="outline" size="24" @click="config.page = 'setting'" />

          <!-- 圆角 -->
          <InnerShadowDown
            theme="outline"
            size="24"
            @click="config.rounded = !config.rounded"
          />
        </div>

        <!-- 配置页展示 -->
        <CameraFive
          v-if="config.page == 'setting'"
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10"
          @click="config.page = 'camera'"
        />
      </section>

      <section>
        <Camera v-if="config.page == 'camera'" />
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>

<style lang="less"></style>
