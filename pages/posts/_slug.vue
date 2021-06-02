<template>
  <div class="post-bg">
    <Navbar />
    <div>
      <article>
        <h1 class="title">{{ article.title }}</h1>
        <h5 class="date-text">{{ formatDate(article.createdAt) }}</h5>
        <nuxt-content :document="article"></nuxt-content>
        <prev-next :prev="prev" :next="next" />
      </article>
    </div>
    <Footer />
  </div>
</template>

<script>
import { format } from 'date-fns'
import Navbar from '../../components/Navbar.vue'
import PrevNext from '../../components/PrevNext.vue'
import Footer from '../../components/Footer.vue'

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
    Navbar,
    'prev-next': PrevNext,
    Footer,
  },
}
</script>

<style>
/* IMPORTANT: NUXT WILL NOT ALLOW THESE TO BE SCOPED */
.post-bg {
  background-color: var(--color-grey-dark-2);
}

.nuxt-content-container {
  margin-bottom: var(--sp-7);
}

article {
  margin: 0 auto;
  width: 900px;
  background-color: var(--color-grey-dark-3);
  padding: var(--sp-7) var(--sp-8);
}

.title {
  margin-bottom: var(--sp-2);
  color: var(--color-blue);
  line-height: 1.3;
}

.date-text {
  margin-bottom: var(--sp-5);
  color: var(--color-blue);
}

.nuxt-content h2 {
  margin-bottom: var(--sp-2);
  margin-top: var(--sp-6);
}

.nuxt-content h2 a {
  color: var(--color-blue);
}

.nuxt-content h3 {
  margin-bottom: var(--sp-2);
  margin-top: var(--sp-5);
}

.nuxt-content h3 a {
  color: var(--color-blue);
}

.nuxt-content h4 a {
  color: var(--color-blue);
}

.nuxt-content p {
  font-family: var(--font-secondary);
  color: var(--color-grey-light-2);
  margin-bottom: var(--sp-4);
  line-height: 1.8;
  font-size: var(--font-small);
}

.nuxt-content p a {
  color: var(--color-blue);
}

.nuxt-content ol {
  font-family: var(--font-secondary);
  color: #fff;
  padding-left: var(--sp-6);
  margin-bottom: var(--sp-4);
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
}

@media (max-width: 768px) {
  .post-bg {
    width: 100%;
  }

  article {
    padding: var(--sp-7) 5%;
    margin: 0 auto;
    width: 80%;
  }
}

@media (max-width: 640px) {
  article {
    padding: var(--sp-7) 5%;
    width: 100%;
  }

  .title {
    font-size: var(--text-2xl);
    margin-top: 0;
  }

  .nuxt-content h2 {
    font-size: var(--text-xl);
  }

  .nuxt-content h3 {
    font-size: var(--text-lg);
  }

  .nuxt-content h4 {
    font-size: var(--text-base);
  }
}
</style>
