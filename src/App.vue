<template>
  <div>
<<<<<<< HEAD
    <SearchBar/>
=======
>>>>>>> f884c40f836496b1cd2efd0ae09333a218ef8ca4
    <CharacterTable/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CharacterTable from './components/CharacterTable.vue'
<<<<<<< HEAD
import SearchBar from './components/SearchBar.vue'
=======
import store from './store'
>>>>>>> f884c40f836496b1cd2efd0ae09333a218ef8ca4
export default defineComponent({
  name: 'App',
  store,
  components: {
    SearchBar,
    CharacterTable
  },
});
</script>

<style>
  @import '../styles/characterList.css';
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
