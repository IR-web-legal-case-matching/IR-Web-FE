<template>
  <h1>Examples</h1>
  <p>
    See
    <a href="https://element-plus.org" target="_blank">element-plus</a> for
    more information.
  </p>

  <!-- example components -->
  <div class="my-2 text-center flex flex-wrap justify-center items-center">
    <SearchBox />
  </div>
  <el-collapse-transition>
  <div v-if="sboxShowDebug" class="mb-4">
    <p>Select: {{ selectID }} | Forms: {{ inputForm }}</p>
  </div>
  </el-collapse-transition>

  <div class="mb-4" style="padding-top: 20px">
    <el-button size="large" @click="toast">El Message</el-button>
  </div>
  
  <div class="my-2 text-center flex flex-wrap justify-center items-center">
    <el-button @click="count++">count is: {{ count }}</el-button>
    <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
    <el-button type="success" @click="count++">count is: {{ count }}</el-button>
    <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
    <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
    <el-button type="info" @click="count++">count is: {{ count }}</el-button>
  </div>


  <div>
    <el-tag type="success" class="m-1">Tag 1</el-tag>
    <el-tag type="warning" class="m-1">Tag 1</el-tag>
    <el-tag type="danger" class="m-1">Tag 1</el-tag>
    <el-tag type="info" class="m-1">Tag 1</el-tag>
  </div>

  <div class="my-2">
    <el-input class="m-2" v-model="input" style="width: 200px;" />
    <el-date-picker class="m-2" v-model="curDate" type="date" placeholder="Pick a day"></el-date-picker>
  </div>

  <br>
  <p>For example, we can custom primary color to 'green'.</p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test components.
  </p>
  <p>
    Edit
    <code>styles/element/var.scss</code> to test scss variables.
  </p>

  <p>
    Full Example:
    <a
      href="https://github.com/element-plus/element-plus-vite-starter"
      target="_blank"
    >element-plus-vite-starter</a>
    | On demand Example:
    <a
      href="https://github.com/element-plus/unplugin-element-plus"
      target="_blank"
    >unplugin-element-plus/examples/vite</a>
  </p> 
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMessage } from 'element-plus'
import {
  Check, Close,
  Switch, Finished,
  VideoPause, VideoPlay,
  ArrowLeft, ArrowRight,
} from '@element-plus/icons-vue'
import { 
  isFold, 
  sboxShowDebug, selectID, inputForm
} from "~/composables";

defineProps<{ msg: string }>();

const count = ref(0);
const input = ref("element-plus");

const curDate = ref('')

const toast = () => {
  ElMessage.success('Hello')
}
const var1 = ref(false), var2 = ref(false), var3 = ref(false), var4 = ref(false)

const toggleSlide = () => {
  var4.value =! var4.value;
  isFold.value =! isFold.value;
}
</script>

<style scoped>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
</style>