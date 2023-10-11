import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
// import axios from '@/plugins/axios'
import axios from 'axios'

const app = createApp(App)

console.log(store);
app.use(store);
app.use(router).mount('#app')

// ---------------------------------- 
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$myGlobalFunction = function() {
    alert('전역 함수');
};
if (process.env.NODE_ENV == "development") {
    app.config.globalProperties.$host = "http://localhost:8081/guibundle/";
} else {
    app.config.globalProperties.$host = "https://bbbb";
}
// ----------------------------------
