<template>
    <div>
        <div class="project-image-grid">
            <img
                v-lazy="`${selectedImage.src}`"
                :alt="`${projectTitle} large screen shot`"
                class="project-large-image"
                @click="showModal(selectedImage)"
            />
            <div class="project-thumbnails">
                <div v-for="(image, index) in images" :key="index" @click="selectImage(image)">
                    <cldImage
                        class="thumbnail-image"
                        :publicId="image.cloudinaryPublicId"
                        height="70"
                        width="70"
                        crop="fill"
                        :alt="`${projectTitle} screen shot thumbnail`"
                    />
                </div>
            </div>
        </div>
        <Modal
            :hidden="modal.hidden"
            :image="selectedImage"
            @modal-closed="hideModal"
            @next-image="nextImage"
            @prev-image="prevImage"
        />
    </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
    data() {
        return {
            selectedImage: this.images[0],
            modal: {
                hidden: true,
            },
        }
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image
        },
        largeImageClicked() {
            this.$emit('large-image-clicked', this.selectedImage)
        },
        showModal(image) {
            this.modal.hidden = false
            this.modal.image = image
        },
        hideModal() {
            this.modal.hidden = true
        },
        nextImage() {
            const index = this.images.findIndex(image => image.src === this.selectedImage.src)

            if (index + 1 === this.images.length) {
                this.selectImage(this.images[0])
            } else {
                this.selectImage(this.images[index + 1])
            }
        },
        prevImage() {
            const index = this.images.findIndex(image => image.src === this.selectedImage.src)

            if (index === 0) {
                this.selectImage(this.images[this.images.length - 1])
            } else {
                this.selectImage(this.images[index - 1])
            }
        },
    },
    props: ['images', 'projectTitle'],
    components: {
        Modal,
    },
}
</script>

<style>
.project-image-grid {
    display: grid;
    grid-template-rows: auto 1fr;
}

.project-large-image {
    max-width: 100%;
    height: 24rem;
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
