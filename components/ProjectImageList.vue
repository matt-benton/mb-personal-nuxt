<template>
  <div class="project-list-images">
    <CldImage
      v-for="(image, index) in images"
      :key="index"
      :src="image.cloudinaryPublicId"
      :alt="image.alt"
      width="auto"
      height="auto"
      responsive="width"
      class="project-list-image"
    />
  </div>
</template>

<script>

export default {
  props: ['images', 'projectTitle'],
}
</script>

<style>
.project-list-images {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-items: center;
}

.project-list-image {
  box-shadow: 0 2px 10px var(--color-grey-dark-2);
}
</style>
