<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <div class="title primary">
          KAZU'S BLOG
        </div>
        <div class="subtitle primary">
          <div class="category">CATEGORY1</div>
          <div class="category">CATEGORY2</div>
          <div class="category">CATEGORY3</div>
        </div>
      </div>
      <div class="top-message primary">
        WELCOME MESSAGE
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
        <div class="card card-primary">
          <div class="card-image" />
          <p>CARD TITLE</p>
          <p>CARD CONTENTS</p>
        </div>
      </div>
      <div class="more">
        MORE PAGE...
      </div>
    </div>
    <div class="footer fotter-primary" />
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
  width: 60%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.header {
  height: 12em;
  margin: 3em auto;
}

.title {
  text-align: left;
  font-size: 8em;
}

.category {
  text-align: right;
  font-size: 2em;
}

.primary {
  color: RGB(232, 240, 222);
}

.top-message {
  font-size: 4em;
  margin: 3em auto;
}

.cards {
  width: 100%;
}

.card {
  height: 12em;
  width: 30%;
  margin: 0.5em;
  padding: 0.2em;
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
  width: 90%;
  margin: 0.6em auto;
  background-color: RGB(232, 240, 222);
}

.more {
  font-size: 1.5em;
  margin: 1em auto 6em;
  color: RGB(011, 054, 097);
}

.footer {
  width: 100%;
  height: 4em;
  margin-top: 3em;
  padding-top: 1.5em;
  font-size: 1.5em;
}

.footer-info {
  width: 60%;
  margin: 0 auto;
  text-align: right;
}

.fotter-primary {
  color: RGB(232, 240, 222);
  background-color: RGB(011, 054, 097);
}
</style>
