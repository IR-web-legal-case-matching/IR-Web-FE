<template>
<div class="footer">
  <el-divider />
  <!--p>© {{ footerMsg.date }} {{ footerMsg.name }}</p-->
  <p style="color: var(--ep-text-color-secondary)">
     {{ footerMsg.projName }} 
     <!-- | Powered by 
     <a :href="footerMsg.creditLink" target="_blank"
       style="color: var(--ep-text-color-secondary)"> 
       {{ footerMsg.creditName }} 
    </a>  -->
  </p>
  <p>
    <a :href="footerMsg.repoLink" target="_blank" title="Repositories"
       style="color: var(--ep-text-color-secondary)">
       <i class="fa fa-github"></i>
    </a>
    &nbsp;
    <a :href="footerMsg.serverLink" target="_blank" title="Server"
       style="color: var(--ep-text-color-secondary)">
       <i class="fa fa-server"></i>
    </a>    
    &nbsp;
    <a :href="footerMsg.creditLink" target="_blank" :title="footerMsg.creditName"
       style="color: var(--ep-text-color-secondary)">
       <i class="fa fa-bolt"></i>
    </a>
  </p>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  ElementPlus,
} from '@element-plus/icons-vue'

const date = new Date()
const footerMsg = ref({
  date: date.getUTCFullYear(),
  projName: 'Trustworthy Multi-Tasking Smart Legal System',
  repoLink: 'https://github.com/ce-amtic/vite-framework',
  serverLink: '',
  creditName: 'Element+',
  creditLink: 'https://element-plus.org/',
})
</script>

<style scoped>
.footer{
  padding-bottom: 50px;
}
</style>