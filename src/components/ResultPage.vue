<template>
<div class="card-wrap">
  <el-card class="result-card">
    <template #header>
      <div class="card-header">
        <b>Result</b>
        <el-button 
        id="buttons"
        plain 
        circle 
        :class="{aniPressed: closeVar}"
        @click="closeCard">
          <el-icon><Close /></el-icon>
        </el-button>
      </div>
    </template>
    <el-text size="large" v-if="modelOutput !== 'Not found.'">
      {{ modelOutput }}
    </el-text>
    <el-empty v-else  description="Oops, it seems there are no matching cases found."/>
  </el-card>
</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import { 
    Close ,
} from '@element-plus/icons-vue'
import {
    modelStatus,
    modelOutput,
} from '~/composables'
const closeVar = ref(false)
const closeCard = () => {
    closeVar.value =! closeVar.value
    setTimeout(() => { closeVar.value =! closeVar.value }, 250)
    setTimeout(() => { modelStatus.value = 'waiting' }, 300)
}
</script>

<style scoped>
.result-card{
  width: 100vh;
  text-align: left;
}
.card-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-wrap{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: large;
}
</style>