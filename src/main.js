import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$myGlobalFunction = function() {
    alert('전역 함수가 호출되었습니다!');
};

app.use(router)
.mount('#app')
