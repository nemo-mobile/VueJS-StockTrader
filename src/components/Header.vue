<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn text v-for="(route, index) in routes" :to="route.path" :key="index"> {{route.title}} </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
<<<<<<< HEAD
      <v-btn @click="endDay" text>Finalizar Dia</v-btn>
=======
      <v-btn text>Finalizar Dia</v-btn>
>>>>>>> 93f30c551483451f143c2c3d1fe9b547fe5de6a9
      <v-menu bottom :close-on-click="closeOnClick" :offset-y="offset">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">Salvar & Carregar</v-btn>
        </template>
        <v-list>
          <v-list-item>
<<<<<<< HEAD
            <v-list-item-title @click="saveData">Salvar Dados</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="loadData">Carregar Dados</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span class="text-uppercase grey--text text--darken-2">Saldo: {{funds | currency}}</span>
      </v-layout>
=======
            <v-list-item-title>Salvar Dados</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Carregar Dados</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
>>>>>>> 93f30c551483451f143c2c3d1fe9b547fe5de6a9
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      closeOnClick: true,
      offset: true,
      routes: [
          { title: 'Home', path: '/'},
          { title: 'Stocks', path: '/stocks'},
          { title: 'Portfólio', path: '/portfolio'}
      ]
    };
<<<<<<< HEAD
  },
  computed: {
    funds(){
      return this.$store.getters.funds
    }
  },
  methods: {
    endDay(){
        this.$store.dispatch('randomizeStocks')
    },
    saveData(){
       const { funds, stockPortfolio, stocks } = this.$store.getters
       this.$http.put('data.json', { funds, stockPortfolio, stocks })
    },
    loadData(){
      this.$store.dispatch('loadData')
    }
=======
>>>>>>> 93f30c551483451f143c2c3d1fe9b547fe5de6a9
  }
};
</script>

<style>
</style>