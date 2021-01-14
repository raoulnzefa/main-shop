<template>
	<div id="main">
		<Header />
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
		<Footer />
	</div>
</template>


<script>
	import Header from '@/components/header.vue';
	import Footer from '@/components/footer.vue';
	export default {
		components: {
			Header,
			Footer
		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				User: {
					name: '',
					secondname: ''
				}
			}
		},
		methods: {
			addToApi() {
				let newUser = {
					name: this.User.name,
					secondname: this.User.secondname,
				};
				console.log(newUser);

				fetch('http://localhost:27017/users')
					.then(response => response.text())
					.then((result) => {
						console.log('result: ' + result);
						// document.body.textContent = result
					})
					
			}
		}
	}
</script>

<style scoped></style>