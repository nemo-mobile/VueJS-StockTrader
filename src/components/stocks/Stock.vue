<template>
    <v-col class="pr-3 pb-3" lg="4" md="6" xs="12">
        <v-card color="green darken-3 white--text" :tile="true" >
            <v-card-title class="headline">
                <strong>NOME <small>Price R$ 224</small></strong>
            </v-card-title>
        </v-card>
        <v-card :tile="true">
            <v-container fill-height width="600px">
                <v-text-field label="Quantidade"/>
                <v-btn class="ml-2" small tile color="green darken-3 white--text">Comprar</v-btn>
            </v-container>
        </v-card>
    </v-col>
</template>

<script>
export default {

}
</script>

<style>

</style>