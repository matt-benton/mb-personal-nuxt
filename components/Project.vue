<template>
    <div class="project">
        <div class="project-container project-container-image">
            <ProjectImageGrid
                :images="project.images"
                :project-title="project.title"
                @large-image-clicked="largeImageClicked($event)"
            />
        </div>
        <div class="project-container project-container-text">
            <h3 :class="`project-title text--${highlightColor}`">
                {{ project.title }}
            </h3>
            <h4 :class="`project-subtitle text--${highlightColor}`">
                {{ project.subtitle }}
            </h4>
            <p
                v-for="(paragraph, index) in project.descriptionParagraphs"
                :key="index"
                class="project-text"
            >
                {{ paragraph }}
            </p>
            <div class="project-links">
                <a
                    v-if="project.githubUrl"
                    :class="`text--${highlightColor}`"
                    :href="project.githubUrl"
                    target="_blank"
                    >View on Github</a
                >
                <a
                    v-if="project.siteUrl"
                    :class="`text--${highlightColor}`"
                    :href="project.siteUrl"
                    target="_blank"
                    >Visit Site</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import ProjectImageGrid from './ProjectImageGrid.vue'

export default {
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
        }
    },
    methods: {
        largeImageClicked(image) {
            this.$emit('large-image-clicked', image)
        }
    },
    props: ['index', 'project'],
    components: {
        ProjectImageGrid
    }
}
</script>

<style>
.project {
    display: flex;
    margin: var(--spacing-large) 0;
    box-shadow: 0 2px 10px var(--color-grey-dark-1);
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

.project-title {
    font-size: var(--font-large);
    margin-bottom: var(--spacing-small);
}

.project-subtitle {
    font-size: var(--font-medium);
    margin-bottom: var(--spacing-large);
}

.project-text {
    font-size: var(--font-small);
    margin-bottom: var(--spacing-medium);
    line-height: var(--line-height-small);
}

.project-links {
    font-size: var(--font-small);
    font-weight: 700;
    margin-top: var(--spacing-large);
}

.project-links a {
    border-radius: 5px;
    padding: 10px 25px;
    background-color: var(--color-grey-dark-1);
    border: 0;
    cursor: pointer;
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
        padding: var(--spacing-larger);
    }
}

@media (max-width: 640px) {
    .project-container {
        padding: var(--spacing-large) var(--spacing-medium);
    }
}
</style>
