<template>
  <div class="flex-container">
    <h1>This is a page with a modal...</h1>
    <v-modal :modal-open="openModal" @close-modal="closeModal">
      <p>Hello Vue Nation</p>
    </v-modal>
    <div class="destroy">Destroy</div>
    <button @click="openModal=!openModal">Open Modal</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import VModal from '../components/VModal.vue';
  const openModal = ref(false);

  function closeModal() {
    openModal.value = false;
  }
</script>

<style scoped>
.destroy {
  width: 200px;
  padding: 10px;
  background-color: red;
  color: white;
  position: absolute;
  top: 50px;
}
</style>
