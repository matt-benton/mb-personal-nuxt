<template>
    <div class="project-list-images">
        <cld-image
            v-for="(image, index) in images"
            :key="index"
            cloudName="dheway9t7"
            :publicId="image.cloudinaryPublicId"
            responsive="width"
        />
    </div>
</template>

<script>
import { cldImage } from 'cloudinary-vue'

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
    max-width: 100%;
    max-height: 350px;
}
</style>
