<template>
  <section class="modal" :class="{ close: hidden }">
    <img
      :src="`${image.src ? image.src : ''}`"
      alt="Full size project pop up image"
      class="full-screen-image"
    />
    <button class="modal-button close-button" @click.prevent="$emit('modal-closed')">
      <svg viewBox="0 0 24 24">
        <path
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        />
      </svg>
    </button>
    <button class="modal-button prev-image-button" @click.prevent="prevImage">
      <svg viewBox="0 0 24 24">
        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
      </svg>
    </button>
    <button class="btn modal-button next-image-button" @click.prevent="nextImage">
      <svg viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  </section>
</template>

<script>
export default {
  props: ['hidden', 'image'],
  methods: {
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
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-image-container {
  display: flex;
  align-items: center;
  position: relative;
}

.full-screen-image {
  border-radius: 3px;
  max-height: 90%;
  max-width: 90%;
}

.modal-button {
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  opacity: 0.8;
  background-color: var(--color-grey-light-3);
  transition: opacity 0.2s;
  cursor: pointer;
}

.modal-button:hover {
  opacity: 0.9;
}

.modal-button > svg {
  height: 48px;
  width: 48px;
  fill: var(--color-grey-dark-1);
}

.prev-image-button {
  position: absolute;
  left: 8px;
  top: 47%;
}

.next-image-button {
  position: absolute;
  right: 8px;
  top: 47%;
}

.close-button {
  position: absolute;
  top: 8px;
  right: 8px;
}

.close {
  display: none;
}
</style>
