<template>
  <div class="bg-main">
    <header-component />
    <nuxt />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '@/components/layouts/Header.vue'
import FooterComponent from '@/components/layouts/Footer.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
