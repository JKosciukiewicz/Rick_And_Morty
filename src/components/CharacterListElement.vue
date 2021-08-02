<template>
  <div class="characterList__list__element__wrapper">
      <div class="imageWapper">
        <img :src=imageUrl>
      </div>
      <p>{{id}}</p>
      <p>{{name}}</p>
      <p>{{species}}</p>
      <div class="characterList__list__element__genderWrapper">
        <span v-if="gender==='Male'" class="material-icons">
          male
        </span>
        <span v-else-if="gender==='Female'" class="material-icons">
          female
        </span>
        <span v-else-if="gender==='unknown'" class="material-icons">
          remove
        </span>
        <span v-else-if="gender==='Genderless'">
          clear
        </span>
        <p>{{gender}}</p>
      </div>
      <p>{{lastEpisode}}</p>
      <span v-on:click="toggleFavorite" class="material-icons toggleFavorite" v-bind:class="{ active: isFavorite }">
        star
      </span>
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
        console.log(this.$store.state.favoriteCharacters)
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