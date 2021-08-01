<template>
  <CharacterTable/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CharacterTable from './components/CharacterTable.vue'
import store from './store'
export default defineComponent({
  name: 'App',
  store,
  components: {
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
