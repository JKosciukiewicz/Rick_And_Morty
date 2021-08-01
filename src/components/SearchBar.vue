<template>
  <div class="searchBar__Container">
      <div class="searchBar__Wrapper">
         <input v-model="query" placeholder="Search characters by name" v-on:keyup="updateQuery"/>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';

export default defineComponent({
  name: 'SearchBar',
   data() {
    return {
        query:'',
    }
  },
  methods:{
      updateQuery(){
          this.$store.state.query=this.query
      }
  }
});
</script>