<template>
  <div>
    <article>
      <h1 class="text-6xl font-medium text-center leading-none tracking-wider">
        {{ article.title }}
      </h1>
      <div class="pt-8">
        <img :src="image" class="m-auto" />
      </div>
      <div
        class="markdown-body line-numbers pt-8"
        v-html="$md.render(article.bodyContent)"
      />
      <div class="flex justify-between pt-8">
        <p>{{ prev }}</p>
        <p>{{ next }}</p>
      </div>
    </article>
  </div>
</template>

<script>
import Prism from '@/plugins/prism.js'

export default {
  async asyncData({ params }) {
    const article = await import(`@/contents/json/${params.slug}.json`)
    return {
      article
    }
  },
  computed: {
    image() {
      return '/images/blog/' + this.article.name + '/_main.jpg'
    },
    prev() {
      return '<< PREV'
    },
    next() {
      return 'NEXT >>'
    }
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss">
@import '@/assets/css/custom.scss';

.markdown-body {
  color: $moss-green;

  h1,
  h2 {
    border-bottom: 1px solid $moss-green;
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: square;
  }
}
</style>
