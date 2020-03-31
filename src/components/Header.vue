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
      <v-btn text>Finalizar Dia</v-btn>
      <v-menu bottom :close-on-click="closeOnClick" :offset-y="offset">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">Salvar & Carregar</v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Salvar Dados</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Carregar Dados</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
  }
};
</script>

<style>
</style>