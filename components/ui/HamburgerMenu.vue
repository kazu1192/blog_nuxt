<template>
  <div>
    <transition>
      <nav :class="{ open: isOpen }" class="global-nav">
        <div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </transition>
    <div @click="toggleOpenClass" class="nav-toggle">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleOpenClass() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.global-nav {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  color: #fff;
  position: fixed;
  z-index: 1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  font-size: 29px;
  opacity: 0;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}

.open {
  visibility: visible;
  opacity: 1;
}

.nav-toggle {
  position: fixed;
  top: 25px;
  right: 25px;
  height: 32px;
  cursor: pointer;
  z-index: 2;

  > div {
    position: relative;
    width: 36px;
  }

  span {
    width: 100%;
    height: 1px;
    left: 0;
    display: block;
    background: #fff;
    position: absolute;
    transition: transform 0.6s ease-in-out, top 0.5s ease;

    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 14px;
    }
    &:nth-child(3) {
      top: 28px;
    }
  }

  &:hover span:nth-child(1) {
    top: 4px;
  }
  &:hover span:nth-child(3) {
    top: 23px;
  }
}
</style>
