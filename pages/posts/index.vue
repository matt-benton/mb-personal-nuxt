<template>
    <div class="section-container">
        <div>
            <nuxt-link to="/"><button>mattbenton.io</button></nuxt-link>
        </div>
        <div class="blog-card-container">
            <div class="blog-preview-card" v-for="article in articles" :key="article.slug">
                <div class="card-header">
                    <h2>{{ article.title }}</h2>
                </div>
                <div class="card-body">
                    <p>{{ formatDate(article.date) }}</p>
                    <p v-if="article.preview">
                        {{
                            article.preview.length > previewLength
                                ? article.preview.substring(0, previewLength) + '...'
                                : article.preview
                        }}
                    </p>
                    {{ article.slug }}
                </div>
                <div class="card-footer">
                    <nuxt-link :to="`/posts/_${article.slug}`">Read More -></nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { format } from 'date-fns'

export default {
    data() {
        return {
            previewLength: 120,
        }
    },
    async asyncData({ $content }) {
        const articles = await $content('articles').fetch()

        return {
            articles,
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
.blog-card-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: var(--spacing-medium);
}

.blog-preview-card {
    background-color: var(--color-grey-light-1);
    font-weight: 300;
    border-radius: 3px;
}

.card-header {
    height: 9rem;
    border-radius: 5px 5px 0 0;
    color: #fff;
    padding: var(--spacing-large);
}

.blog-preview-card:nth-of-type(even) .card-header {
    background: linear-gradient(to left, var(--color-pink), var(--color-pink-dark));
}

.blog-preview-card:nth-of-type(odd) .card-header {
    background: linear-gradient(to left, var(--color-blue), var(--color-blue-dark));
}

.card-body {
    padding: var(--spacing-large);
    height: 13rem;
}

.card-footer {
    padding: var(--spacing-large);
}

p {
    line-height: var(--line-height-smaller);
    margin-bottom: var(--spacing-small);
}
</style>
