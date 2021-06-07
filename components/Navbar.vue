<template>
  <nav>
    <div>
      <nuxt-link :to="'/'" as="a">mattbenton.io</nuxt-link>
    </div>
    <ul>
      <li><nuxt-link :to="'/#services'" as="a">Services</nuxt-link></li>
      <li><nuxt-link :to="'/#work'" as="a">Projects</nuxt-link></li>
      <li><nuxt-link :to="'/posts'" as="a">Blog</nuxt-link></li>
      <li><nuxt-link :to="'/#about'">About</nuxt-link></li>
      <li><nuxt-link :to="'/#footer'">Contact</nuxt-link></li>
    </ul>
  </nav>
</template>

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

ul {
  display: flex;
}

ul li {
  padding-left: var(--sp-5);
  text-align: center;
}

a {
  color: #fff;
}

a:hover {
  font-weight: 700;
}
</style>
