<template>
  <article class="article">
    <div v-html="$md.render(json.bodyContent)" class="markdown-body" />
  </article>
</template>

<script>
import json from '@/contents/json/dizzy.json'

export default {
  computed: {
    json() {
      return json
    }
  }
}
</script>

<style lang="scss">
$base-blue: rgb(011, 054, 097);
$base-white: rgb(232, 240, 222);

.markdown-body {
  color: $base-blue;

  h1,
  h2 {
    border-bottom: 1px solid $base-blue;
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: square;
  }
}
</style>
