<template>
  <div class="popup-wrap">
    <LoginForm/>
  </div>
</template>

<script>
  import LoginForm from '@/components/loginForm.vue'

  export default {
    components: {
      LoginForm
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
    z-index: 999;
    backdrop-filter: blur(2.5px);
  }
</style>
