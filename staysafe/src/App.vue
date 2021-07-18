<template>
  <v-app>
   <Appbarra/>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>    
  
<script>
 import Appbarra from './components/shared/Appbarra'
  export default {
    name: 'app',
   components: {
    Appbarra
    }
  };
</script>

<style scoped>
</style>