import stocks from '@/data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks){
            state.stocks = stocks
<<<<<<< HEAD
        },
        randomizeStocks(state){
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * ( 1 + Math.random() - 0.43))
            });
        }
    },
    actions: {
        buyStock({ commit }, order){
            commit('buyStock', order)
        },
        initStocks({ commit }){
            commit('setStocks', stocks)
        },
        randomizeStocks({ commit }){
            commit('randomizeStocks')
=======
        }
    },
    actions: {
        buyStock({ commit }){
            commit()
        },
        initStocks({ commit }){
            commit('setStocks', stocks)
>>>>>>> 93f30c551483451f143c2c3d1fe9b547fe5de6a9
        }
    },
    getters: {
        stocks(state){
            return state.stocks
        }
    }
}