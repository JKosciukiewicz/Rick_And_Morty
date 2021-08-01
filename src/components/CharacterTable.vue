<template>
  <div class="characterTable">
<<<<<<< HEAD
      <div class="optionsMenu"></div>
      <h1>{{filterCharacters}}</h1>
=======
      <div class="optionsMenu">
        <button class="characterTable__optionsMenu__button" @click="displayAll">All Characters</button>
        <button class="characterTable__optionsMenu__button" @click="displayFavorites">Favorites</button>
      </div>
>>>>>>> f884c40f836496b1cd2efd0ae09333a218ef8ca4
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
<<<<<<< HEAD
          <ul class="characterList__list">
              <li v-for="character in filteredCharacters" :key="character" class="characterList__list__element">
                 <CharacterListElement :id="character.id" :name="character.name" :species="character.species" :gender="character.gender" :lastEpisode="character.episode[character.episode.length -1].episode" :imageUrl="character.image"/>
=======
          <ul v-if="displayModeAll==='true'" class="characterList__list">
              <li v-for="character in characters" :key="character" class="characterList__list__element">
                <CharacterListElement :id="character.id" :name="character.name" :species="character.species" :gender="character.gender" :lastEpisode="character.episode[character.episode.length -1].episode" :imageUrl="character.image"/>
              </li>
          </ul>
          <ul v-if="displayModeAll==='false'" class="characterList__list">
              <li v-for="character in characters" :key="character" class="characterList__list__element">
                <CharacterListElement :id="character.id" :name="character.name" :species="character.species" :gender="character.gender" :lastEpisode="character.episode[character.episode.length -1].episode" :imageUrl="character.image"/>
>>>>>>> f884c40f836496b1cd2efd0ae09333a218ef8ca4
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
<<<<<<< HEAD

export default defineComponent({
  name: 'CharacterTable',
    components:{
=======
export default defineComponent({
  name: 'CharacterTable',
  components:{
>>>>>>> f884c40f836496b1cd2efd0ae09333a218ef8ca4
    CharacterListElement,
  },
  setup(){
    const allCharacters=require('../graphql/characters.query.gql')
    const {result}=useQuery(allCharacters)
    console.log(result)
    const characters=useResult(result, null, data=>data.characters.results)
<<<<<<< HEAD
    console.log(characters)
    return {characters}
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
    }
  },
  methods:{
    filterBySearch(character:any){
      let searchQuery=this.getQuery.toLowerCase()
      let firstAndLastName=character.name.toLowerCase()
      return firstAndLastName.includes(searchQuery)
=======
    const pages=useResult(result, null,data=>data.characters.info.pages)
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
>>>>>>> f884c40f836496b1cd2efd0ae09333a218ef8ca4
    }
  }
});
</script>