<template>
  <div class="service-card">
    <div>
      <div class="service-icon">
        <slot></slot>
      </div>
    </div>
    <div>
      <h3>{{ title }}</h3>
      <ul>
        <li v-for="li in listItems" :key="li">{{ li }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'listItems'],
}
</script>

<style scoped>
.service-card {
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content;
}

.service-icon {
  display: flex;
  align-items: center;
  padding: var(--sp-4);
  background: linear-gradient(-45deg, var(--color-pink-dark), var(--color-pink));
  border-radius: 72px;
  color: #fff;
}

.service-card > div:last-child {
  padding: 0 var(--sp-5);
}

.service-card :deep(svg) {
  height: var(--text-5xl);
  width: var(--text-5xl);
}

ul {
  list-style-type: disc;
  padding-left: var(--sp-4);
}
</style>
