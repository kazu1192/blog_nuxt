<template>
  <div class="text-center mx-auto mt-8">
    <nuxt-link to="#">
      {{ more }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    more() {
      return 'more'
    }
  }
}
</script>
