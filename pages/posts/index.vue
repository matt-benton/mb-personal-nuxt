<template>
  <div class="component-body">
    <blog-nav />
    <div class="section-container">
      <p>
        Welcome to my blog. This is where I post helpful articles about web development. The purpose
        of this blog is to share what I know about JavaScript, CSS, PHP, and other tools in web dev.
        I aim to explore many different topics as the blog evolves. It is very young right now and
        I'm still trying things, but I'm excited to see what it turns into. Follow along and find
        out with me.
      </p>
      <div class="tags">
        <span class="tag" v-for="tag in activeTags" @click="removeActiveTag(tag)">{{ tag }}</span>
      </div>
      <div class="blog-card-container">
        <div class="blog-preview-card" v-for="article in displayedArticles" :key="article.slug">
          <div class="card-header">
            <nuxt-link :to="`/posts/${article.slug}`">
              <h3>
                {{
                  article.title.length > 40 ? article.title.substring(0, 40) + '...' : article.title
                }}
              </h3>
            </nuxt-link>
          </div>
          <div class="card-body">
            <div>
              <p>{{ formatDate(article.createdAt) }}</p>
              <p v-if="article.description">
                {{
                  article.description.length > 250
                    ? article.description.substring(0, 250) + '...'
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
          <div class="card-footer">
            <nuxt-link :to="`/posts/${article.slug}`">
              <span>Read More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                viewBox="0 0 24 24"
              >
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 2fr min-content;
  background-color: var(--color-grey-dark-3);
  color: #fff;
  border-radius: 5px;
}

.blog-preview-card > * {
  padding: var(--sp-4);
}

.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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

svg {
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
  margin-top: var(--sp-3);
}

.tag {
  background-color: var(--color-grey-dark-4);
  color: #fff;
  margin-left: var(--sp-1);
  border-radius: 15px;
  padding: 0rem 0.9rem;
  cursor: pointer;
}

.tag:first-of-type {
  margin-left: 0;
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
