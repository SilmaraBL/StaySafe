<template>
  <v-container>
    <h1 class="text-h8 text-center mb-3 mt-5">Profissionais</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nome</th>
            <th class="text-left">Especialidade</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="profissao of Prof" :key="profissao.id">
            <td>
              <v-avatar>
                <img :src="profissao.imagem" :alt="profissao.nome" />
              </v-avatar>
              {{ profissao.nome }}
            </td>
            <td>{{ profissao.servicos }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "Prof",
  data() {
    return {
      Prof: [],
    };
  },
  created() {
    fetch(
      "https://it3-gdf-default-rtdb.firebaseio.com/saude/profissionais.json"
    )
      .then((response) => response.json())
      .then((json) => {
        this.Prof = json;
        console.log(this.Prof);
      });
  },
};
</script>

