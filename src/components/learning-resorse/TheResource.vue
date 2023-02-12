<template>
  <base-card>
    <router-link to="/Stored">
      <base-button>Stored Resources </base-button></router-link
    >
    <router-link to="/Add"><base-button>Add Resources</base-button></router-link>
  </base-card>
  
  <router-view />
</template>

<script>

export default {
 
  data() {
    return {
      selectedTab: 'stored-resource',
      storedResources: [
        {
          id: 'google',
          name: 'Googel',
          descreption: 'blablabla',
          link: 'https://google.com',
        },
        {
          id: 'elzero',
          name: 'Elzero',
          descreption: 'bla bla ',
          link: 'https://elzero.org',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style scoped>

</style>
