<template>
  <div
    class="xl:w-1/2 lg:w-2/3 md:w-3/4 w-auto max-w-4xl m-auto flex flex-wrap justify-center items-center p-4"
  >
    <div class="bg-white-opacity rounded shadow-md">
      <article class="xl:p-12 p-6">
        <article-content />
      </article>
    </div>
    <div>Prev</div>
    <div>Next</div>
  </div>
</template>

<script>
import ArticleContent from '@/components/ui/Article.vue'

export default {
  components: {
    ArticleContent
  }
}
</script>
