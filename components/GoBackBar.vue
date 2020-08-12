<template>
    <div>
        <nuxt-link :to="url" as="a">
            <svg>
                <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
            </svg>
            <span>{{ text }}</span>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['url', 'text'],
}
</script>

<style scoped>
div {
    padding: var(--spacing-medium);
    background-color: var(--color-grey-light-1);
    margin: var(--spacing-medium) 0;
    border-radius: 3px;
}

svg {
    height: var(--font-medium);
    width: var(--font-medium);
    fill: var(--color-grey-dark-5);
}

a {
    display: flex;
}

span {
    position: relative;
    top: 1.5px;
    margin-left: var(--spacing-small);
}
</style>
