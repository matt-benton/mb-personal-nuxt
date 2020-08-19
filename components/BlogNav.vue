<template>
    <ul>
        <li><nuxt-link :to="'/'" as="a">mattbenton.io</nuxt-link></li>
        <li><nuxt-link :to="'/posts'" as="a">Blog</nuxt-link></li>
    </ul>
</template>

<style scoped>
ul {
    display: flex;
    justify-content: end;
}

ul li {
    margin-left: var(--spacing-large);
    padding: var(--spacing-medium) 0;
}
</style>
