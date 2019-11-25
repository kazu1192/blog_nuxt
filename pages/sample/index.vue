<template>
  <div id="app">
    <div class="title">
      アプリ名
    </div>
    <input v-model="newItem" type="text" />
    <form v-on:submit.prevent>
      <button v-on:click="addItem">add</button>
    </form>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.item }}
    </li>
    <div class="subtitle">
      アプリ名
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: '',
      todos: []
    }
  },
  methods: {
    addItem() {
      const todo = {
        item: this.newItem
      }
      this.todos.push(todo)
    }
  }
}
</script>

<style>
.title {
  font-size: 3em;
}

.subtitle {
  font-size: 1.2em;
}
</style>
