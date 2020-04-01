export default {
    state: {
        stocks: [],
        funds: 10000
    },
    mutations: {
<<<<<<< HEAD
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
=======
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
>>>>>>> 93f30c551483451f143c2c3d1fe9b547fe5de6a9
            if ( record.quantity > quantity){
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1);
            }
<<<<<<< HEAD
            state.funds += price * quantity;
        },
        setPortfolio(state, portfolio){
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
=======
            state.funds += stockPrice * quantity;
>>>>>>> 93f30c551483451f143c2c3d1fe9b547fe5de6a9
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
<<<<<<< HEAD
                    id: stock.id,
=======
                    id: stock.stockId,
>>>>>>> 93f30c551483451f143c2c3d1fe9b547fe5de6a9
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