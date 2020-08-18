<template>
    <div>
        <go-back-bar url="/" text="Back to mattbenton.io" />
        <div class="blog-card-container">
            <div class="blog-preview-card" v-for="article in articles" :key="article.slug">
                <div class="card-header">
                    <nuxt-link :to="`/posts/_${article.slug}`">
                        <h2>{{ article.title }}</h2>
                    </nuxt-link>
                </div>
                <div class="card-body">
                    <p>{{ formatDate(article.createdAt) }}</p>
                    <p v-if="article.description">
                        {{
                            article.description.length > descriptionLength
                                ? article.description.substring(0, descriptionLength) + '...'
                                : article.description
                        }}
                    </p>
                </div>
                <div class="card-footer">
                    <nuxt-link :to="`/posts/_${article.slug}`">
                        <span>Read More</span>
                        <svg>
                            <path
                                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                            />
                        </svg>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { format } from 'date-fns'
import GoBackBar from '../../components/GoBackBar.vue'

export default {
    data() {
        return {
            descriptionLength: 240,
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
    components: {
        'go-back-bar': GoBackBar,
    },
}
</script>

<style scoped>
.blog-card-container {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: var(--spacing-medium);
}

.blog-preview-card {
    background-color: var(--color-grey-light-1);
    font-weight: 300;
    border-radius: 3px;
    transition: box-shadow 0.3s, transform 0.3s;
    width: 650px;
}

.blog-preview-card:hover {
    box-shadow: 0 5px 5px var(--color-grey-light-5);
    transform: translateY(-10px);
}

.card-header {
    height: 9rem;
    border-radius: 5px 5px 0 0;
    padding: var(--spacing-large);
}

.card-header h2 {
    color: #fff;
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

.card-footer a {
    display: flex;
    align-items: center;
}

.card-footer a span {
    margin-right: var(--spacing-small);
}

p {
    line-height: var(--line-height-smaller);
    margin-bottom: var(--spacing-small);
}

svg {
    height: var(--font-medium);
    width: var(--font-medium);
    fill: var(--color-grey-dark-5);
}

@media (max-width: 768px) {
    .blog-preview-card {
        width: 95%;
    }
}
</style>
