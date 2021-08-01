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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
