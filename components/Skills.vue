<template>
  <section id="skills">
    <h3 class="section-header">Skills</h3>
    <div class="skills-body">
      <div class="skills-caption">
        <p>
          I use the following technology to build web applications. To see posts about these topics
          and more check out my <nuxt-link to="/posts">blog</nuxt-link>.
        </p>
      </div>
      <div class="skills-grid">
        <div class="skills-grid-item">
          <img src="/img/logos/html-5-logo-png-transparent-min.png" alt="html5 logo" />
          html
        </div>
        <div class="skills-grid-item">
          <img src="/img/logos/css-3-logo-png-transparent-min.png" alt="css3 logo" />
          css
        </div>
        <div class="skills-grid-item">
          <img src="/img/logos/javascript-logo-png-transparent-min.png" alt="javascript logo" />
          javascript
        </div>
        <div class="skills-grid-item">
          <img src="/img/logos/vue-9-logo-png-transparent-min.png" alt="vue logo" />
          vue
        </div>
        <div class="skills-grid-item">
          <img src="/img/logos/php-1-logo-png-transparent-min.png" alt="php logo" />
          php
        </div>
        <div class="skills-grid-item">
          <img src="/img/logos/mysql-5-logo-png-transparent-min.png" alt="mysql logo" />
          mysql
        </div>
        <div class="skills-grid-item">
          <img src="/img/logos/laravel-1-logo-png-transparent-min.png" alt="laravel logo" />
          laravel
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
section {
  font-size: var(--text-lg);
  line-height: var(--line-height-medium);
}

.skills-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}

.skills-caption {
  display: flex;
  align-items: center;
  font-size: var(--text-xl);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-3);
}

.skills-grid-item {
  padding: var(--sp-2) var(--sp-3);
  display: flex;
  justify-content: center;
  border-radius: 45px;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom right, var(--color-blue), var(--color-blue-dark));
}

img {
  max-height: var(--text-2xl);
  max-width: var(--text-2xl);
  margin-right: var(--sp-4);
  border: none;
}

@media (max-width: 768px) {
  .skills-body {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
