<template>
  <nav>
    <div>
      <nuxt-link :to="'/'" as="a">mattbenton.io</nuxt-link>
    </div>
    <ul class="nav-links">
      <li>
        <nuxt-link :to="'/#services'" as="a">Services</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/#work'" as="a">Projects</nuxt-link>
      </li>
      <li><nuxt-link :to="'/posts'" as="a">Blog</nuxt-link></li>
      <li><nuxt-link :to="'/#about'">About</nuxt-link></li>
      <li><nuxt-link :to="'/#footer'">Contact</nuxt-link></li>
    </ul>
    <svg
      class="menu-icon"
      @click="mobileMenuVisible = true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
    <transition name="slide">
      <div class="mobile-menu" v-if="mobileMenuVisible">
        <div>
          <svg
            @click="mobileMenuVisible = false"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul class="mobile-links">
          <li @click="mobileMenuVisible = false">
            <nuxt-link :to="'/#services'" as="a">Services</nuxt-link>
          </li>
          <li @click="mobileMenuVisible = false">
            <nuxt-link :to="'/#work'" as="a">Projects</nuxt-link>
          </li>
          <li><nuxt-link :to="'/posts'" as="a">Blog</nuxt-link></li>
          <li @click="mobileMenuVisible = false">
            <nuxt-link :to="'/#about'" @click="mobileMenuVisible = false">About</nuxt-link>
          </li>
          <li @click="mobileMenuVisible = false">
            <nuxt-link :to="'/#footer'" @click="mobileMenuVisible = false">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuVisible: false,
    }
  },
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 5555;
  background: var(--color-grey-dark-2);
  font-weight: 400;
  font-size: var(--text-base);
  padding: var(--sp-2) var(--sp-6);
}

.nav-links {
  display: flex;
}

.nav-links li {
  padding-left: var(--sp-5);
  text-align: center;
}

a {
  color: #fff;
}

a:hover {
  color: var(--color-blue);
}

.menu-icon {
  display: none;
}

svg {
  width: 24px;
  height: 24px;
}

.mobile-menu {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: var(--color-blue-dark);
  width: 60vw;
  height: 100vh;
  padding: var(--sp-2) var(--sp-3) var(--sp-2) var(--sp-7);
}

.mobile-menu > div:first-child {
  display: flex;
  justify-content: flex-end;
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
}

@media (max-width: 640px) {
  nav {
    padding-left: var(--sp-3);
    padding-right: var(--sp-3);
  }
  .nav-links {
    display: none;
  }

  .menu-icon {
    display: block;
  }
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}
.slide-enter,
.slide-leave-active {
  transform: translateX(100%);
}
</style>
