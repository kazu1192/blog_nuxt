<template>
  <div id="app">
    <div class="header primary">
      <div class="title">
        {{ title }}
      </div>
    </div>
    <div class="markdown-body">
      <div v-html="$md.render(article.bodyContent)" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const article = await import(`~/contents/json/dizzy.json`)
    return {
      title: "KAZU'S BLOG",
      article
    }
  }
}
</script>

<style scoped>
.markdown-body {
  margin: 40px;
  padding: 60px;
  color: RGB(232, 240, 222);
  background: RGB(011, 054, 097);
}
</style>
