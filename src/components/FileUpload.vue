<template>
<el-row class="row-item">
  <el-col :xs="1" :sm="2" :md="6"/>
  <el-col :xs="22" :sm="20" :md="12">
    <el-input
    v-model="inputForm"
    type="textarea"
    :autosize="{ minRows: 4, maxRows: 12 }"
    placeholder="Paste your document here"
    :style="{ 'font-size': 'medium' }"
    >
    </el-input>
  </el-col>
  <el-col :xs="1" :sm="2" :md="6"/>
</el-row>

<el-row class="row-item">
  <el-button 
  id="buttons"
  :class="{aniPressedFade: sboxAnime}"
  round
  @click="submitData">
    <p>Search</p>
  </el-button>

  <el-button 
  id="buttons"
  :class="{aniShake: clearInputVar}"
  type="primary" 
  plain 
  circle 
  @click="clearInput">
    <el-icon><Delete /></el-icon>
  </el-button>
</el-row>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { 
    Search, 
    Delete ,
} from '@element-plus/icons-vue'
import { 
    sboxAnime,
    toggleSearch as toggleSearchAnime,
} from '~/composables'

const inputForm = ref('')
const result = ref('')
const clearInputVar = ref(false)

const submitData = () => {
    toggleSearchAnime()
    if(inputForm.value == ''){
        ElMessage.warning("你总得写点什么")
        return
    }
    axios.post('/api/process_text', {'input_text': inputForm.value})
    .then(res => {
        result.value = res.data['processed_text']
        ElMessage(result.value)
        console.log(result.value)
    })
    .catch(res =>{
        ElMessage.error(res)
    })
    // if(inputForm.value != '') ElMessage(inputForm.value)
}
const clearInput = () => {
    clearInputVar.value =! clearInputVar.value
    setTimeout(() => { clearInputVar.value =! clearInputVar.value }, 800);  
    inputForm.value = ''
}
</script>

<style scoped>
.row-item{
    padding-top: 15px;
    padding-bottom: 15px;
    justify-content: center;
    align-items: center;
}
.centered-area{
    height: 100%;
    justify-content: center;
    align-items: center;
}
#buttons{
    font-size: small;
    font-family: 'Noto Serif SC',  'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
<!--
justify-content: horizonal
align-items: vertical
-->