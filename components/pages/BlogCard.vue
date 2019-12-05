<template>
  <article>
    <div
      class="xl:w-1/2 lg:w-2/3 md:w-3/4 w-auto max-w-4xl m-auto flex flex-wrap justify-center items-center p-4"
    >
      <div v-for="post in postList" :key="post.id" class="w-full">
        <article
          class="flex-1 xl:px-12 px-6 py-4 my-4 rounded bg-green-600 shadow-md"
        >
          <p class="text-sm text-white">
            {{ post.created_at }}
          </p>
          <h1 class="text-4xl font-bold text-white">
            {{ post.title }}
          </h1>
          <p class="text-base py-4">{{ post.preview }} ...</p>
          <div class="flex">
            <div
              class="text-sm text-white font-medium mt-4 px-4 py-2 hover:bg-green-700 border border-white-500 hover:border-transparent rounded"
            >
              <nuxt-link to="/blog/post">
                {{ readmore }}
              </nuxt-link>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="text-center mx-auto my-4">
      <nuxt-link to="#">
        {{ pagemore }}
      </nuxt-link>
    </div>
  </article>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      readmore: 'READ MORE',
      pagemore: 'MORE'
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
