<template>
    <div>
        <nuxt-link to="/posts">Back to Posts</nuxt-link>
        <div>
            <h1>{{ article.title }}</h1>
            <nuxt-content :document="article"></nuxt-content>
        </div>
    </div>
</template>

<script>
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
}
</script>
