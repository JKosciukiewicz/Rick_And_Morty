import { createApp, provide, render,h } from 'vue'
import App from './App.vue'
import apolloClient from './apollo/apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'


createApp({
  setup(){
    provide(DefaultApolloClient, apolloClient)
  },
  render(){
    return h(App)
  }
}).mount('#app')
