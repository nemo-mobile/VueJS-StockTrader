export default {
    state: {
        stocks: [],
        funds: 10000
    },
    mutations: {
        buyStock(state, { stockId, quantity, stockPrice }){
            const record = state.stocks.find( e => e.id == stockId)
            if (record){
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice *quantity
        },
        sellStock(state, { stockId, quantity, stockPrice}){
            const record = state.stocks.find( e => e.id == stockId)
            if ( record.quantity > quantity){
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1);
            }
            state.funds += stockPrice * quantity;
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
                    id: stock.stockId,
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