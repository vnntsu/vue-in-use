import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/contents/Home.vue'
import Portfolio from './components/contents/Portfolio.vue'
import Article from './components/contents/Article.vue'
import Note from './components/contents/Note.vue'
import Contact from './components/contents/Contact.vue'

import './assets/styles/index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/article', component: Article },
    { path: '/note', component: Note },
    { path: '/contact', component: Contact }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
