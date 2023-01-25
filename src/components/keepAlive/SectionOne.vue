<template>
  <section class="grid-style">
      <div v-for="cat in catlist" >
        <v-cat-card :cat="cat" />
      </div>
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import VCatCard from '../VCatCard.vue';
  import cats from '../../services/cats.js';

  const catlist = ref({});
  
  onMounted(() => {
    cats.getCatImgs()
      .then((response) => {
        catlist.value = { ...response.data };
      })
      .catch((error) => {
        console.log(error);
      });
  })
</script>
