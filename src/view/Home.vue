<template>
  <h1>Framework</h1>
  <p>
    <a href="https://cn.vitejs.dev/" target="_blank">Vite</a> | 
    <a href="https://cn.vuejs.org/guide/introduction.html" target="_blank">Vue.js</a> |
    <a href="https://element-plus.org/zh-CN/" target="_blank">Element Plus</a> | 
    <a href="https://typescript.bootcss.com/tutorials/typescript-in-5-minutes.html" target="_blank">TypeScript</a>
  </p>
  <div class="framework">
    <pre>src/
  assets/ -------------- images that need process
  components/ ---------- reusable components
    layouts/
      BaseHeader.vue --- header
      BaseSide.vue ----- vertical navigate bar
      BaseFooter.vue --- footer
    *.vue -------------- components
  composables/ --------- global declare
    *.ts
  router/
    index.ts ----------- using RouterView
  styles/ -------------- scss files
    element/
      dark.scss
      index.scss
    *.scss
  view/
    *.vue -------------- pages
  App.vue -------------- main window
  main.ts -------------- app behavior

/
  vite.config.ts -------- vite config
  tsconfig.json --------- vite config
  package.json ---------- package config</pre>
  </div>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.framework {
  font: consolas;
  font-size: 18px;
  text-align: left;
  margin: auto;
  width: 500px;
  top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
</style>