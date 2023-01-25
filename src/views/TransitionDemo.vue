<template>
  <div class="grid-container">
    <div class="btn-group">
      <button @click="showCard = !showCard ">
				{{ showCard ? 'Remove' : 'Add' }} Cat
			</button>
    </div>
    <Transition name="slide" @leave="byeee">
      <v-cat-card v-if="showCard" :cat="cat" />
    </Transition>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import VCatCard from '../components/VCatCard.vue';
	
	const showCard = ref(false);
	const cat = ref({ "name": "Bogo", "url": "https://cdn2.thecatapi.com/images/8g.gif" });
  const cat2 = ref({ "name": "Jellybean", "url": "https://cdn2.thecatapi.com/images/cjj.jpg" });
  function byeee() {
    console.log('See ya litter!');
  }
</script>

<style scoped>
/* SLIDE */
.slide-enter-from {
	transform: translateX(-300px);
  opacity: 0;
}
.slide-leave-to {
	transform: translateX(300px);
  opacity: 0;
}
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}

/* FADE */
.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active, .fade-enter-active {
  transition: all 0.5s ease;
}
</style>
