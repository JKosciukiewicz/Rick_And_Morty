<template>
  <div class="characterList__list__element">
      <img :src=imageUrl>
      <p>{{id}}</p>
      <p>{{name}}</p>
      <p>{{species}}</p>
      <p>{{gender}}</p>
      <p>{{lastEpisode}}</p>
      <p v-on:click="toggleFavorite">Add to Favorite</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
export default defineComponent({
  name: 'CharacterListElement',
  /*data() {
  },*/
  props:{
      id:String,
      name:String,
      species:String,
      gender:String,
      lastEpisode:String,
      imageUrl:String,
  },
  methods:{
    toggleFavorite(){
      if(this.isFavorite){
        let favoriteList:String[] =this.$store.state.favoriteCharacters;
        let filteredList:String[]=favoriteList.filter(element=>element!==this.id)
        this.$store.state.favoriteCharacters=filteredList
      }
      else{
        this.$store.state.favoriteCharacters.push(this.id)
      }
    },
  },
  computed:{
    isFavorite(){
      let favoriteList:String[] =this.$store.state.favoriteCharacters;
      let isFavorite=false
      favoriteList.forEach(element => {
          if(element===this.id){
            isFavorite=true
          }
      });
      return isFavorite
    }
  }

});
</script>