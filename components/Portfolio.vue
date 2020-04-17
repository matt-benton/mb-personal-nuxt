<template>
    <section class="work" id="work">
        <div class="section-container">
            <Project
                v-for="(project, index) in projectContent"
                :key="index"
                :index="index"
                :project="project"
                @large-image-clicked="largeImageClicked($event)"
            />
        </div>
    </section>
</template>

<script>
import Project from './Project.vue'
import { projects } from '~/projects'

export default {
    data() {
        return {
            projectContent: projects,
        }
    },
    components: {
        Project,
    },
    methods: {
        largeImageClicked(image) {
            this.$emit('large-project-image-clicked', image)
        },
    },
}
</script>

<style>
.work {
    background-color: var(--color-grey-dark-2);
    color: var(--color-grey-light-1);
    box-shadow: inset 0 5px 20px var(--color-grey-dark-3);
    z-index: 50;
    padding: var(--spacing-large) 0;
}

@media (max-width: 768px) {
    .work {
        padding: 0 0;
    }
}
</style>
