<template>
    <TheHeaderVue title="Remeber Me"/>
    <TheResource/>
</template>
 
<script>
import TheHeaderVue from '../src/components/layout/TheHeader.vue';
import TheResource from './components/learning-resorse/TheResource.vue';
export default {
    components:{
    TheHeaderVue,
    TheResource
},
    data() {
        return {
           
        }
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
