<template>
  <div>
    <div id="hamburger">
      <div @click="onVisiblity">
        <button-svg />
      </div>
    </div>

    <transition>
      <nav :style="{ visibility: visibility }" class="menu">
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
  </div>
</template>

<script>
import ButtonSvg from '@/assets/icons/navbutton.svg'

export default {
  components: {
    ButtonSvg
  },
  data() {
    return {
      isOpen: false,
      visibility: 'hidden'
    }
  },
  methods: {
    onVisiblity() {
      this.visibility = 'visibility'
    }
  }
}
</script>

<style lang="scss" scoped>
/* Show Menu */
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu > div {
  background: var(--overlay-color);
  border-radius: 50%;
  width: 200vw;
  height: 200vw;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: all 0.4s ease;
}

/* animated */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
