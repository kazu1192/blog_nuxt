<template>
  <article class="container px-6 py-6">
    <div class="block md:flex flex-wrap px-4">
      <div v-for="post in postList" :key="post.id">
        <div class="w-full lg:w-1/2 md:px-4 lg:px-6 py-5 m-auto">
          <div class="px-4 py-4 md:px-10 rounded bg-green-600">
            <h1 class="text-xl font-bold">
              {{ post.title }}
            </h1>
            <p class="text-base py-4">{{ post.preview }} ...</p>
            <div class="flex">
              <div class="w-full md:w-1/3 text-sm font-medium">
                <router-link to="/blog/post">
                  {{ readmore }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-sm mx-auto text-center m-auto">
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
      pagemore: 'PAGE MORE...'
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
