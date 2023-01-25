<template>
<div class="cat-card">
	<div class="img-crop">
		<img class="cat-img" :src="cat.url" alt="cat"/>
	</div>
	<label v-if="cat.name"> {{ cat.name }}</label>
</div>
</template>
<script setup>
defineProps({
  cat: {
    type: Object,
    required: true
  },
})
</script>
<style scoped>
.cat-card {
	width: 150px;
	height: auto;
	text-align: center;
	padding: 10px;
  border-radius: var(--theme-radius);
  background-color: white;
	box-sizing: border-box;
}
.img-crop {
	width: 130px;
	height: 130px;
	overflow: hidden;
	border-radius: var(--theme-radius);
}
.cat-img {
	height: 130px;
	width: auto;
}
</style>