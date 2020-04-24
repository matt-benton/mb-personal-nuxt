<template>
    <div class="project-image-grid">
        <img
            v-lazy="`${selectedImage.src}`"
            :alt="`${projectTitle} large screen shot`"
            class="project-large-image"
            @click="largeImageClicked"
        />
        <div class="project-thumbnails">
            <div v-for="(image, index) in images" :key="index" @click="selectImage(image)">
                <cldImage
                    class="thumbnail-image"
                    :publicId="image.cloudinaryPublicId"
                    height="100"
                    width="100"
                    crop="fill"
                    :alt="`${projectTitle} screen shot thumbnail`"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedImage: this.images[0],
        }
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image
        },
        largeImageClicked() {
            this.$emit('large-image-clicked', this.selectedImage)
        },
    },
    props: ['images', 'projectTitle'],
}
</script>

<style>
.project-image-grid {
    display: grid;
    grid-template-rows: auto 1fr;
}

.project-large-image {
    max-width: 100%;
    height: 20rem;
    border-radius: 2px;
    cursor: pointer;
    justify-self: center;
    box-shadow: 0 2px 10px var(--color-grey-dark-1);
}

.project-thumbnails {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 8px;
}

.thumbnail-image {
    margin: 3px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 2px 10px var(--color-grey-dark-2);
}
</style>
