<template>
  <div class="xl:w-1/2 lg:w-2/3 md:w-3/4 w-auto max-w-4xl m-auto p-4">
    <div class="flex justify-between items-center">
      <div class="text-white mr-6">
        <nuxt-link
          :to="siteTop"
          class=" font-semibold text-xl tracking-tight"
          >{{ siteName }}</nuxt-link
        >
      </div>
      <HamburgerMenu />
    </div>
  </div>
</template>

<script>
import HamburgerMenu from '@/components/ui/HamburgerMenu.vue'

export default {
  components: {
    HamburgerMenu
  },
  data() {
    return {
      siteName: 'kazu1192.com',
      siteTop: '/blog'
    }
  }
}
</script>
