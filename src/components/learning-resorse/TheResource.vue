<template>
  <base-card>
    <router-link to="/Stored">
      <base-button>Stored Resources </base-button></router-link
    >
    <KeepAlive>
      <router-link to="/Add"
        ><base-button>Add Resources</base-button></router-link
      >
    </KeepAlive>

    <router-link to="/About"><base-button>About Us</base-button></router-link>
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
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, descreption, link) {
      const newResource = {
        id: new Date().toISOString(),
        name: title,
        descreption: descreption,
        link: link,
      };
      this.storedResources.unshift(newResource);
    },
    removeResource(resId){
      const resIndex = this.storedResources.findIndex(res => res.id === resId)
      this.storedResources.splice(resIndex,1)
      console.log(this.storedResources.length)

    }
  },
};
</script>

<style scoped></style>
