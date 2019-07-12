import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { MdButton, MdContent, MdTabs, MdDialog, MdField, MdSnackbar } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import './assets/scss/app.scss'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdSnackbar)
Vue.use(MdDialog)
Vue.use(MdField)



Vue.config.productionTip = false
Vue.prototype.$eventHub = new Vue();

// import * as firebase from "firebase";
//
// var config = {
//   apiKey: "AIzaSyDPzfSVz6A4QfmqZHbIcS6oG0ojRF3SSTM",
//   authDomain: "hackathon-4a2dc.firebaseapp.com",
//   databaseURL: "https://hackathon-4a2dc.firebaseio.com",
//   projectId: "hackathon-4a2dc",
//   storageBucket: "",
//   messagingSenderId: "985411807339",
//   appId: "1:985411807339:web:c515d036c3e49ab6"
// };
// // 4. Get Firebase Configuration
// firebase.initializeApp(config);
//
// const messaging = firebase.messaging();
//
//
// messaging.usePublicVapidKey("xxxxxxx");
// // 1. Generate a new key pair
//
// // Request Permission of Notifications
// messaging.requestPermission().then(() => {
//   console.log('Notification permission granted.');
//
//   // Get Token
//   messaging.getToken().then((token) => {
//     console.log(token)
//   })
// }).catch((err) => {
//   console.log('Unable to get permission to notify.', err);
// });


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
