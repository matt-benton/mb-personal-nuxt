<template>
    <section class="modal" :class="{ close: hidden }">
        <img
            :src="`${image.src ? image.src : ''}`"
            alt="Full size project pop up image"
            class="full-screen-image"
        />
        <button @click.prevent="prevImage">Prev Image</button>
        <button @click.prevent="nextImage">Next Image</button>
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
        nextImage() {
            this.$emit('next-image')
        },
        prevImage() {
            this.$emit('prev-image')
        },
    },
}
</script>
