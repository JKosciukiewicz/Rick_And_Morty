<template>
  <div class="characterTable">
      <div class="optionsMenu"></div>
      <div class="characterList1">
          <ul>
              <li v-for="character in characters" :key="character">
                <img :src=character.image>
                <p>{{character.id}}</p>
                <p>{{character.name}}</p>
                <p>{{character.species}}</p>
                <p>{{character.gender}}</p>
              </li>
          </ul>
      </div>
      <div class="paginationControls">

      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';

export default defineComponent({
  name: 'CharacterTable',
  setup(){
    const allCharacters=require('../graphql/characters.query.gql')
    const {result}=useQuery(allCharacters)
    const characters=useResult(result, null, data=>data.characters.results)
    console.log(characters)
    return {characters}
  }
});
</script>