<template>
  <header class="bg-accent">
    <div class="w-full mx-auto p-10">
      <p
        class="mx-auto text-5xl font-bold text-center text-white animated fadeIn"
      >
        <nuxt-link to="/">
          {{ title }}
        </nuxt-link>
      </p>
      <p class="text-xl text-center text-white my-4 animated fadeIn delay-1s">
        {{ subtitle }}
      </p>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: 'かずの雑記帳',
      subtitle:
        'This site will post articles on programming techniques, fighting games, and more'
    }
  }
}
</script>
