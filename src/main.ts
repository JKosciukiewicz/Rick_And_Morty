import { createApp, provide, render,h } from 'vue'
import App from './App.vue'
import apolloClient from './apollo/apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'
import store from './store/index'


createApp({
  setup(){
    provide(DefaultApolloClient, apolloClient)
  },
  render(){
    return h(App)
  }
}).use(store).mount('#app')
