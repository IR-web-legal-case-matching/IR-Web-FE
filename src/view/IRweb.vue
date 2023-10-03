<template>
  <main class="centered-main" v-loading="modelStatus === 'loading'"> 
    <div v-if="modelStatus !== 'finished'">
      <h1 class="title">Trustworthy Legal Case Matching</h1>
      <FileUpload />
    </div>
    <div v-else class="centered-main">
      <ResultPage />
    </div>
  </main>
</template>

<script lang="ts" setup>
import {
    modelStatus,
} from '~/composables'
</script>

<style scoped>
.centered-main{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: large;
}
.title{
    font-size: xx-large;
    padding-bottom: 5px;
}
@media screen and (max-width: 768px) {
    .title{
        font-size: larger;
    }
}
</style>