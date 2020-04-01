import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
<<<<<<< HEAD
import actions from './actions'
=======
>>>>>>> 93f30c551483451f143c2c3d1fe9b547fe5de6a9

Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< HEAD
    actions,
=======
>>>>>>> 93f30c551483451f143c2c3d1fe9b547fe5de6a9
    modules: {
        stocks,
        portfolio
    }
})
