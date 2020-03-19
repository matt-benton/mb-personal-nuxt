<template>
    <div class="project">
        <div class="project__container project__container--image">
            <div class="project__image-grid">
                <img v-lazy="`${project.images[0]}-lg.png`" :alt="`${project.title} large screen shot`" class="project__large-image">
                <div class="project__thumbnails">
                    <div class="project__thumbnail" v-for="(image, index) in project.images" :key="index">
                        <img v-lazy="`${image}-sm.png`" alt="Bill Force One screen shot thumbnail" class="project__thumbnail-image">
                    </div>
                </div>
            </div>
        </div>
        <div class="project__container project__container--text">
            <h3 :class="`project__title text--${highlightColor}`">{{ project.title }}</h3>
            <h4 :class="`project__subtitle text--${highlightColor}`">{{ project.subtitle }}</h4>
            <p v-for="(paragraph, index) in project.descriptionParagraphs" :key="index" class="project__text">{{ paragraph }}</p>
            <div class="project__links">
                <a v-if="project.githubUrl" :class="`text--${highlightColor}`" :href="project.githubUrl" target="_blank">
                    View on Github
                </a>
                <a v-if="project.siteUrl" :class="`text--${highlightColor}`" :href="project.siteUrl" target="_blank">
                    Visit Site
                </a>
                <a v-if="project.gitlabUrl" :class="`text--${highlightColor}`" :href="project.gitlabUrl" target="_blank">
                    View on Gitlab
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        highlightColor() {
            /**
             * the purpose of this function is to ensure that every 3rd
             * project is the same color
             */
            let i = this.index

            while ((i - 3) > -1) {
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
    props: [
        'index',
        'project',
    ],
}
</script>