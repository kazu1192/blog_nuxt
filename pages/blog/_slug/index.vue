<template>
  <div class="markdown-body">
    <div v-html="$md.render(article.bodyContent)" />
  </div>
</template>

<script>
export default {
  async asyncData() {
    const article = await import(`~/contents/json/dizzy.json`)
    return {
      article
    }
  }
}
</script>

<style scoped>
.markdown-body {
  padding: 60px;
  color: RGB(232, 240, 222);
  background: RGB(011, 054, 097);
}
</style>
