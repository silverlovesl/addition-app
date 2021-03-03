import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import uiBootstrap from './ui-bootstrap';
import storeBootstrap from './stores';

const app = createApp(App);

// UI ライブラリ初期化
uiBootstrap(app);
// Store 初期化
storeBootstrap(app);
// Routing初期化
app.use(router);
// ルート要素へマウントする
app.mount('#app');
