<template>
    <div class="project">
        <div class="project-container project-container-image">
            <ProjectImageGrid
                :images="project.images"
                :project-title="project.title"
                v-if="windowWidth > 640"
            />
            <ProjectImageList
                v-else
                :images="project.images"
                :project-title="project.title"
            ></ProjectImageList>
        </div>
        <div class="project-container project-container-text">
            <div>
                <h3 :class="`text--${highlightColor}`">
                    {{ project.title }}
                </h3>
                <h4 :class="`text--${highlightColor}`">
                    {{ project.subtitle }}
                </h4>
                <p v-for="(paragraph, index) in project.descriptionParagraphs" :key="index">
                    {{ paragraph }}
                </p>
                <ul class="references">
                    <li v-for="(reference, index) in project.references" :key="index">
                        <a
                            :href="reference.url"
                            :class="`text--${highlightColor}`"
                            target="_blank"
                            rel="noreferrer"
                            >{{ reference.text }}</a
                        >
                    </li>
                </ul>
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
    border-bottom: 1px solid var(--color-grey-dark-2);
}

.project-container {
    display: flex;
    flex-direction: column;
    padding: var(--sp-7);
    background-color: var(--color-grey-dark-3);
    flex: 1;
}

.project-container-text > div {
    max-width: 450px;
    margin: 0 auto;
}

h3 {
    font-size: var(--text-4xl);
    margin-bottom: var(--sp-4);
}

h4 {
    font-size: var(--text-xl);
    margin-bottom: var(--sp-4);
    line-height: 1.2;
}

p {
    font-size: var(--text-base);
    margin-bottom: var(--sp-4);
    line-height: 1.5;
}

.project-links {
    font-size: var(--text-base);
    font-weight: 700;
    display: flex;
}

.project-links a {
    border-radius: 5px;
    padding: 10px 25px;
    background-color: var(--color-grey-dark-1);
    border: 0;
    cursor: pointer;
    margin-right: var(--sp-2);
}

.project-links a:hover {
    background-color: var(--color-grey-dark-5);
}

.references {
    margin-bottom: var(--sp-4);
}

.references li {
    line-height: 1.3;
    font-size: var(--text-sm);
}

.references a {
    text-decoration: underline;
}

@media (max-width: 1024px) {
    .project {
        flex-direction: column;
        margin: 0 0;
        border-bottom: 1px solid var(--color-grey-dark-3);
    }

    .project-container-text {
        order: 1;
        padding-bottom: var(--sp-5);
    }

    .project-container-image {
        order: 2;
        padding-top: var(--sp-5);
    }
}

@media (max-width: 768px) {
    .project-container {
        background-color: var(--color-grey-dark-2);
    }

    .project:last-of-type {
        border-bottom: none;
    }

    .project:last-of-type > .project-container-image {
        padding-bottom: 0;
    }
}

@media (max-width: 640px) {
    .project-container {
        padding-left: 0;
        padding-right: 0;
    }

    h3 {
        font-size: var(--text-3xl);
    }

    h4 {
        font-size: var(--text-lg);
    }

    .project:last-of-type > .project-container-image {
        padding-bottom: 0;
    }
}
</style>
