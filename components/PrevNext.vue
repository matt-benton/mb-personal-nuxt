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
    margin: var(--spacing-larger) 0;
}

a {
    font-size: var(--font-extra-small);
    color: var(--color-blue-dark);
    background-color: var(--color-grey-light-1);
    border-radius: 10px;
    padding: var(--spacing-small);
}

a:first-of-type {
    margin-right: var(--spacing-small);
}

a:last-of-type {
    margin-left: var(--spacing-small);
}

a:hover {
    text-decoration: underline;
}
</style>
