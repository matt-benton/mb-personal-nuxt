<template>
  <header>
    <div class="section-container">
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
          <a href="#work" @click.prevent="scrollTo('#work')"
            ><button class="btn">Check Out My Portfolio</button></a
          >
          <nuxt-link to="/posts"><button class="btn">Read My Blog</button></nuxt-link>
          <a href="#skills" @click.prevent="scrollTo('#skills')"
            ><button class="btn">See My Skills</button></a
          >
          <a href="#footer" @click.prevent="scrollTo('#footer')"
            ><button class="btn">Contact Me</button></a
          >
        </div>
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
}

.hero {
  display: flex;
  flex-direction: column;
  padding: var(--sp-9) 0 var(--sp-5) 0;
  max-width: 750px;
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
  background-color: var(--color-blue-dark);
  color: white;
  font-size: var(--text-lg);
  padding: var(--sp-4) var(--sp-5);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 5px;
}

.btn:hover {
  background-color: var(--color-pink-dark);
}

@media (max-width: 1024px) {
  .hero {
    padding: var(--sp-6) 3%;
  }

  .btn {
    width: 100%;
    margin-bottom: var(--sp-2);
  }
}

@media (max-width: 768px) {
  header {
    background-image: url('/img/shape-bg-768.svg');
  }
}

@media (max-width: 640px) {
  header h1 {
    font-size: var(--text-4xl);
  }

  header h2 {
    font-size: var(--text-2xl);
  }

  .hero {
    padding: var(--sp-8) 5%;
  }
}
</style>
