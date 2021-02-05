<template>
	<header class="header">
		<HeaderTop />
		<div class="header-body">
			<div class="container">
				<div class="header-wrap">
				<Logo/>
					<div class="header-right">
						<User/>
						<UserPanel/>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import HeaderTop from '@/components/headerTop.vue'
import Logo from '@/components/logo.vue'
import User from '@/components/user/user.vue'
import UserPanel from '@/components/user/userPanel.vue'
import {mapGetters, mapActions} from 'vuex'


export default {
	components: {
		HeaderTop,
		Logo,
		User,
		UserPanel
	},
	computed: {
		...mapGetters(['userData'])
	},
	methods: {
		...mapActions(['getUser']),    
	},
	async mounted() {
		this.getUser();
	}
}

</script>

<style scoped lang="scss">
.header {
	box-shadow: $shadow-1;
	display: flex;
	flex-direction: column;
	width: 100%;
	&-body {
		padding: 1rem 0;
	}

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
}
</style>