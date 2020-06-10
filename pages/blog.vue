<template>
    <div class="section-container">
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
                </div>
                <div class="card-footer">
                    <a href="#">Read More -></a>
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
    padding: var(--spacing-large);
    font-weight: 300;
}

.card-header {
    height: 5rem;
}

.card-body {
    height: 13rem;
}

p {
    line-height: var(--line-height-smaller);
    margin-bottom: var(--spacing-small);
}
</style>
