import Vue from 'vue'
import App from './App.vue'
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import store from './store/index';

store.dispatch('loadPost');
new Vue({
  el: '#app',
  render: h => h(App),
  store
})
