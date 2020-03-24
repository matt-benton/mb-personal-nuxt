<template>
    <div class="services__card">
        <div class="services__card--icon"></div>
        <div class="services__card--header">{{ title }}</div>
        <!-- <div class="services__card--text">{{ body }}</div> -->
    </div>
</template>

<script>
export default {
    props: ['title', 'body']
}
</script>