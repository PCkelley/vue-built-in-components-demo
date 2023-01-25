<template>
    <form class="card-style">
      <label for="name">Name</label>
        <input class="form-input" id="name" v-model="catDetails.name" />
      <label for="age">Age</label>
        <input class="form-input" id="age" v-model="catDetails.age" />
      <label for="breed">Breed</label>
        <input class="form-input" id="breed" v-model="catDetails.breed" />
      <button type="submit">Submit</button>
    </form>
</template>
<script setup>
  import { ref } from 'vue'

  const catDetails = ref({
    name: '',
    age: 0,
    breed: '',
  })
</script>
