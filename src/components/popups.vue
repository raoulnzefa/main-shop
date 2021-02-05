<template>
  <transition name="fade" mode="out-in" appear>
    <div class="popup-wrap" v-if="allPopup.active" @click="closeAllPopups($event, 'all', false)">
      <LoginForm />
    </div>
  </transition>
</template>

<script>
  import LoginForm from '@/components/loginForm.vue'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'modal',
    data() {
      return {}
    },
    components: {
      LoginForm
    },
    computed: {
      ...mapGetters(['allPopup', 'getCurentPopup']),
    },
    methods: {
      ...mapActions(['togglePopupStatus']),    
      closeAllPopups(event, popup, status) {
        if (!event.target.closest('.popup')) {
          this.togglePopupStatus({popup, status});
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .popup-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    left: 0;
    top: 0;
    background-color: fade-out($color-4, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(2.5px);
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
