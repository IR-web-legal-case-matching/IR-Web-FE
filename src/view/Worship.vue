<template>
  <h1>
    Worship
  </h1>
  <p>How to STO sls Orz elegantly ??</p>
  <el-row justify="center" style="padding: 30px">
    <img src="https://avatars.githubusercontent.com/u/60262785?v=4" 
         @click="hint"
         alt="sls" class="avatar"/>
  </el-row>
  <br>
  <el-collapse-transition>
    <div v-show="showMsg" class="transition-box">COME ON! PRESS IT!!</div>
  </el-collapse-transition>
  <div class="mb-4">
    <el-button size="large" type="warning"
      @click="count++">STO sls Orz</el-button>
  </div>
  <div class="mb-4">
    <el-button size="large" @click="toast">Test Your Faith</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { ref } from 'vue';

const count = ref(0)
const LIM = ref(Math.ceil(Math.random() * 114))
console.log(LIM.value)

const showMsg = ref(false)

const toast = () => {
  if (count.value <= LIM.value) {
    showMsg.value = true;
    ElMessage.error("Far from enough!");
  }
  else{
    showMsg.value = false;
    ElMessage.success("You are qualified!");
  }
}

const hint = () => {
  let mess:string = count.value + ' clicks out of ' + LIM.value;
  ElMessage.info(mess);
}
</script>

<style scoped>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
.avatar {
  height: 200px;
  width: 200px;
  border-radius: 10%;
  box-shadow: rgb(239, 249, 93) 0px 0px 60px;
}
.transition-box {
  padding-top: 10px;
  padding-bottom: 20px;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
  color: var(--ep-color-warning-dark-2)
}
</style>