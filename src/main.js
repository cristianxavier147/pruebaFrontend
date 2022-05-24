import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import PortalVue from "portal-vue";
import router from "./router";
import store from "./store";

/*
 * Vue, Router y Vuex lo instalo con VueCLI
 * se instaló bootstrap-vue y bootstrap mediante npm directo para poder instalar IconsPlugin
 */

Vue.use(PortalVue);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
