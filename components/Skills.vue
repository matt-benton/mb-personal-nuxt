<template>
  <section id="skills">
    <h4 class="section-header">Skills</h4>
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

.skills-grid {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.skills-grid-item {
  padding: var(--sp-2) var(--sp-4);
  margin: var(--sp-2);
  border-radius: 5px;
}

img {
  max-height: var(--text-2xl);
  max-width: var(--text-2xl);
  margin-right: var(--sp-3);
  border: none;
}
</style>
