<template>
    <ul>
        <li><nuxt-link :to="'/'" as="a">mattbenton.io</nuxt-link></li>
        <li><nuxt-link :to="'/posts'" as="a">Blog</nuxt-link></li>
    </ul>
</template>

<style scoped>
ul {
    display: flex;
    justify-content: center;
    background: linear-gradient(to left, var(--color-blue) 10%, 30%, var(--color-blue-dark) 90%);
}

ul li {
    width: 120px;
    margin: 0 var(--spacing-medium);
    padding: var(--spacing-medium) 0;
    text-align: center;
}

ul li a {
    color: #fff;
}

ul li a:hover {
    font-weight: 700;
}
</style>
