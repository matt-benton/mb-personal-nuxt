<template>
    <div>
        <blog-nav />
        <div class="section-container">
            <p>
                <i>
                    Welcome to my blog. This is where I post helpful articles about web development.
                    The purpose of this blog is to share what I know about JavaScript, CSS, PHP, and
                    other tools in web dev. I aim to explore many different topics as the blog
                    evolves. It is very young right now and I'm still trying things, but I'm excited
                    to see what it turns into. Follow along and find out with me.
                </i>
            </p>
            <div class="blog-card-container">
                <div class="blog-preview-card" v-for="article in articles" :key="article.slug">
                    <div class="card-header">
                        <nuxt-link :to="`/posts/${article.slug}`">
                            <h3>{{ article.title }}</h3>
                        </nuxt-link>
                    </div>
                    <div class="card-body">
                        <p>{{ formatDate(article.createdAt) }}</p>
                        <p v-if="article.description">
                            {{ article.description }}
                        </p>
                    </div>
                    <div class="card-footer">
                        <nuxt-link :to="`/posts/${article.slug}`">
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
    </div>
</template>

<script>
import { format } from 'date-fns'
import BlogNav from '../../components/BlogNav.vue'

export default {
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
        'blog-nav': BlogNav,
    },
}
</script>

<style scoped>
p {
    line-height: var(--line-height-smaller);
    margin-bottom: var(--spacing-small);
    font-size: var(--font-smaller);
    max-width: 600px;
}

.section-container > p {
    margin: var(--spacing-large) auto;
    font-size: var(--font-small);
    color: var(--color-grey-dark-4);
    padding: var(--spacing-medium);
}

.blog-card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-gap: var(--spacing-large);
}

.blog-preview-card {
    background-color: var(--color-grey-light-1);
    font-weight: 300;
    border-radius: 3px;
    transition: box-shadow 0.3s, transform 0.3s;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;
}

.blog-preview-card > * {
    padding: var(--spacing-medium);
}

.blog-preview-card:hover {
    box-shadow: 0 5px 5px var(--color-grey-light-5);
    transform: translateY(-2px);
}

.card-header {
    display: flex;
    justify-content: center;
}

.card-header h3 {
    color: #fff;
}

.blog-preview-card:nth-of-type(3n + 1) .card-header {
    background: linear-gradient(to left, var(--color-pink), var(--color-pink-dark));
}

.blog-preview-card:nth-of-type(3n + 2) .card-header {
    background: linear-gradient(to left, var(--color-blue), var(--color-blue-dark));
}

.blog-preview-card:nth-of-type(3n + 3) .card-header {
    background: linear-gradient(to left, var(--color-green), var(--color-green-dark));
}

.card-body {
    padding-left: var(--spacing-large);
    padding-right: var(--spacing-large);
    flex: 3;
}

.card-footer {
    display: flex;
    justify-content: center;
}

.card-footer a {
    display: flex;
    align-items: center;
}

.card-footer a span {
    margin-right: var(--spacing-small);
}

svg {
    height: var(--font-medium);
    width: var(--font-medium);
    fill: var(--color-grey-dark-5);
}

@media (max-width: 1024px) {
    .blog-card-container {
        grid-template-columns: 1fr;
    }

    .blog-preview-card {
        width: 95%;
    }
}

@media (max-width: 640px) {
    .card-body {
        padding: var(--spacing-medium);
    }
}
</style>
