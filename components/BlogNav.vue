<template>
  <ul>
    <li><nuxt-link :to="'/'" as="a">mattbenton.io</nuxt-link></li>
    <li><nuxt-link :to="'/posts'" as="a">Blog</nuxt-link></li>
  </ul>
</template>

<style scoped>
ul {
  position: sticky;
  top: 0;
  z-index: 5555;
  display: flex;
  justify-content: center;
  background: linear-gradient(to left, var(--color-blue) 10%, 30%, var(--color-blue-dark) 90%);
  font-size: var(--text-base);
  font-weight: 400;
}

ul li {
  width: 120px;
  margin: 0 var(--sp-5);
  padding: var(--sp-2) 0;
  text-align: center;
}

ul li a {
  color: #fff;
}

ul li a:hover {
  font-weight: 700;
}
</style>
