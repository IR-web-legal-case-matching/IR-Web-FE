import { createApp } from "vue";
import App from "./App.vue";
import router from "~/router"

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import "~/styles/animation.scss";
import 'uno.css'

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/display.css'
import 'font-awesome/css/font-awesome.css'

const app = createApp(App);
// app.use(ElementPlus);
app.use(router);
app.mount("#app");

/*
import {
  Tools
} from '@element-plus/icons-vue'
*/
