<template>
    <v-container> 
  <h1 class="text-h8 text-center mb-3 mt-5">Profissionais</h1>
    </v-container>
</template>

<script>
export default {
  name: 'Prof',
  data() {
    return {
      Prof: []
    }
  },
  created() {
    fetch('https://it3-gdf-default-rtdb.firebaseio.com/saude/profissionais.json')
      .then(response => response.json())
      .then(json => {
        this.clubesLista = json;
      })
  }
}
</script>

