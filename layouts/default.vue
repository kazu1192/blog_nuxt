<template>
  <div>
    <layout-navbar />
    <nuxt />
    <layout-footer />
  </div>
</template>

<script>
import LayoutNavbar from '@/components/layouts/Navbar.vue'
import LayoutFooter from '@/components/layouts/Footer.vue'

export default {
  components: {
    LayoutNavbar,
    LayoutFooter
  }
}
</script>
