<template>
    <div class="project-list-images">
        <img
            class="project-list-image"
            v-for="(image, index) in images"
            :key="index"
            v-lazy="`${image}-lg.png`"
            :alt="`${projectTitle} screen shot`"
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
    max-width: 100%;
    max-height: 350px;
}
</style>
