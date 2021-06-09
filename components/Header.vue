<template>
  <header>
    <div class="hero">
      <h1>
        Hi, my name is
        <b>Matt Benton</b> and I'm a <b>web developer</b> from Birmingham, Alabama
      </h1>
      <h2>
        I create web applications with clean interfaces, intuitive user experiences, and
        reliability.
      </h2>
      <div class="button-container">
        <a href="#work" class="btn" @click.prevent="scrollTo('#work')">Check Out My Portfolio</a>
        <nuxt-link class="btn" to="/posts">Read My Blog</nuxt-link>
        <a href="#skills" class="btn" @click.prevent="scrollTo('#skills')">See My Skills</a>
        <a href="#footer" class="btn" @click.prevent="scrollTo('#footer')">Contact Me</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
header {
  display: grid;
  grid-template-rows: min-content 1fr;
  padding: var(--sp-9) 0 var(--sp-7) 0;
}

.hero {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

header h1 {
  font-size: var(--text-5xl);
  font-weight: 400;
  margin-bottom: var(--sp-5);
  line-height: 1.3;
}

header h2 {
  font-size: var(--text-3xl);
  color: var(--color-grey-light-4);
  font-weight: 300;
  margin-bottom: var(--sp-5);
  line-height: 1.2;
}

.btn {
  display: inline-block;
  text-align: center;
  border: 2px solid var(--color-blue);
  color: var(--color-blue);
  font-size: var(--text-lg);
  padding: var(--sp-4) var(--sp-5);
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.3s, border-color 0.1s;
}

.btn:hover {
  background-color: var(--color-pink-dark);
  border-color: var(--color-grey-dark-1);
  color: var(--color-grey-light-1);
}

@media (max-width: 1024px) {
  .btn {
    margin-bottom: var(--sp-2);
  }
}

@media (max-width: 640px) {
  header {
    padding-top: var(--sp-5);
    padding-bottom: var(--sp-5);
  }

  header h1 {
    font-size: var(--text-3xl);
  }

  header h2 {
    font-size: var(--text-xl);
  }

  .btn {
    width: 100%;
    padding: var(--sp-3);
  }
}
</style>
