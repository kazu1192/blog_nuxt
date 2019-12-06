<template>
  <div>
    <navbar-component />
    <header-component />
    <transition mode="out-in">
      <nuxt />
    </transition>
    <footer-component class="mt-12" />
  </div>
</template>

<script>
import NavbarComponent from '@/components/layouts/Navbar.vue'
import HeaderComponent from '@/components/layouts/Header.vue'
import FooterComponent from '@/components/layouts/Footer.vue'

export default {
  components: {
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
