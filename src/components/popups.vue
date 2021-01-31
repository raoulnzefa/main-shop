<template>
    <div class="popup-wrap"  transition="popupWrap" v-if="allPopup.active" @click="closeAllPopups($event, 'all')">
        <transition name="popup-anim" mode="out-in" duration="1000" appear>
        <LoginForm />
      </transition>
    </div>
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
      closeAllPopups(event, popup) {
        if (!event.target.closest('.popup')) {
          this.togglePopupStatus({popup});
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
    &.active {
    }
  }
  .popup-anim-enter {
    opacity: 0;
  }
  .popup-anim-enter-active {
    opacity: 1;
  }

  .popup {
    // display: none;
  }
</style>
