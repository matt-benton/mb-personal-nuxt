<template>
    <div>
        <blog-nav />
        <div class="section-container">
            <article>
                <div>
                    <h1 class="title">{{ article.title }}</h1>
                    <h5 class="date-text">{{ formatDate(article.createdAt) }}</h5>
                    <nuxt-content :document="article"></nuxt-content>
                    <prev-next :prev="prev" :next="next" />
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import { format } from 'date-fns'
import BlogNav from '../../components/BlogNav.vue'
import PrevNext from '../../components/PrevNext.vue'

export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug).fetch()

        const [prev, next] = await $content('articles')
            .only(['title', 'slug'])
            .sortBy('createdAt', 'asc')
            .surround(params.slug)
            .fetch()

        return {
            article,
            prev,
            next,
        }
    },
    methods: {
        formatDate(dateString) {
            return format(new Date(dateString), 'MMMM d, yyyy')
        },
    },
    components: {
        'blog-nav': BlogNav,
        'prev-next': PrevNext,
    },
}
</script>

<style>
/* IMPORTANT: NUXT WILL NOT ALLOW THESE TO BE SCOPED */
.section-container {
    margin-top: var(--spacing-large);
}

article {
    margin: 0 auto;
    width: 650px;
}

h1 {
    font-size: var(--font-large);
}

img {
    border: 1px solid var(--color-grey-light-3);
    max-width: 100%;
}

.nuxt-content h2 {
    margin-bottom: var(--spacing-medium);
    margin-top: var(--spacing-large);
}

.nuxt-content h3 {
    margin-bottom: var(--spacing-small);
    margin-top: var(--spacing-medium);
}

.nuxt-content p {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    color: var(--color-grey-dark-2);
    margin-bottom: var(--spacing-medium);
    line-height: var(--line-height-smaller);
    font-size: var(--font-small);
}

.date-text {
    font-weight: 300;
    margin-bottom: var(--spacing-medium);
}

.title {
    margin-bottom: var(--spacing-small);
}

@media (max-width: 768px) {
    h1 {
        font-size: var(--font-medium);
    }

    .nuxt-content h2 {
        font-size: var(--font-small);
    }

    .nuxt-content h3 {
        font-size: var(--font-smaller);
    }

    article {
        width: 95%;
    }
}
</style>
