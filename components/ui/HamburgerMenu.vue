<template>
  <div>
    <div :class="{ open: isOpen }" @click="toggleOpenClass">
      <div class="nav-toggle">
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <transition>
      <nav :class="{ open: isOpen }">
        <div class="global-nav">
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
@import '@/assets/css/custom.scss';

.global-nav {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  color: #fff;
  z-index: 2;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  font-size: 29px;
  opacity: 0;
  transition: opacity 0.6s ease, visibility 0.6s ease;

  a {
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 10px 0;
    transition: color 0.6s ease;

    &:hover {
      color: #666;
    }
  }

  ul {
    list-style: none;
  }
}

.open {
  overflow: hidden;

  .global-nav {
    visibility: visible;
    opacity: 1;
  }

  .global-nav li {
    opacity: 1;
    transform: translateX(0);
    transition: transform 1s ease, opacity 0.9s ease;
  }
}

.nav-toggle {
  position: fixed;
  top: 25px;
  right: 25px;
  height: 32px;
  cursor: pointer;

  > div {
    position: relative;
    width: 36px;
  }

  span {
    width: 100%;
    height: 1px;
    left: 0;
    display: block;
    background: $moss-green;
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

.open {
  .nav-toggle span {
    background: #fff;

    &:nth-child(1) {
      top: 15px;
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      top: 15px;
      width: 0;
      left: 50%;
    }
    &:nth-child(3) {
      top: 15px;
      transform: rotate(-45deg);
    }
  }
}

.nav-toggle {
  z-index: 3;
}
</style>
