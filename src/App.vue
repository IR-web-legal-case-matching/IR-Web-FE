<template>
  <el-config-provider namespace="ep" class="main-container">
    <!--div style="display: flex; flex-flow: column;-->
    <BaseHeader />
    <el-container class="view-container">
      <BaseSide />
      <el-container style="z-index: 8;">
        <el-main> <RouterView></RouterView> </el-main>
        <el-footer class="el-footer-demo" 
          style="height: auto; align-items: center;"
        > <BaseFooter /> </el-footer>
      </el-container>
    </el-container>
    <ShowMenu />
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  display: flex;
  flex-direction: column;
  color: var(--ep-text-color-primary);
  height: 100%;
}
.el-footer-demo{
  font-family: 'Noto Serif SC',  'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.view-container{
  flex: 1;
}
</style>