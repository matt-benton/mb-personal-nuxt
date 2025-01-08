<template>
  <div>
    <NuxtLink v-if="prev" :to="prev._path">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="prev-icon"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="brief-title">{{
        prev.title.length > 35 ? prev.title.substring(0, 35) + '...' : prev.title
      }}</span>
      <span class="full-title">
        {{ prev.title.length > 35 ? prev.title.substring(0, 35) + '...' : prev.title }}
      </span>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink v-if="next" :to="next._path">
      <span class="full-title">
        {{ next.title.length > 35 ? next.title.substring(0, 35) + '...' : next.title }}
      </span>
      <span class="brief-title">{{
        next.title.length > 35 ? next.title.substring(0, 35) + '...' : next.title
      }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="next-icon"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </NuxtLink>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}

a:first-of-type {
  margin-right: var(--sp-1);
}

a:last-of-type {
  margin-left: var(--sp-1);
}

.prev-icon {
  margin-right: var(--sp-1);
}

.next-icon {
  margin-left: var(--sp-1);
}

a > span {
  white-space: nowrap;
  overflow: hidden;
}

a:hover {
  text-decoration: underline;
}

svg {
  height: var(--text-sm);
  width: var(--text-sm);
}

.full-title {
  display: inline;
}

.brief-title {
  display: none;
}

@media (max-width: 1024px) {
  .full-title {
    display: none;
  }

  .brief-title {
    display: inline;
  }
}

@media (max-width: 768px) {
  div {
    flex-direction: column;
    align-items: center;
  }

  a {
    width: 100%;
    justify-content: center;
  }

  a:first-of-type {
    margin-right: 0;
    margin-bottom: var(--sp-1);
  }

  a:last-of-type {
    margin-left: 0;
  }
}
</style>
