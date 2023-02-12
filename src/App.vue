<template>
    <TheHeaderVue title="RemeberMe"/>
   <StoredResource :resources="storedResources"/>

</template>
 
<script>
import TheHeaderVue from '../src/components/layout/TheHeader.vue';
import StoredResource from './components/learning-resorse/StoredResource.vue';
export default {
    components:{
        StoredResource,
        TheHeaderVue
    },
    data() {
        return {
            storedResources: [
                {
                    id: 'google',
                    name: 'Googel',
                    descreption: 'blablabla',
                    link: 'https://google.com'
                },
                {
                    id: 'elzero',
                    name: 'Elzero',
                    descreption: 'bla bla ',
                    link: 'https://elzero.org'
                }
            ]
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
