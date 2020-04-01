<template>
    <v-col class="pr-3 pb-3" lg="4" md="6" xs="12">
        <v-card color="green darken-3 white--text" :tile="true" >
            <v-card-title class="headline">
                <strong> {{ stock.name }} <small>(Preço: {{ stock.price | currency }})</small></strong>
            </v-card-title>
        </v-card>
        <v-card :tile="true">
            <v-container fill-height width="600px">
                <v-text-field :error="insufficientFunds || !Number.isInteger(quantity)" type="number" label="Quantidade" v-model.number="quantity"/>
                <v-btn :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)" @click="buyStock" class="ml-2" small tile color="green darken-3 white--text">{{ insufficientFunds ? 'Insuficiente' : 'Comprar'}}</v-btn>
            </v-container>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props: ['stock'],
    data(){
        return {
            quantity: 0
            }
    },
    computed: {
        funds(){
            return this.$store.getters.funds
        },
        insufficientFunds(){
            return this.quantity * this.stock.price > this.funds
        }
    },
    methods: {
        buyStock(){
            const order = {
                id: this.stock.id,
                price: this.stock.price,
                quantity: this.quantity
            }

            this.$store.dispatch('buyStock', order)
            this.quantity = 0

        }
    }
}
</script>

<style>

</style>