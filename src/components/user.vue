<template>
	<div class="user">
		<div class="user-data">
			<span class="user-name">Ivan Ivanov</span>
			<span class="user-status">Admin</span>
		</div>
		<div class="user-avatar">
			<svg>
				<use xlink:href="/sprite.svg#user"></use>
			</svg>
			<img src="" >
		</div>
	</div>
</template>

<script></script>

<style scoped lang="scss">
	.user {
		display: flex;
		align-items: center;
		&-data {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}
		&-name {
			display: block;
			text-align: right;
			margin-bottom: 0.5rem;
			font-family: $font-1;
			color: $color-5;
			font-size: 1rem;
			font-weight: 500;
			cursor: pointer;
		}
		&-status {
			display: block;
			text-align: right;
			font-family: $font-1;
			font-size: 0.9rem;
			color: $color-2;
			cursor: pointer;
		}
		&-avatar {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			overflow: hidden;
			width: 3rem;
			height: 3rem;
			margin-left: 1rem;
			background-color: $color-1;
			cursor: pointer;
			& img {
				display: none;
				min-width: 100%;
				height: 100%;
			}
			& svg {
				display: block;
				width: 2rem;
				height: 2rem;
				fill: $color-4;
			}
		}
	}
</style>