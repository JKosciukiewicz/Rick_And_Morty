<template>
  <div class="characterList__list__element">
      <img :src=imageUrl>
      <p>{{id}}</p>
      <p>{{name}}</p>
      <p>{{species}}</p>
      <p>{{gender}}</p>
      <p>{{lastEpisode}}</p>
      <p @click="toggleFavortie">Add to Favorite</p>
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
        console.log('favorite')
    },
  },
  computed:{
    isFavorite():[Number]{
      return this.$store.state.favoriteCharacters;
    }
  }

});
</script>