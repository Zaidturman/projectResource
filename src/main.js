import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from '../src/components/UI/BaseCard.vue';
import BaseButton from '../src/components/UI/BaseButton.vue';
import router from "./router";


const app=createApp(App)
app.use(router)
app.component('base-card',BaseCard)
app.component('base-button',BaseButton)
app.mount('#app');