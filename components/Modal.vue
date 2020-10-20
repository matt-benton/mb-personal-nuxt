<template>
    <section class="modal" :class="{ close: hidden }">
        <div class="modal-image-container">
            <img
                :src="`${image.src ? image.src : ''}`"
                alt="Full size project pop up image"
                class="full-screen-image"
            />
            <button class="modal-button" id="prev-image-button" @click.prevent="prevImage">
                <svg viewBox="0 0 24 24">
                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                </svg>
            </button>
            <button class="btn modal-button" id="next-image-button" @click.prevent="nextImage">
                <svg viewBox="0 0 24 24">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
            </button>
        </div>
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

<style scoped>
.modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-image-container {
    display: flex;
    align-items: center;
    position: relative;
    width: 90%;
    height: 90%;
}

.full-screen-image {
    border-radius: 3px;
}

.modal-button {
    border-radius: 50%;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    opacity: 0.6;
    background-color: var(--color-grey-light-3);
    transition: opacity 0.2s;
}

.modal-button:hover {
    opacity: 0.9;
}

.modal-button > svg {
    height: 48px;
    width: 48px;
    fill: var(--color-grey-dark-1);
}

#prev-image-button {
    position: absolute;
    left: 8px;
    top: 47%;
}

#next-image-button {
    position: absolute;
    right: 8px;
    top: 47%;
}

.close {
    display: none;
}
</style>
