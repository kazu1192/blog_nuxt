<template>
  <section>
    <blog-title />
    <div class="flex">
      <blog-card />
    </div>
  </section>
</template>

<script>
import BlogTitle from '@/components/ui/Title.vue'
import BlogCard from '@/components/pages/BlogCard.vue'

export default {
  components: {
    BlogTitle,
    BlogCard
  }
}
</script>
