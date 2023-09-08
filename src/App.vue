<template>
  <el-config-provider namespace="ep" class="main-container">
    <!--div style="display: flex; flex-flow: column;-->
    <BaseHeader />
    <el-container>
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
  flex-grow: 1;
  color: var(--ep-text-color-primary);
}
.el-footer-demo{
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>