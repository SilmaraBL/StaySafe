<template>
  <v-app>
<v-app-bar app color="purple darken-1" dark >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
     <v-toolbar-title>Fique Em Casa</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="purple darken-1"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Quem Somos</v-list-item-title>
          </v-list-item>
        
           <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Profissionais</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cadastre-se</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-box</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contato</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <Stayhome/>
    </v-main>
  </v-app>
</template>    
  
<script>
import Stayhome from  './components/Stayhome.vue'
  export default {
    name: 'app',
    data: () => ({
      drawer: false,
      group: null,
    }),
    components: {
    Stayhome
    }
  };
</script>
