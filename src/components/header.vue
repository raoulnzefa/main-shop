<template>
	<header class="header">
		<div class="container">
			<div class="header-wrap">
				<Logo/>
				<div class="header-right">
					<User/>
					<User_panel/>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import Logo from '@/components/logo.vue'
import User from '@/components/user/user.vue'
import User_panel from '@/components/user/user_panel.vue'

export default {
	components: {
		Logo,
		User,
		User_panel
	},
	methods: {
	}
}

</script>

<style scoped lang="scss">
.header {
	padding: 1rem 0;
	box-shadow: $shadow-1;

	&-wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&-right {
		display: flex;
	}
	& .user_panel {
		margin-left: 1rem;
	}

	& .container {
		max-width: 100%;
		padding-left: 4rem;
		padding-right: 4rem;
	}
}
</style>