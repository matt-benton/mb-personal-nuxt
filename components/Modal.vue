<template>
    <section class="modal" :class="{ close: hidden }" @click="close($event)">
        <img :src="`${image.src}`" alt="Full size project pop up image" class="full-screen-image" />
    </section>
</template>

<script>
export default {
    props: ['hidden', 'image'],
    methods: {
        close(event) {
            // close the modal if the user clicks outside of the image
            if (event.target.tagName !== 'IMG') {
                this.$emit('modal-closed')
            }
        },
    },
}
</script>
