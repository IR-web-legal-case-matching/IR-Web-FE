<template>
  <div class="common-layout">
    <el-container>
      <el-header style="display: flex; 
      height: 100px;
      align-items: center; 
      justify-content: center;
      background-color: var(--ep-color-primary-light-7);">
      Header<br>BaseHeader.vue</el-header>
      <el-container>
        <el-aside style="display: flex;
          width: 115px;
          height: 500px; 
          align-items: center; 
          justify-content: center;
          background-color: var(--ep-color-primary-light-8)"
        >
          Aside<br>BaseSide.vue
        </el-aside>
        <el-container>
          <el-main style="display: flex; 
            align-items: center; 
            justify-content: center;
            background-color: var(--ep-color-primary-light-9)"
          >
            Main<br>view/*.vue<br>displayed with RouterView
          </el-main>
          <el-footer style="display: flex; 
            align-items: center; 
            justify-content: center;
            height: 100px;
            background-color: var(--ep-color-primary-light-7);"
          >
            Footer<br>BaseFooter.vue
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
  
<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
.element-plus-logo {
  width: 50%;
}
</style>