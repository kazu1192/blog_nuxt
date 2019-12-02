<template>
  <nav>
    <div class="max-w-xl mx-auto">
      <div class="flex items-center justify-between flex-wrap bg-green-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight" href="#">{{
            siteName
          }}</span>
        </div>
        <div class="w-full block lg:flex lg:items-center lg:w-auto">
          <div v-for="item in contents" :key="item.id">
            <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              {{ item }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      siteName: 'kazu1192.com',
      contents: ['Info', 'Blog', 'Docs']
    }
  }
}
</script>
