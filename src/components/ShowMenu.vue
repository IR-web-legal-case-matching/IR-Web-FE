<template>
  <div class="hidden-sm-and-up">
    <el-button
      :class="{aniPressed: buttonAnime, 'float-button': true}"
      type="primary"
      circle 
      size="large"
      @click="toggleFold"
    >
      <transition name="aniFadeSwitch">
        <el-icon v-if="isFold"><Menu /></el-icon>
        <el-icon v-else><FoldMenu /></el-icon>
      </transition>
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { isFold, toggleFold, buttonAnime } from "~/composables"
import {
  Menu,
  Fold as FoldMenu,
} from '@element-plus/icons-vue'
</script>
  
<style scoped>
.float-button {
  position: fixed;
  height: 50px;
  width: 50px;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  font-size: 18px;
  box-shadow: var(--ep-text-color-disabled) 0px 0px 10px; 
}
</style>