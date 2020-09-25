<template>
    <div class="post-bg">
        <blog-nav />
        <div>
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
.post-bg {
    background-color: var(--color-grey-dark-2);
}

article {
    margin: 0 auto;
    width: 900px;
    background-color: var(--color-grey-dark-3);
    padding: var(--spacing-largest);
}

.title {
    margin-bottom: var(--spacing-small);
    color: var(--color-blue);
    font-weight: 300;
}

.date-text {
    font-weight: 300;
    margin-bottom: var(--spacing-medium);
    color: var(--color-blue);
}

.nuxt-content h2 {
    margin-bottom: var(--spacing-medium);
    margin-top: var(--spacing-large);
    font-weight: 300;
}

.nuxt-content h2 a {
    color: var(--color-blue);
}

.nuxt-content h3 {
    margin-bottom: var(--spacing-small);
    margin-top: var(--spacing-medium);
    font-weight: 300;
}

.nuxt-content h3 a {
    color: var(--color-blue);
}

.nuxt-content p {
    font-family: var(--font-secondary);
    font-weight: 300;
    color: #fff;
    margin-bottom: var(--spacing-medium);
    line-height: 1.8;
    font-size: var(--font-small);
}

.nuxt-content p a {
    color: var(--color-blue);
}

.nuxt-content-highlight span {
    font-family: 'Roberto Mono', monospace;
}

@media (max-width: 1024px) {
    article {
        width: 90%;
    }

    .nuxt-content p {
        font-size: var(--font-smaller);
    }

    h1 {
        font-size: var(--font-medium);
    }
}

@media (max-width: 768px) {
    .post-bg {
        width: 100%;
    }

    .nuxt-content h2 {
        font-size: var(--font-small);
    }

    .nuxt-content h3 {
        font-size: var(--font-smaller);
    }

    article {
        margin: 0 auto;
        padding: var(--spacing-large) var(--spacing-small);
    }
}

@media (max-width: 640px) {
    article {
        width: 100%;
        margin: 0;
    }
}
</style>
