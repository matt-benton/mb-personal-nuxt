<template>
    <div class="section-container">
        <blog-nav />
        <article>
            <hr />
            <div>
                <h1 class="title">{{ article.title }}</h1>
                <h5 class="date-text">{{ formatDate(article.createdAt) }}</h5>
                <nuxt-content :document="article"></nuxt-content>
            </div>
        </article>
    </div>
</template>

<script>
import { format } from 'date-fns'
import BlogNav from '../../components/BlogNav.vue'

export default {
    async asyncData({ $content, params }) {
        const articles = await $content('articles')
            .where({ slug: params.slug.substring(1) })
            .fetch()

        const article = articles[0]

        return {
            article,
        }
    },
    methods: {
        formatDate(dateString) {
            return format(new Date(dateString), 'MMMM d, yyyy')
        },
    },
    components: {
        'blog-nav': BlogNav,
    },
}
</script>

<style scoped>
article {
    margin: 0 auto 200px auto;
    width: 650px;
}

hr {
    border: none;
    border-top: 3px solid var(--color-blue-dark);
    margin: var(--spacing-medium) 0;
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
