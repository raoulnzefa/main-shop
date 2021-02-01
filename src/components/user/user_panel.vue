<template>
	<div class="user_panel">
		<div v-if="userData" id="favorite" class="item">
			<svg>
				<use xlink:href="@/assets/sprite.svg#favorite"></use>
			</svg>
		</div>
		<div id="view" class="item">
			<svg>
				<use xlink:href="@/assets/sprite.svg#eye"></use>
			</svg>
		</div>
		<div id="cart" class="item">
			<svg>
				<use xlink:href="@/assets/sprite.svg#cart"></use>
			</svg>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
	data () {
		return {
		}
	},
	computed: {
		...mapGetters(['userData'])
	},
	methods: {
		...mapActions(['togglePopupStatus']),    
		onPopupLogin(popup, params) {
			this.togglePopupStatus({popup, params})
		}
	},
}
</script>

<style lang="scss" scoped>
.user_panel {
	display: flex;
	align-items: center;
	margin-left: -0.4rem;
	margin-right: -0.4rem;
}
.item {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	margin-left: 0.4rem;
	margin-right: 0.4rem;
	cursor: pointer;
	transition: 0.4s;
	&:hover {
		& svg {

		}
	}
	& svg {
		display: block;
		width: 100%;
		height: 100%;
		fill: $color-3;
	}
}
</style>