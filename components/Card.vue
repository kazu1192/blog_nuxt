<template>
  <div class="w-1/2 mb-6 p-4">
    <nuxt-link :to="{ name: 'post-slug', params: { slug: post.name } }">
      <article
        class="w-auto h-full bg-sub rounded border-2 shadow-xl overflow-hidden"
      >
        <div class="px-6 py-4">
          <img :src="image" class="w-full" alt="Sunset in the mountains" />
          <h2 class="font-bold text-3xl mt-4">
            {{ post.title }}
          </h2>
          <div class="text-base text-gray-700 py-4">
            <span>
              {{ post.created_at }}
            </span>
          </div>
          <p class="text-base text-gray-700">
            {{ post.preview }}
          </p>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    }
  },
  computed: {
    image() {
      return '/images/blog/' + this.post.name + '/_thumbnail.jpg'
    }
  }
}
</script>
