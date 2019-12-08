<template>
  <div class="flex flex-wrap flex-row justify-center items-stretch">
    <div
      v-for="post in postList"
      :key="post.id"
      class="flex-auto w-1/2 h-auto p-8"
    >
      <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.name } }">
        <article>
          <h1 class="text-2xl font-bold">
            {{ post.title }}
          </h1>
          <p class="text-sm">
            {{ post.created_at }}
          </p>
          <p class="py-4">
            {{ post.preview }}
          </p>
        </article>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('posts', ['postList'])
  },
  mounted() {
    this.getPostList()
  },
  methods: {
    ...mapActions('posts', ['getPostList'])
  }
}
</script>
