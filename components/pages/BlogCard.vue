<template>
  <article>
    <div v-for="post in postList" :key="post.id" class="w-full">
      <article class="flex-1 xl:px-12 px-6 py-4 my-4 rounded shadow-md">
        <p class="text-sm">
          {{ post.created_at }}
        </p>
        <h1 class="text-4xl font-bold">
          {{ post.title }}
        </h1>
        <p class="text-base py-4">{{ post.preview }} ...</p>
        <div class="flex">
          <nuxt-link to="/blog/post">
            <div
              class="text-sm font-medium mt-4 px-4 py-2 border border-white-500 hover:bg-green-500 rounded"
            >
              {{ readmore }}
            </div>
          </nuxt-link>
        </div>
      </article>
    </div>
  </article>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      readmore: 'READ MORE'
    }
  },
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
