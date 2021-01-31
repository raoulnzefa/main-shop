<template>
  <div class="login-wrap popup" id="login_wrap" transition="popup" v-if="allPopup.login.active">
    <div class="login-col" v-bind:class="{active: allPopup.login.params.colActive == 1}">
      <div class="login-col-wrap active">
        <h3 class="title-sec login-title">Sign in</h3>
        <form class="login-form__login" id="login">
          <input type="text" class="input login-input" name="login" placeholder="E-Mail / Login / Phone">
          <input type="password" class="input login-input" name="password" placeholder="Password">
          <span class="link login-forgot">Forgot your password?</span>
          <button type="submit" class="btn login-btn">Log in</button>
        </form>
      </div>
    </div>
    <div class="login-col" v-bind:class="{active: allPopup.login.params.colActive == 2}">
      <div class="login-col-wrap active">
        <h3 class="title-sec login-title">Sign up</h3>
        <form class="login-form__login" id="signup">
          <input type="text" class="input login-input" name="name" placeholder="Name">
          <input type="text" class="input login-input" name="login" placeholder="E-Mail / Phone">
          <input type="password" class="input login-input" name="password" placeholder="Password">
          <button type="submit" class="btn login-btn">Sign up</button>
        </form>
      </div>
      <div class="login-col-wrap login-col-wrap__hero">
        <div class="login-col__col" v-bind:class="{show: allPopup.login.params.colActive == 2, hide: allPopup.login.params.colActive == 1}">
          <h3 class="title-sec login-title">Hello, Friend!</h3>
          <span class="text login-text">Enter your personal details and start journey with us</span>
          <span @click="allPopup.login.params.colActive = 1" class="btn light rounded">Log in</span>
        </div>

        <div class="login-col__col" v-bind:class="{show: allPopup.login.params.colActive == 1, hide: allPopup.login.params.colActive == 2}">
          <h3 class="title-sec login-title">Welcome Back!</h3>
          <span class="text login-text">To keep connected with us please login with your personal info</span>
          <span @click="allPopup.login.params.colActive = 2" class="btn light rounded">Sign up</span>
        </div>
      </div>
    </div>
    <div class="close" @click="closePopup('login')" v-bind:class="{active: allPopup.login.params.colActive == 2}"><span></span><span></span><span></span></div>
  </div>
</template>  

<script>
import {mapGetters, mapActions} from 'vuex'

export default{
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['allPopup']),
  },
  methods: {
    ...mapActions(['togglePopupStatus']),
    closePopup(popup) {
      this.togglePopupStatus({popup});
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.login { 
  &-wrap {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 700px;
    height: 500px;
    background: $color-1;
    box-shadow: $shadow-1;
    overflow: hidden;
  }  
  &-col {
    padding: 2rem;
    display: flex;
    width: 50%;
    flex: 50%;
    position: relative;
    transition: 0.3s;
    &__col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      transition: 0.3s;
    }
    &.active {
      &:first-child {
        &::after {
          left: 100%;
        }
      }
      & .login-col-wrap__hero {
        right: 100%;
      }
    }
    &-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      position: relative;
      z-index: 1;
      transition: 0.3s;
      background-color: $color-1;
      &__hero {
        position: absolute;
        z-index: 2;
        right: 0;
        left: auto;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        background-color: $color-4;
        padding: 1rem;
        transition: 0.3s;
        & .login-title {
          color: $color-1;
        }
      }
    }
  }  
  &-title {
    text-align: center;
    margin-bottom: 2rem;
    color: $color-5;
    transition: 0.3s;
  }
  &-text {
    text-align: center;
    color: $color-1;
    margin-bottom: 1rem;
  }
  &-input {
    width: 100%;
    margin-bottom: 1rem;
  }
  &-forgot {
    display: block;
    width: max-content;
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
  &-btn {
    margin-left: auto;
    margin-right: auto;
  }
}
.show {
  opacity: 1;
  overflow: hidden;
}
.hide {
  opacity: 0 !important;
  // height: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  z-index: -99;
}
.close {
  position: absolute;
  right: 0.8rem;
  top: 0.8rem;
  background-color: $color-1;
  z-index: 9;
  &::before, &::after, & span:nth-child(1), & span:nth-child(2) {
    background-color: $color-4;
  }
  &:hover {
    & span:nth-child(3) {
      box-shadow: 0 0 0.3rem $color-1;
    }
  }
  &.active {
    background-color: $color-4;
    &::before, &::after, & span:nth-child(1), & span:nth-child(2) {
      background-color: $color-1;
    }
    &:hover {
      & span:nth-child(3) {
        box-shadow: 0 0 0.3rem $color-4;
      }
    }
  }
}
</style>