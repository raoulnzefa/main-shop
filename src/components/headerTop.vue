<template>
	<div class="header-top">
		<div class="container">
			<div class="header-top__wrap">
				<ul class="header-top__list">
          <li v-for="(link, index) in getDataPages" :key="index" class="header-top__item">
            <router-link :to="link.path" class="link">{{link.name}}</router-link>
          </li>
				</ul>
			</div>
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
  components: {
  },
	computed: {
    ...mapGetters(['getDataPages']),
    curentPageData() {
      return this.$store.getters.curentPageData('delivery')
    }, 
    getDataPages() {
      return this.$store.getters.getDataPages(['code', 'path', 'name'])
    }
  },
  methods: {
    ...mapActions(['curentPageDataAction']),
  },
}

</script>

<style scoped lang="scss">
.header-top {
  background-color: $color-1;
  &__list {
		display: flex;
		align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  &__item {
    display: block;
    padding: 0.7rem 0.5rem;
    & a {
      display: block;
      font-weight: 500;
    }
  }
}
</style>

