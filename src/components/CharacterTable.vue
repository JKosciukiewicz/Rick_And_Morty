<template>
  <div class="characterTable">
      <div class="optionsMenu">
        <button class="characterTable__optionsMenu__button" @click="displayAll">All Characters</button>
        <button class="characterTable__optionsMenu__button" @click="displayFavorites">Favorites</button>
      </div>
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
          <ul v-if="displayModeAll==='true'" class="characterList__list">
              <li v-for="character in characters" :key="character" class="characterList__list__element">
                <CharacterListElement :id="character.id" :name="character.name" :species="character.species" :gender="character.gender" :lastEpisode="character.episode[character.episode.length -1].episode" :imageUrl="character.image"/>
              </li>
          </ul>
      </div>
      <div class="paginationControls">
        <p>{{pages}}</p>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import CharacterListElement from './CharacterListElement.vue'

export default defineComponent({
  name: 'CharacterTable',
  components:{
    CharacterListElement,
  },
  setup(){
    const allCharacters=require('../graphql/characters.query.gql')
    const {result}=useQuery(allCharacters)
    const characters=useResult(result, null, data=>data.characters.results)
    const pages=useResult(result, null,data=>data.characters.info.pages)
    console.log(characters)
    return {characters,pages}
  },
  data() {
    return {
       displayModeAll:'true'
    }
  },
  methods:{
    displayAll(){
      this.displayModeAll='true'
    },
    displayFavorites(){
      this.displayModeAll='false'
    }
  }
});
</script>