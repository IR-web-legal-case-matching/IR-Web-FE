<template>
  <main class="main-body">
    <h1 class="title">Trustworthy Legal Case Matching</h1>
    <FileUpload />
  </main>
</template>

<script lang="ts">
</script>

<style scoped>
.main-body{
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