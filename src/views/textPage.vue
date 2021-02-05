<template>
  <div class="">
    <Header/>
    <div class="content__wrap" id="texPage">
      <div class="container">
        <h1 class="title">{{curentPageData.name}}</h1>
        <div class="content" v-html="curentPageData.content"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  data () {
    return {
      }
	},
  components: {
    Header,
    Footer  
  },
	computed: {
    curentPageData() {
      return this.$store.getters.curentPageData('delivery')
    }, 
  },
  methods: {
  },
}
</script>

<style lang="scss">
  #texPage {
    .content {
      & li {
        font-size: 1rem;
        margin-bottom: 1rem;
        line-height: 1.3;
      }
      & p {
        display: block;
        font-size: 1rem;
        margin-bottom: 1rem;
        line-height: 1.3;
      }
    }
    .title, h1, h2 {
      padding-top: 4rem;
      margin-bottom: 2rem;
      display: block;
      font-size: 2.1rem;
      font-weight: 500;
      font-family: $font-1;
    }
    & a {
      font-size: 1rem;
      font-family: $font-1;
      transition: 0.4s;
      position: relative;
      text-decoration: none;
      color: $color-4;
      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: calc(100% + 2px);
        width: 0;
        height: 1.1px;
        transition: 0.4s;
        background: $color-4;
      }
      &:hover {
        color: $color-3;
        &::after {
          width: 100%;
          right: auto;
          left: 0;
        }
      }
    }
  }
</style>
