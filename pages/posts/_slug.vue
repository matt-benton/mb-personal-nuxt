<template>
    <div class="section-container">
        <nuxt-link to="/posts">Back to Posts</nuxt-link>
        <article>
            <hr />
            <div>
                <h1 class="title">{{ article.title }}</h1>
                <h5 class="date-text">{{ formatDate(article.date) }}</h5>
                <nuxt-content :document="article"></nuxt-content>
            </div>
        </article>
    </div>
</template>

<script>
import { format } from 'date-fns'

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
}
</script>

<style scoped>
article {
    padding: 0 250px;
}

hr {
    border: none;
    border-top: 3px solid var(--color-pink-dark);
    margin: var(--spacing-medium) 0;
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

@media (max-width: 1024px) {
    article {
        padding: 0;
    }
}
</style>
