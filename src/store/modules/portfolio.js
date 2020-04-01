export default {
    state: {
        stocks: [],
        funds: 10000
    },
    mutations: {
        buyStock(state, { id, quantity, price }){
            console.log(id, quantity, price)
            const record = state.stocks.find( e => e.id == id)
            if (record){
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: id,
                    quantity: quantity
                })
            }
            state.funds -= price *quantity
        },
        sellStock(state, { id, quantity, price}){
            const record = state.stocks.find( e => e.id == id)
            if ( record.quantity > quantity){
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1);
            }
            state.funds += price * quantity;
        }
    },
    actions: {
        sellStock({ commit }, order){
            commit('sellStock', order)
        }
    },
    getters: {
        stockPortfolio(state, getters){
            return state.stocks.map( stock => {
                const record = getters.stocks.find( e => stock.id == e.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds(state){
            return state.funds
        }
    }
}