<template>
  <article>
    <h1
      class="text-6xl font-medium text-center leading-none tracking-wider"
    ></h1>
    <div class="pt-8">
      <img :src="image" class="m-auto" />
    </div>
    <div class="flex justify-between pt-8">
      <p>{{ prev }}</p>
      <p>{{ next }}</p>
    </div>
  </article>
</template>

<script></script>

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
