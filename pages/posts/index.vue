<template>
    <div class="component-body">
        <blog-nav />
        <div class="section-container">
            <p>
                Welcome to my blog. This is where I post helpful articles about web development. The
                purpose of this blog is to share what I know about JavaScript, CSS, PHP, and other
                tools in web dev. I aim to explore many different topics as the blog evolves. It is
                very young right now and I'm still trying things, but I'm excited to see what it
                turns into. Follow along and find out with me.
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                />
                            </svg>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import { format } from 'date-fns'
import BlogNav from '../../components/BlogNav.vue'
import Footer from '~/components/Footer.vue'

export default {
    async asyncData({ $content }) {
        const articles = await $content('articles')
            .sortBy('createdAt', 'desc')
            .fetch()

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
        Footer,
    },
}
</script>

<style scoped>
.component-body {
    background-color: var(--color-grey-dark-2);
}

p {
    line-height: 1.6;
    margin-bottom: var(--sp-2);
    max-width: 600px;
}

.section-container {
    padding-bottom: var(--sp-7);
}

.section-container > p {
    margin: var(--sp-7) auto;
    font-weight: 300;
    color: var(--color-grey-light-1);
    padding: var(--sp-7);
    background-color: var(--color-grey-dark-3);
}

.blog-card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-gap: var(--sp-7);
}

.blog-preview-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--color-grey-dark-3);
    color: #fff;
}

.blog-preview-card > * {
    padding: var(--sp-4);
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
    padding-left: var(--sp-7);
    padding-right: var(--sp-7);
    flex: 3;
}

.card-footer {
    display: flex;
    justify-content: center;
}

.card-footer a {
    display: flex;
    align-items: center;
    color: var(--color-blue);
    position: relative;
}

.card-footer a span {
    padding-right: var(--sp-5);
}

svg {
    position: absolute;
    right: 0;
    top: 6px;
    height: var(--text-lg);
    width: var(--text-lg);
    fill: var(--color-blue);
}

@media (max-width: 1024px) {
    .section-container {
        margin-top: 0;
        padding-top: 0;
    }

    .blog-card-container {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 640px) {
    .blog-preview-card > * {
        padding: var(--sp-4);
    }

    .section-container {
        padding: 0 5% var(--sp-7) 5%;
    }

    .section-container > p {
        padding: var(--sp-4);
    }

    .blog-card-container {
        grid-gap: var(--sp-4);
    }
}
</style>
