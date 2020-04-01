import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Stocks from './components/stocks/Stocks'
import Portfolio from './components/portfolio/Portfolio'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/stocks', component: Stocks },
        { path: '/portfolio', component: Portfolio },
    ]
})

