<template>
  <div>
    <SearchBar/>
    <CharacterTable/>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import CharacterTable from './components/CharacterTable.vue'
import SearchBar from './components/SearchBar.vue'
export default defineComponent({
  name: 'App',
  components: {
    SearchBar,
    CharacterTable
  },
});
</script>

<style>
  @import '../styles/characterList.css';
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  #app {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #A9B1BD;
  }
</style>
