import { createRouter, createWebHistory } from "vue-router";

import AddResource from '../components/learning-resorse/AddResource.vue'
import StoredResource from '../components/learning-resorse/StoredResource.vue'
import AboutUs from '../components/learning-resorse/AboutUs.vue'

const routes = [
    {
        path: '/Add',
        component: AddResource
    },
    {
        path: '/Stored',
        component: StoredResource
    },  
    {
        path: '/About',
        component: AboutUs
    },  
    
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;
