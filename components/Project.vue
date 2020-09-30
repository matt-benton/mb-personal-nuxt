<template>
    <div class="project">
        <div class="project-container project-container-image">
            <ProjectImageGrid
                :images="project.images"
                :project-title="project.title"
                @large-image-clicked="largeImageClicked($event)"
                v-if="windowWidth > 640"
            />
            <ProjectImageList
                v-else
                :images="project.images"
                :project-title="project.title"
            ></ProjectImageList>
        </div>
        <div class="project-container project-container-text">
            <h3 :class="`text--${highlightColor}`">
                {{ project.title }}
            </h3>
            <h4 :class="`text--${highlightColor}`">
                {{ project.subtitle }}
            </h4>
            <p v-for="(paragraph, index) in project.descriptionParagraphs" :key="index">
                {{ paragraph }}
            </p>
            <div class="project-links">
                <a
                    v-for="link in project.links"
                    :key="link.title"
                    :class="`text--${highlightColor}`"
                    :href="link.url"
                    target="_blank"
                    >{{ link.text }}</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import ProjectImageGrid from './ProjectImageGrid.vue'
import ProjectImageList from './ProjectImageList.vue'

export default {
    data() {
        return {
            windowWidth: 0,
        }
    },
    mounted() {
        this.windowWidth = window.innerWidth
    },
    computed: {
        highlightColor() {
            /**
             * the purpose of this function is to ensure that every 3rd
             * project is the same color
             */
            let i = this.index

            while (i - 3 > -1) {
                i = i - 3
            }

            switch (i) {
                case 0:
                    return 'pink'
                case 1:
                    return 'blue'
                case 2:
                    return 'green'
            }
        },
    },
    methods: {
        largeImageClicked(image) {
            this.$emit('large-image-clicked', image)
        },
    },
    props: ['index', 'project'],
    components: {
        ProjectImageGrid,
        ProjectImageList,
    },
}
</script>

<style scoped>
.project {
    display: flex;
    margin: var(--spacing-large) 0;
}

.project:last-of-type {
    border-bottom: none;
}

.project-container {
    display: flex;
    flex-direction: column;
    padding: var(--spacing-large);
    background-color: var(--color-grey-dark-3);
    flex: 1;
}

h3 {
    font-size: var(--text-3xl);
    margin-bottom: var(--spacing-small);
}

h4 {
    font-size: var(--text-xl);
    margin-bottom: var(--spacing-large);
}

p {
    font-size: var(--text-base);
    margin-bottom: var(--spacing-medium);
}

.project-links {
    font-size: var(--text-base);
    font-weight: 700;
    margin-top: var(--spacing-large);
    display: flex;
}

.project-links a {
    border-radius: 5px;
    padding: 10px 25px;
    background-color: var(--color-grey-dark-1);
    border: 0;
    cursor: pointer;
    margin-right: var(--spacing-small);
}

.project-links a:hover {
    background-color: var(--color-grey-dark-5);
}

@media (max-width: 1024px) {
    .project {
        flex-direction: column;
        margin: 0 0;
        border-bottom: 1px solid var(--color-grey-dark-3);
    }

    .project-container-text {
        order: 1;
    }

    .project-container-image {
        order: 2;
    }
}

@media (max-width: 768px) {
    .project-container {
        padding: var(--spacing-large) 0;
        background-color: var(--color-grey-dark-2);
    }
}
</style>
