<template>
  <div id="app">
    <div class="header primary">
      <div class="title">
        {{ title }}
      </div>
    </div>
    <div class="container">
      <div v-for="post in postList" :key="post.id" class="card">
        <div class="imageBx">
          <img :src="src" class="img" />
        </div>
        <div class="contentBx">
          <h2 class="content-title">{{ post.title }}</h2>
          <p class="content-text">{{ post.preview }} ...</p>
          <router-link class="content-read" to="/blog/post">
            {{ readmore }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="footer">
      <nuxt-link class="more" to="#">
        {{ pagemore }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Posts',
  data() {
    return {
      title: "KAZU'S BLOG",
      pagemore: 'PAGE MORE...',
      readmore: 'READ MORE'
    }
  },
  computed: {
    ...mapState('posts', ['postList']),
    src: (val) => {
      return require(val)
    }
  },
  mounted() {
    this.getPostList()
  },
  methods: {
    ...mapActions('posts', ['getPostList'])
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin: 3em auto;
  color: RGB(232, 240, 222);
}

.title {
  text-align: left;
  font-size: 8em;
}

.category {
  text-align: left;
  font-size: 2em;
}

.container {
  position: relative;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 100px 0;
}

.card:nth-child(odd) {
  flex-direction: row;
}

.card:nth-child(even) {
  flex-direction: row-reverse;
  text-align: right;
}

.card:nth-child(even) .imageBx {
  left: -25px;
}

.imageBx {
  position: relative;
  left: 25px;
  width: 500px;
  height: 400px;
  z-index: 1;
}

.imageBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: RGB(232, 240, 222);
}

.contentBx:before {
  content: '';
  position: absolute;
  top: -50px;
  bottom: -50px;
  left: 0;
  right: 0;
  background: RGB(011, 054, 097);
  z-index: -1;
}

.contentBx {
  position: relative;
  right: 25px;
  width: 500px;
  height: 400px;
  display: box;
  justify-content: center;
  align-items: center;
  padding: 60px 60px 20px 100px;
  background: RGB(011, 054, 097);
}

.card:nth-child(even) .contentBx {
  right: -25px;
  padding: 60px 100px 20px 60px;
}

.content-title {
  font-size: 2em;
  color: RGB(232, 240, 222);
}

.content-text {
  margin-top: 10px;
  color: RGB(232, 240, 222);
}

.content-read {
  display: inline-block;
  margin-top: 15px;
  color: RGB(232, 240, 222);
  text-decoration: none;
  padding: 10px;
  border: 1px solid RGB(232, 240, 222);
}

.more {
  font-size: 1.8em;
  margin: 25px;
  color: RGB(011, 054, 097);
}

.footer {
  height: 100px;
}

@media (max-width: 1000px) {
  .header {
    font-size: 75%;
  }

  .card {
    flex-direction: column;
    max-width: 350px;
    margin: 25px 25px;
  }

  .imageBx {
    width: 100%;
    height: 250px;
    left: 0;
  }

  .contentBx {
    width: 100%;
    height: auto;
    right: 0;
    padding: 30px;
    text-align: center;
  }

  .contentBx:before {
    top: 0;
    bottom: 0;
  }

  .card:nth-child(even) .imageBx {
    left: 0px;
  }

  .card:nth-child(even) .contentBx {
    right: 0px;
    padding: 30px;
  }
}
</style>
