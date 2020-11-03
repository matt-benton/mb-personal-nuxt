<template>
  <div>
    <NuxtLink v-if="prev" :to="`/posts/${prev.slug}`"> <- {{ prev.title }} </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink v-if="next" :to="`/posts/${next.slug}`"> {{ next.title }} -> </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
}

a {
  font-size: var(--text-xs);
  color: var(--color-blue);
  background-color: var(--color-grey-dark-4);
  border-radius: 15px;
  padding: var(--sp-1) var(--sp-3);
  line-height: 1.65;
}

a:first-of-type {
  margin-right: var(--sp-1);
}

a:last-of-type {
  margin-left: var(--sp-1);
}

a:hover {
  text-decoration: underline;
}
</style>
