<template>
<article class="grid-style">
	<div v-for="n in loopLoader">
	  <div class="skeleton" />
  </div>
</article>
</template>

<script setup>
defineProps({
  loopLoader: {
    type: Number,
    default: 1
  },
})
</script>

<style scoped>
.skeleton {
	width: 150px;
	height: 150px;
  border-radius: var(--theme-radius);
  background-color: grey;
	animation-name: color;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

@keyframes color {
  0% {
    background-color: #6a6a6a
  }
  50% {
    background-color: #d8d8d8;
  }
  100% {
    background-color: #6c6c6c;
  }
}
</style>