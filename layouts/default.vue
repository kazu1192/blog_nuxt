<template>
  <div>
    <navbar-component />
    <header-component />
    <div class="xl:w-1/2 lg:w-2/3 md:w-3/4 w-auto max-w-4xl m-auto">
      <nuxt />
    </div>
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
