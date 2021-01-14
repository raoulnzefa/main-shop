<template>
	<router-link to="/" class="logo">
		<img src="/logo.svg" alt="">
		<h1 class="logo-title">Main-Shop</h1>
	</router-link>
</template>

<script></script>

<style lang="scss" scoped>
.logo {
	display: flex;
	align-items: center;
	justify-content: center;
	max-height: 70px;
	text-decoration: none;
  & img {
		display: block;
		max-width: 50px;
    max-height: 100%;
  }
	&-title {
		display: block;
		margin-left: 1rem;
		color: $color-5;
		font-family: $font-1;
		font-size: 2rem;
		white-space: nowrap;
	}
}
</style>