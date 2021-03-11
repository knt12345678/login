import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from "bootstrap-vue";
import firebase from "firebase";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Make BootstrapVue available throughout your project
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

var firebaseConfig = {
  apiKey: "AIzaSyCvzrJ3nTZCK0CzkW00JEkJjGkNQ9CRzmw",
  authDomain: "login-fefa4.firebaseapp.com",
  projectId: "login-fefa4",
  storageBucket: "login-fefa4.appspot.com",
  messagingSenderId: "598593556453",
  appId: "1:598593556453:web:2c50de20ef25dea8dfa90c",
  measurementId: "G-6VMR3KVD3S",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
