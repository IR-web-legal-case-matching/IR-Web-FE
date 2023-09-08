<template>
  <h1>Animations</h1>
  <!-- example components -->
  <p>Use <code>&lt;transition name=''&gt;</code> to enable built-in transition animations.</p>
  <br>
<div class="my-2 text-center flex flex-wrap justify-center items-center">
  <el-row style="width:800px">
    <el-col :offset="2" :span="4">
      <el-button circle size="large" @click="var1=!var1">
        <transition name="aniFade">
          <el-icon v-if="!var1"><Hide /></el-icon>
        </transition>
      </el-button>
    </el-col>
    <el-col :span="4">
      <el-button circle size="large" @click="var1=!var1">
        <transition name="aniFadeSwitch">
          <el-icon v-if="!var1"><VideoPlay /></el-icon>
          <el-icon v-else><VideoPause /></el-icon>
        </transition>
      </el-button>
    </el-col>
    <el-col :span="4">
      <el-button circle size="large" @click="var2=!var2">
        <transition name="aniFadeRotate">
          <el-icon v-if="!var2"><Check /></el-icon>
          <el-icon v-else><Close /></el-icon>
        </transition>
      </el-button>
    </el-col>
    <el-col :span="4">
      <el-button circle size="large" @click="var3=!var3">
        <transition name="aniSwitch">
          <el-icon v-if="!var3"><Switch /></el-icon>
          <el-icon v-else><Finished /></el-icon>
        </transition>
      </el-button>
    </el-col>
    <el-col :span="4">
      <el-button circle size="large" @click="toggleSlide">
        <transition name="aniFadeRotate">
          <el-icon v-if="!var4"><ArrowLeft /></el-icon>
          <el-icon v-else><ArrowRight /></el-icon>
        </transition>
      </el-button>
    </el-col>
  </el-row>
</div>
<div class="my-2 text-center flex flex-wrap justify-center items-center">
  <el-row style="width: 800px; padding-top: 10px;color: var(--ep-text-color-secondary);font-size:14px;font-family: 'Courier New', Courier, monospace">
    <el-col :offset="2" :span="4">'aniFade'</el-col>
    <el-col :span="4">'aniFadeSwitch'</el-col>
    <el-col :span="4">'aniFadeRotate'</el-col>
    <el-col :span="4">'aniSwitch'</el-col>
    <el-col :span="4">'aniSlide'</el-col>
  </el-row>
</div>
<div class="my-2 text-center flex flex-wrap justify-center items-center">
  <el-row style="width: 800px; padding-top: 10px;color: var(--ep-text-color-secondary);font-size:14px;font-family: 'Courier New', Courier, monospace">
    <el-col :offset="2" :span="4">300ms</el-col>
    <el-col :span="4">300ms</el-col>
    <el-col :span="4">300ms</el-col>
    <el-col :span="4">250ms</el-col>
    <el-col :span="4">180ms</el-col>
  </el-row>
</div>

  <br>
  <p>Use <code>:class="{&lt;aniName&gt;: &lt;variable&gt;}"</code> attribute to enable class-based animations.</p>
  <br>
<div class="my-2 text-center flex flex-wrap justify-center items-center">
  <el-row style="width:600px">
    <el-col :span="6">
      <el-button :class="{aniShake: var5}" circle size="large" @click="fun5">
        <el-icon v-if="!var5"><Lock /></el-icon>
        <el-icon v-else><Unlock /></el-icon>
      </el-button>
    </el-col>
    <el-col :span="6">
      <el-button :class="{aniShakeIntense: var6}" circle size="large" @click="fun6">
        <el-icon><Delete /></el-icon>
      </el-button>
    </el-col>
    <el-col :span="6">
      <el-button :class="{aniPressed: var7}" circle size="large" @click="fun7">
        <el-icon><Edit /></el-icon>
      </el-button>
    </el-col>
    <el-col :span="6">
      <el-button :class="{aniPressedFade: var8}" circle size="large" @click="fun8">
        <el-icon><Search /></el-icon>
      </el-button>
    </el-col>
  </el-row>
</div>
<div class="my-2 text-center flex flex-wrap justify-center items-center">
  <el-row style="width: 600px; padding-top: 10px;color: var(--ep-text-color-secondary);font-size:14px;font-family: 'Courier New', Courier, monospace">
    <el-col :span="6">'aniShake'</el-col>
    <el-col :span="6">'aniShakeIntense'</el-col>
    <el-col :span="6">'aniPressed'</el-col>
    <el-col :span="6">'aniPressedFade'</el-col>
  </el-row>
</div>
<div class="my-2 text-center flex flex-wrap justify-center items-center">
  <el-row style="width: 600px; padding-top: 10px;color: var(--ep-text-color-secondary);font-size:14px;font-family: 'Courier New', Courier, monospace">
    <el-col :span="6">800ms</el-col>
    <el-col :span="6">820ms</el-col>
    <el-col :span="6">250ms</el-col>
    <el-col :span="6">280ms</el-col>
  </el-row>
</div>
  <br>
  <p>
    You need to define <code>&lt;variable&gt;</code> breforehand in typescript.
  </p>
  <p>
    Make sure <code>&lt;variable&gt;</code> is modified during the event, and its value is set to <code>true</code>.
  </p>
  <p>
    To set timeout, refer to the lasting time for each animation in the 2nd line.
  </p>

  <br>
  <p>
    Edit
    <code>styles/animation.scss</code> to custom animations.
  </p>
  <p>
    For futhur infomation, please refer to:
  </p>
  <p>
    <a href="https://cn.vuejs.org/guide/built-ins/transition.html" target="_blank">Vue.js Transitions</a> | 
    <a href="https://cn.vuejs.org/guide/extras/animation.html" target="_blank">Class-based Animations</a> |
    <a href="https://element-plus.org/zh-CN/guide/transitions.html" target="_blank">Element+ Built-in Transitions</a>
  </p>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMessage } from 'element-plus'
import {
  Check, Close,
  Switch, Finished,
  Hide, VideoPlay, VideoPause,
  ArrowLeft, ArrowRight,
  Search, Edit, Delete,
  Lock, Unlock,
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
const var1 = ref(false), var2 = ref(false), var3 = ref(false), var4 = ref(false), 
      var5=ref(false), var6 = ref(false), var7 = ref(false), var8 = ref(false);
const fun5 = () => {
  var5.value =! var5.value
  setTimeout(() => { var5.value =! var5.value }, 800);
}
const fun6 = () => {
  var6.value =! var6.value
  setTimeout(() => { var6.value =! var6.value }, 820);
}
const fun7 = () => {
  var7.value =! var7.value
  setTimeout(() => { var7.value =! var7.value }, 250);
}
const fun8 = () => {
  var8.value =! var8.value
  setTimeout(() => { var8.value =! var8.value }, 280);
}

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