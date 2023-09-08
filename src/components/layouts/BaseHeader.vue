<template>
  <!--l-screen-->
  <el-menu 
    class="hidden-sm-and-down" 
    mode="horizontal"
    :ellipsis="false"
  >
    <a class="logo-box" href="">
      <img alt="logo" class="logo" src="../../assets/logo.png" width="10%"/>
    </a>
    <div class="title"> <p>{{ appTitle }}</p> </div>
    <div class="flex-grow">
      <el-sub-menu index="1">
        <template #title><el-icon><Tools /></el-icon></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-sub-menu>
    </div>
  </el-menu> 
  <!--sm-screen-->
  <el-menu class="hidden-sm-and-up" mode="horizontal">
    <a class="logo-box-sm" href="/">
      <img alt="logo" class="logo" src="../../assets/logo-s.png" width="10%"/>
    </a>
    <p>{{ appTitleShorten }}</p>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Tools
} from '@element-plus/icons-vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const appTitle = "Vite Framework Based on Element+"
const appTitleShorten = "Vite Framework"
</script>

<style scoped>
.hidden-sm-and-down {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: left;
  box-shadow: var(--ep-text-color-disabled) 0px -2px 10px;
  z-index: 10;  
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.hidden-sm-and-up {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: var(--ep-text-color-disabled) 0px -2px 10px;
  z-index: 10;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.title {
  padding-left: 20px;
  line-height: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.logo-box {
  height: 100%;
  width: auto;
  padding-left: 20px;
}
.logo-box-sm {
  height: 100%;
  padding: 0;
}
.logo {
  height: 100%;
  width: auto;
}
.flex-grow {
  padding: 20px;
  display: flex;
  justify-content: right;
  flex-grow: 1;  
}
.settings:hover {
  animation: rotate120 .5s ease-out;
}
@keyframes rotate120 {
  100% {
    transform: rotate(120deg);
  }
}
</style>