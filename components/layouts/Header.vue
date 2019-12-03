<template>
  <header>
    <div class="w-full mx-auto mt-4 p-6">
      <p class="text-5xl font-bold text-center text-white animated fadeIn">
        {{ title }}
      </p>
      <p
        class="text-xl text-left  md:text-center my-4 animated fadeIn delay-1s"
      >
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
