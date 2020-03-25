<template>
    <div class="project-image-grid">
        <img 
            v-lazy="`${selectedImage}-lg.png`" 
            :alt="`${projectTitle} large screen shot`" 
            class="project-large-image"
            @click="largeImageClicked"
        />
        <div class="project-thumbnails">
            <div class="project-thumbnail" 
                v-for="(image, index) in images" 
                :key="index"
                @click="selectImage(image)">
                <img v-lazy="`${image}-sm.png`" :alt="`${projectTitle} screen shot thumbnail`" class="thumbnail-image">
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
    max-height: 20rem;
    border-radius: 2px;
    cursor: pointer;
    justify-self: center;
}

.project-thumbnails {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.project-thumbnail {
    position: relative;
    height: 5rem;
    width: 5rem;
    overflow: hidden;
    cursor: pointer;
    margin: var(--spacing-small);
    border-radius: 5px;
}

.thumbnail-image {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 100%;
    width: auto;
    transform: translate(-50%, -50%);
}

@media (max-width: 768px) {
    .project-thumbnail {
        max-height: 8rem;
    }
}
        

</style>