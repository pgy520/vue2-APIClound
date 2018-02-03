// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'iview/dist/styles/iview.css';
import { Button, Carousel,CarouselItem } from 'iview';
Vue.component('Button', Button);
Vue.component('Carousel', Carousel);
Vue.component('CarouselItem', CarouselItem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
