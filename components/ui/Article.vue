<template>
  <article>
    <pre>{{ data }}</pre>
    <h1 class="text-6xl font-medium text-center leading-none tracking-wider">
      {{ json.title }}
    </h1>
    <div class="pt-8">
      <img :src="image" class="m-auto" />
    </div>
    <div
      class="markdown-body line-numbers pt-8"
      v-html="$md.render(json.bodyContent)"
    />
    <div class="flex justify-between pt-8">
      <p>{{ prev }}</p>
      <p>{{ next }}</p>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import Prism from '@/plugins/prism.js'
import json from '@/contents/json/dizzy.json'

export default {
  computed: {
    ...mapGetters({
      data: 'json/getAll'
    }),
    json() {
      return json
    },
    image() {
      return '/images/blog/' + this.json.name + '/_main.jpg'
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
