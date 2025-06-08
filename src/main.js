import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/bootstrap.min.css';
// import './assets/css/bootstrap';
import AOS from 'aos';
import './assets/css/aos.css';

const app = createApp(App);
app.mount('#app');

AOS.init({
  once: true,
  duration: 800,
});