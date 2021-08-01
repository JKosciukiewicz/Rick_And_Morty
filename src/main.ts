import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import apolloClient from './apollo/apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'
import store from './store/index'
=======
import store from './store'
>>>>>>> f884c40f836496b1cd2efd0ae09333a218ef8ca4

createApp(App).use(store).mount('#app')
