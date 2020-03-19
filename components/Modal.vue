<template>
    <section class="modal" :class="{ 'close': hidden }">
        <img :src="`${image}-lg.png`" alt="Full size project pop up image" class="full-screen-image">
    </section>
</template>

<script>
    export default {
        props: ['hidden', 'image']
    }
</script>