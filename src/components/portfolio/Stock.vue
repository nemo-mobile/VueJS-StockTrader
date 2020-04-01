<template>
    <v-col class="pr-3 pb-3" lg="4" md="6" xs="12">
        <v-card color="blue darken-3 white--text" :tile="true" >
            <v-card-title class="headline">
                <strong> {{ stock.name }} <small>(Preço: {{ stock.price | currency }} | Qtde: {{ stock.quantity}})</small></strong>
            </v-card-title>
        </v-card>
        <v-card :tile="true">
            <v-container fill-height width="600px">
                <v-text-field :error="insufficientQuantity || !Number.isInteger(quantity)" type="number" label="Quantidade" v-model.number="quantity"/>
                <v-btn :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)" @click="sellStock" class="ml-2" small tile color="blue darken-3 white--text">{{ insufficientQuantity ? 'Inválido' : 'Vender'}}</v-btn>
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
        insufficientQuantity(){
            return this.quantity > this.stock.quantity
        }
    },
    methods: {
        sellStock(){
            const order = {
                id: this.stock.id,
                price: this.stock.price,
                quantity: this.quantity
            }

            this.$store.dispatch('sellStock', order)
            this.quantity = 0

        }
    }
}
</script>

<style>

</style>