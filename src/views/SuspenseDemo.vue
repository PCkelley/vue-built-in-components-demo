<template>
<div class="grid-container">
  <h1>Suspense</h1>
  <Suspense>
    <section>
      <section-one />
      <section-two />
    </section>
    <template #fallback>
      <v-loader :loop-loader="20"/>
    </template>
  </Suspense>
</div>
</template>

<script setup>
  import VLoader from '../components/VLoader.vue';
  import SectionOne from '../components/suspense/SuspenseOne.vue';
  import SectionTwo from '../components/suspense/SuspenseTwo.vue';
</script>
