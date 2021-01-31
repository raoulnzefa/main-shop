<template>
	<div id="main">
		<Header/>
		<router-link to="/cart">CART</router-link>
		<br>
		<form v-on:submit.prevent="addToApi">
			<input type="text" name="name" placeholder="Nmae" v-model="User.name">
			<br>
			<input type="text" name="secondname" placeholder="Second Name" v-model="User.secondname">
			<br>
			<button type="submit">Submit</button>
		</form>
		<br>
		<Popups/>
		<Footer />
	</div>
</template>


<script>
	import Header from '@/components/header.vue';
	import Popups from '@/components/popups.vue';
	import Footer from '@/components/footer.vue';
	export default {
		components: {
			Header,
			Popups,
			Footer
		},
		data() {
			return {
				User: {
				},
			}
		},
		methods: {
		}
	}
</script>

<style scoped></style>