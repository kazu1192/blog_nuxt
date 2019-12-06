<template>
  <div
    class="xl:w-1/2 lg:w-2/3 md:w-3/4 w-auto max-w-4xl m-auto flex flex-wrap justify-center items-center p-4"
  >
    <blog-card />
    <div class="text-center mx-auto mt-8">
      <nuxt-link to="#">
        {{ pagemore }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import BlogCard from '@/components/pages/BlogCard.vue'

export default {
  components: {
    BlogCard
  },
  data() {
    return {
      pagemore: 'MORE'
    }
  }
}
</script>
