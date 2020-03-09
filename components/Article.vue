<template>
  <section class="xl:w-1/2 lg:w-2/3 md:w-3/4 w-auto bg-sub m-auto">
    <article class="m-12 p-8">
      <div class="pt-8">
        <img :src="image" class="m-auto" />
      </div>
      <div class="pt-8">
        <h1 class="text-6xl font-medium leading-none tracking-wider">
          {{ article.title }}
        </h1>
      </div>
      <div
        class="markdown-body line-numbers pt-8 pb-8"
        v-html="$md.render(article.bodyContent)"
      />
    </article>
  </section>
</template>

<script>
import Prism from '@/plugins/prism.js'

export default {
  props: ['article'],
  computed: {
    image() {
      return '/images/blog/' + this.article.name + '/_main.jpg'
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
  h1,
  h2 {
    border-bottom: 1px solid;
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: square;
  }
}
</style>
