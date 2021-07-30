<template>
  <div class="characterTable">
      <div class="optionsMenu"></div>
      <div class="characterList">
        <div class="characterList__header">
          <p>Photo</p>
          <p>CharacterID</p>
          <p>Name</p>
          <p>Species</p>
          <p>Gender</p>
          <p>Last Episode</p>
          <p>Add To Favorite</p>
        </div>
          <ul class="characterList__list">
              <li v-for="character in characters" :key="character" class="characterList__list__element">
                <img :src=character.image>
                <p>{{character.id}}</p>
                <p>{{character.name}}</p>
                <p>{{character.species}}</p>
                <p>{{character.gender}}</p>
                <p>{{character.episode[character.episode.length -1].episode}}</p>
                <p>Add to Favorite</p>
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