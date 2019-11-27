<template>
  <div class="container">
    <div class="navbar">
      THIS IS NAVBAR
    </div>
    <div class="header">
      <div class="title title-primary">
        KAZU'S BLOG
      </div>
      <div class="subtitle subtitle-primary">
        THIS IS BLOG PAGE
      </div>
    </div>
    <div class="cards">
      <div class="card card-primary">
        <div class="card-image" />
        <p>CARD TITLE</p>
        <p>CARD CONTENTS</p>
      </div>
      <div class="card card-primary">
        <div class="card-image" />
        <p>CARD TITLE</p>
        <p>CARD CONTENTS</p>
      </div>
    </div>
    <div class="cards">
      <div class="card card-primary">
        <div class="card-image" />
        <p>CARD TITLE</p>
        <p>CARD CONTENTS</p>
      </div>
      <div class="card card-primary">
        <div class="card-image" />
        <p>CARD TITLE</p>
        <p>CARD CONTENTS</p>
      </div>
    </div>
    <div class="cards">
      <div class="card card-primary">
        <div class="card-image" />
        <p>CARD TITLE</p>
        <p>CARD CONTENTS</p>
      </div>
      <div class="card card-primary">
        <div class="card-image" />
        <p>CARD TITLE</p>
        <p>CARD CONTENTS</p>
      </div>
    </div>
    <div class="footer">
      THIS IS FOOTER
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

<style lang="scss">
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.navbar {
  padding-bottom: 2em;
}

.header {
  margin: 6em 0;
}

.title {
  font-size: 8em;
}

.title-primary {
  color: RGB(232, 240, 222);
}

.subtitle {
  font-size: 4em;
}

.subtitle-primary {
  color: RGB(232, 240, 222);
}

.cards {
  width: 100%;
}

.card {
  height: 14em;
  width: 45%;
  margin: 0.5em;
  padding: 0.5em;
  font-size: 2em;
  display: inline-block;
  vertical-align: middle;
}

.card-primary {
  color: RGB(011, 054, 097);
  border: medium solid RGB(011, 054, 097);
}

.card-image {
  height: 60%;
  width: 60%;
  margin: 0.8em auto;
  background-color: RGB(232, 240, 222);
}
</style>
