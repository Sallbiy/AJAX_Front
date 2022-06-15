import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://run.mocky.io";

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
