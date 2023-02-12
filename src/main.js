import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from '../src/components/UI/BaseCard.vue';
import BaseButton from '../src/components/UI/BaseButton.vue';


const app=createApp(App)
app.component('base-card',BaseCard)
app.component('base-button',BaseButton)
app.mount('#app');