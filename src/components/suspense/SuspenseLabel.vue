<template>
	<label>Here are some cats</label>
</template>

<script setup>
await new Promise(resolve => {
  setTimeout(() => { resolve() }, 3000)
})
</script>