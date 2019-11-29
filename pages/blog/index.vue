<template>
  <div id="app">
    <div class="header primary">
      <div class="title">
        {{ title }}
      </div>
    </div>
    <div class="container">
      <div v-for="item in contents" :key="item.id" class="container-card">
        <div class="container-card-imageBx">
          <img v-bind:src="item.img_src" class="img" />
        </div>
        <div class="container-card-contentBx">
          <div class="content">
            <div class="content-title">
              {{ item.title }}
            </div>
            <div class="content-text">
              {{ item.text }}
            </div>
            <nuxt-link class="content-read" to="/blog/post">
              {{ readmore }}
            </nuxt-link>
          </div>
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
export default {
  data() {
    return {
      title: "KAZU'S BLOG",
      contents: [
        {
          id: 1,
          img_src: require('../../assets/image1.jpeg'),
          title: 'What is Lorem Ipsum?',
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
        },
        {
          id: 2,
          img_src: require('../../assets/image2.jpeg'),
          title: 'What is Lorem Ipsum?',
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
        },
        {
          id: 3,
          img_src: require('../../assets/image3.jpeg'),
          title: 'What is Lorem Ipsum?',
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
        },
        {
          id: 4,
          img_src: require('../../assets/image4.jpeg'),
          title: 'What is Lorem Ipsum?',
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
        }
      ],
      readmore: 'READ MORE',
      pagemore: 'MORE PAGE...'
    }
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

.container-card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 100px 0;
}

.container-card:nth-child(odd) {
  flex-direction: row;
}

.container-card:nth-child(even) {
  flex-direction: row-reverse;
  text-align: right;
}

.container-card-imageBx {
  position: relative;
  left: 25px;
  width: 500px;
  height: 400px;
  z-index: 1;
}

.container-card:nth-child(even) .container-card-imageBx {
  left: -25px;
}

.img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: RGB(232, 240, 222);
}

.container-card-contentBx {
  position: relative;
  right: 25px;
  width: 500px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 60px 20px 100px;
  background: RGB(011, 054, 097);
}

.container-card:nth-child(even) .container-card-contentBx {
  right: -25px;
  padding: 20px 100px 20px 60px;
}

.container-card-contentBx:before {
  content: '';
  position: absolute;
  top: -50px;
  bottom: -50px;
  left: 0;
  right: 0;
  background: RGB(011, 054, 097);
  z-index: -1;
}

.content-title {
  font-size: 2em;
  color: RGB(232, 240, 222);
}

.content-text {
  font-size: 1em;
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

  .container-card {
    flex-direction: column;
    max-width: 350px;
    margin: 25px 25px;
  }

  .container-card-imageBx {
    width: 100%;
    height: 250px;
    left: 0;
  }

  .container-card-contentBx {
    width: 100%;
    height: auto;
    right: 0;
    padding: 30px;
    text-align: center;
  }

  .container-card-contentBx:before {
    top: 0;
    bottom: 0;
  }

  .container-card:nth-child(even) .container-card-imageBx {
    left: 0px;
  }

  .container-card:nth-child(even) .container-card-contentBx {
    right: 0px;
    padding: 30px;
  }
}
</style>
