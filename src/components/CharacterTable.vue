<template>
  <div class="characterTable">
      <div class="optionsMenu"></div>
      <div class="characterTable_displaySelector_wrapper">
        <button class="characterTable_displaySelector" v-bind:class="{ active: displayAll }" v-on:click="selectAll">All Characters</button>
        <button class="characterTable_displaySelector" v-bind:class="{ active: !displayAll }" v-on:click="selectFavorite">Favorites</button>
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
          <ul class="characterList__list" v-if="displayAll===true">
              <li v-for="character in filteredCharacters" :key="character" class="characterList__list__element">
                 <CharacterListElement :id="character.id" :name="character.name" :species="character.species" :gender="character.gender" :lastEpisode="character.episode[character.episode.length -1].episode" :imageUrl="character.image"/>
              </li>
          </ul>
          <ul class="characterList__list" v-else>
              <li v-for="character in favortiteCharacters" :key="character" class="characterList__list__element">
                 <CharacterListElement :id="character.id" :name="character.name" :species="character.species" :gender="character.gender" :lastEpisode="character.episode[character.episode.length -1].episode" :imageUrl="character.image"/>
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
    console.log(characters)
    return {characters}
  },
    data: function () {
    return {
      displayAll:true,
    }
  },
  computed:{
    getQuery():String{
      return this.$store.state.query
    },
    filteredCharacters():any{
      let searchQuery=this.$store.state.query

      if(this.characters){
          if(searchQuery.length>1){
            console.log(searchQuery)
            let filteredCharacters=this.characters.filter(this.filterBySearch)
            console.log(filteredCharacters)
            return filteredCharacters
          }
          else{
            return this.characters
          }
      }
      else{
        console.log('empty')
        return {};
      }
    },
    favortiteCharacters():any{
      let characterList:any[]=this.filteredCharacters;
      let favortiteCharactersList=this.$store.state.favoriteCharacters
      let outputList:any[]=[]
      characterList.forEach(character => {
          if(favortiteCharactersList.includes(character.id)){
            outputList.push(character)
          }
      });
      console.log(outputList)
      return outputList;
    }
  },
  methods:{
    filterBySearch(character:any){
      let searchQuery=this.getQuery.toLowerCase()
      let firstAndLastName=character.name.toLowerCase()
      return firstAndLastName.includes(searchQuery)
    },
    selectAll(){
      this.displayAll=true
    },
    selectFavorite(){
      this.displayAll=false
    },
  }
});
</script>