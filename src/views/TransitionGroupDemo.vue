<template>
	<article class="grid-container">
		<label for="catSearch">Search Cats {{ catFilter }}</label>
		<input v-model="catFilter" placeholder="Search Cats" id="catSearch"/>
		<div class="grid-style">
			<transition-group name="list">
				<div v-for="(cat, index) in filteredCatsList" :key="index">
					<v-cat-card :cat="cat" />
				</div>
		  </transition-group>
		</div>
	</article>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import VCatCard from '../components/VCatCard.vue';

	const catlist = ref([
    { "name": "Clawdia", "url": "https://cdn2.thecatapi.com/images/eh6.jpg" },
    { "name": "Fats", "url": "https://cdn2.thecatapi.com/images/ahb.jpg" },
    { "name": "Beignet", "url": "https://cdn2.thecatapi.com/images/MTkyNjU3NQ.jpg" },
    { "name": "Chonks", "url": "https://cdn2.thecatapi.com/images/c7j.jpg" },
    { "name": "Muffinopla", "url": "https://cdn2.thecatapi.com/images/amn.jpg" },
    { "name": "Mitch", "url": "https://cdn2.thecatapi.com/images/dts.jpg" },
		{ "name": "Bogo", "url": "https://cdn2.thecatapi.com/images/8g.gif" },
		{ "name": "Jellybean", "url": "https://cdn2.thecatapi.com/images/cjj.jpg" },
    { "name":"Uncle Boris", "url": "https://cdn2.thecatapi.com/images/C0YfrgcOD.jpg"}
  ]);
	const catFilter = ref('');

	const filteredCatsList = computed(() => {
	  return catFilter.value ? catlist.value.filter(cat => cat.name.toLowerCase().includes(catFilter.value.toLowerCase())) : catlist.value;
  });

</script>
<style scoped>
.list-enter-from {
  opacity: 0;
	transform: translateX(30px);
}
.list-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
</style>
