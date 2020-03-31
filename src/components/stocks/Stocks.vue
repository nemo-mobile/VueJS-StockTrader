<template>
    <v-row  wrap>
        <Stock v-for="stock in stocks" :key="stock.id"/>
    </v-row>
</template>

<script>
import Stock from './Stock'
export default {
    components: { Stock },
    data(){
        return {
            stocks: [
                { id: 1, name: 'BMW', price: 224},
                { id: 2, name: 'Facebook', price: 132},
                { id: 3, name: 'Google', price: 184},
                { id: 4, name: 'Apple', price: 279},
            ]
        }
    }

}
</script>

<style>

</style>