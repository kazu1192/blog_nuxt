<template>
  <div>
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
