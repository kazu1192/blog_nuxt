<template>
  <div>
    <Article :article="article" />
  </div>
</template>

<script>
import Article from '@/components/Article.vue'

export default {
  async asyncData({ params }) {
    const article = await import(`@/contents/json/${params.slug}.json`)
    return {
      article
    }
  },
  components: {
    Article
  }
}
</script>
