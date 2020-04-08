import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;


Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = () => {
  setTimeout(() => {
    window.scrollTo(0, 100);
  }, 3000);
};
if (document.documentElement.clientWidth > 500) {
  window.alert('请使用手机打开，以确保浏览效果');
  const img = document.createElement('img');
  img.src = require('./assets/qrcode.png');
  img.style.position = 'fixed';
  img.style.left = '50%';
  img.style.top = '50%';
  img.style.transform = 'translate(-50%,-50%)';
  img.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
  document.body.appendChild(img);
}