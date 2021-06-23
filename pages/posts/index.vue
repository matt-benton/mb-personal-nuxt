<template>
  <div class="component-body">
    <Navbar />
    <main class="layout">
      <h1>mattbenton.io blog</h1>
      <div class="topics">
        <h2 class="section-header">TOPICS</h2>
        <ul>
          <li
            v-for="topic in topics"
            :key="topic"
            @click="addActiveTag(topic)"
            @keydown.enter="addActiveTag(topic)"
            :class="{ highlighted: activeTags.includes(topic) }"
            tabindex="0"
          >
            {{ topic }}
            <small
              >({{
                articles.filter(article => article.tags && article.tags.includes(topic)).length
              }})</small
            >
          </li>
        </ul>
      </div>
      <div class="blog-card-container">
        <div class="tags" v-show="activeTags.length > 0">
          <span
            class="tag tag-close"
            v-for="tag in activeTags"
            @click="removeActiveTag(tag)"
            @keydown.enter="removeActiveTag(tag)"
            tabindex="0"
          >
            {{ tag }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
        <div class="blog-preview-card" v-for="article in displayedArticles" :key="article.slug">
          <div class="card-header">
            <nuxt-link :to="`/posts/${article.slug}`">
              <h2>
                {{
                  article.title.length > 40 ? article.title.substring(0, 40) + '...' : article.title
                }}
              </h2>
            </nuxt-link>
          </div>
          <div class="card-body">
            <div>
              <p>{{ formatDate(article.createdAt) }}</p>
              <p v-if="article.description">
                {{
                  article.description.length > 325
                    ? article.description.substring(0, 325) + '...'
                    : article.description
                }}
              </p>
            </div>
            <div class="tags" v-if="article.tags">
              <span class="tag" v-for="tag in article.tags" @click="addActiveTag(tag)">{{
                tag
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import { format } from 'date-fns'
import Navbar from '../../components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  async asyncData({ $content }) {
    const articles = await $content('articles').sortBy('createdAt', 'desc').fetch()

    return {
      articles,
    }
  },
  data() {
    return {
      activeTags: [],
    }
  },
  computed: {
    displayedArticles() {
      if (this.activeTags.length !== 0) {
        return this.articles.filter(article => {
          return this.activeTags.some(tag => article.tags && article.tags.includes(tag))
        })
      }

      return this.articles
    },
    topics() {
      return new Set(
        this.articles
          .flatMap(article => article.tags)
          .filter(topic => topic !== undefined)
          .sort(),
      )
    },
  },
  methods: {
    formatDate(dateString) {
      return format(new Date(dateString), 'MMMM d, yyyy')
    },
    addActiveTag(tag) {
      if (!this.activeTags.includes(tag)) {
        this.activeTags.push(tag)
      }
    },
    removeActiveTag(tag) {
      const index = this.activeTags.findIndex(activeTag => activeTag === tag)

      this.activeTags.splice(index, 1)
    },
  },
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style scoped>
.component-body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

p {
  line-height: 1.6;
  margin-bottom: var(--sp-2);
  max-width: 600px;
}

.layout {
  display: grid;
  grid-template-rows: min-content min-content;
  grid-template-columns: 20% 80%;
  max-width: 850px;
  margin: 0 auto;
  padding: var(--sp-5) var(--sp-3);
  flex-grow: 10;
}

h1 {
  grid-column: span 2;
}

.topics {
  position: sticky;
  top: 70px;
  max-height: 50vh;
}

.section-header {
  margin-bottom: var(--sp-2);
}

.topics > ul {
  padding-left: var(--sp-2);
  padding-right: var(--sp-2);
}

.topics li {
  color: var(--color-grey-light-2);
  line-height: 1.15;
  margin-bottom: var(--sp-2);
  cursor: pointer;
}

.highlighted {
  color: var(--color-blue) !important;
}

.blog-card-container {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  grid-gap: var(--sp-6);
  grid-auto-row: 1fr;
  margin: 0 auto;
}

.blog-preview-card {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 2fr min-content;
  color: var(--color-grey-light-2);
  border-radius: 5px;
}

.card-header {
  display: flex;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card-header h2 {
  color: var(--color-blue);
  padding-bottom: var(--sp-2);
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.card-footer svg {
  position: absolute;
  right: 0;
  top: 6px;
  height: var(--text-lg);
  width: var(--text-lg);
  fill: var(--color-blue);
}

.tags {
  display: flex;
  flex-wrap: wrap;
}

.tag {
  position: relative;
  background-color: var(--color-grey-dark-4);
  color: #fff;
  margin-left: var(--sp-1);
  margin-bottom: var(--sp-1);
  border-radius: 15px;
  padding: 0rem 0.9rem;
  cursor: pointer;
}

.tag svg {
  position: relative;
  height: var(--text-lg);
  width: var(--text-lg);
  top: 3px;
}

.tag-close {
  padding-right: var(--sp-2) !important;
}

.tag:first-of-type {
  margin-left: 0;
}

@media (max-width: 640px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .topics {
    display: none;
  }
}
</style>
