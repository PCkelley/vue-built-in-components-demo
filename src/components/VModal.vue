<template>
  <Teleport to="body">
  <div v-if="modalOpen" class="position-modal"  @click.self="$emit('close-modal')">
    <div class="card-style">
      <slot/>
    </div>
  </div>
</Teleport>
</template>

<script setup>
defineProps({
  modalOpen: Boolean,
  default: false,
})
const emits = defineEmits(['close-modal']);
</script>

<style scoped>
  .position-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.52);
    position: fixed;
    top: 0px;
    left: 0px;
    cursor: pointer;
  }
</style>
