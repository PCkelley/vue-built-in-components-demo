<template>
  <section class="cat-section">
    <suspense-Label/>
    <div class="grid-style">
      <div v-for="cat in catlist">
        <v-cat-card :cat="cat" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import SuspenseLabel from './SuspenseLabel.vue';
  import VCatCard from '../VCatCard.vue';
  import cats from '../../services/cats.js';

  const catlist = await cats.getCatImgs()
    .then((response) => {
      return{ ...response.data };
    })
    .catch((error) => {
      console.log(error);
    });
</script>
