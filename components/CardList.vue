<template>
  <section class="xl:w-1/2 lg:w-2/3 md:w-3/4 w-auto mx-auto my-16">
    <div class="flex flex-wrap justify-between items-stretch">
      <Card v-for="post in postList" :post="post" :key="post.id" />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Card from '@/components/Card'

export default {
  name: 'Posts',
  components: {
    Card
  },
  data() {
    return {
      isActive: true
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
