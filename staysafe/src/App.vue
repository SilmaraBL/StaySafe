<template>
  <v-app>
   <Appbarra/>

    <v-main>
      <Stayhome/>
    </v-main>
  </v-app>
</template>    
  
<script>
import Stayhome from  './components/Stayhome.vue'
import Appbarra from './components/shared/Appbarra.vue'
  export default {
    name: 'app',
    components: {
    Stayhome,
    Appbarra
    }
  };
</script>
