<template>
  <header id="header">
    <div class="hero">
      <h1 class="h1">
        Hi, my name is
        <b>Matt Benton</b> and I'm a <a href="http://www.laravel.com" class="laravel-link" target="_blank" rel="noreferrer">
          Laravel
        </a> developer from Birmingham, Alabama
      </h1>
      <div class="dot-row">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <h2 class="h2">tested software, user-friendly design, thoughtful code <span class="pink-text">since 2016</span></h2>
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
#header {
  display: grid;
  grid-template-rows: min-content 1fr;
  padding: var(--sp-9) 0 var(--sp-7) 0;
}

.hero {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.h1 {
  font-size: var(--text-5xl);
  font-weight: 400;
  margin-bottom: var(--sp-7);
  line-height: 1.3;
  text-align: center;
}

.h2 {
  font-size: var(--text-3xl);
  color: var(--color-grey-light-4);
  font-weight: 300;
  margin-bottom: var(--sp-5);
  line-height: 1.2;
  text-align: center;
}

.pink-text {
  color: var(--color-pink);
}

.dot-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--sp-7);
}

.dot {
  height: var(--text-lg);
  width: var(--text-lg);
  border-radius: 35px;
  display: inline-block;
  margin: var(--sp-2);
  background-color: var(--color-blue-dark);
  opacity: .2;
}

.dot:nth-of-type(2) {
  height: var(--text-2xl);
}

.dot:nth-of-type(3) {
  height: var(--text-3xl);
}

.dot:nth-of-type(4) {
  height: var(--text-4xl);
}

.dot:nth-of-type(5) {
  height: var(--text-3xl);
}

.dot:nth-of-type(6) {
  height: var(--text-2xl);
}

.laravel-link {
  color: var(--color-laravel-red);
}

@media (max-width: 640px) {
  #header {
    padding-top: var(--sp-5);
    padding-bottom: var(--sp-5);
  }

  .h1 {
    font-size: var(--text-3xl);
  }

  .h2 {
    font-size: var(--text-xl);
  }
}
</style>
