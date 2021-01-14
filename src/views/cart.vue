<template>
	<div id="cart">
		<Header></Header>
		<h2>CART</h2>
		<span>12312321</span>
		<loader v-if="loading" />
		<router-link to="/">Home</router-link>
		<router-link to="/not">404</router-link>
	</div>
</template>


<script>
import Header from '@/components/header';

export default {
	components: {
		Header
	}
}
</script>

<style scoped>
#cart {
}
</style>