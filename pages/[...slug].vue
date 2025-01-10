<template>
    <Navbar />
    <main>
        <ContentDoc v-slot="{ doc }">
            <article class="article">
                <h1 class="title">{{ doc.title }}</h1>
                <h5 class="date-text">{{ formatDate(doc.createdAt) }}</h5>
                <ContentRenderer :value="doc" />
                <PrevNext :prev="prevPost" :next="nextPost" />
            </article>
        </ContentDoc>
    </main>
    <Footer />
</template>
<script setup>
import { computed } from 'vue'
import { format } from 'date-fns'

const { data: navigation } = await useAsyncData('navigation', () => queryContent().sort({ createdAt: 1 }).find())

const currentPostIndex = computed(() => {
  return navigation.value.findIndex(child => child._path === useRoute().path)
})

const prevPost = computed(() => navigation.value[currentPostIndex.value - 1])

const nextPost = computed(() => navigation.value[currentPostIndex.value + 1])

function formatDate(dateString) {
    return format(new Date(dateString), 'MMMM d, yyyy')
}
</script>

<style>
.article {
  margin: 0 auto;
  width: 900px;
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

.article h2 {
  margin-bottom: var(--sp-2);
  margin-top: var(--sp-6);
}

.article h2 a,
.article h3 a,
.article h4 a {
  color: var(--color-grey-light-2);
}

.article h3 {
  margin-bottom: var(--sp-2);
  margin-top: var(--sp-5);
}

.article p {
  color: var(--color-grey-light-2);
  margin-bottom: var(--sp-4);
  line-height: 1.8;
  font-size: var(--font-small);
}

.article ol {
  color: #fff;
  padding-left: var(--sp-6);
  margin-bottom: var(--sp-4);
}

.article ul {
  list-style-type: disc;
  padding-left: var(--sp-5);
}

.article span {
  font-family: 'Roberto Mono', monospace;
}

.article table {
  display: block;
  width: 100%;
  border-collapse: collapse;
  overflow-x: scroll;
}

.article th,
.article td {
  border: 1px solid var(--color-grey-light-3);
  padding: var(--sp-1) var(--sp-2);
}

.article table a {
  color: var(--color-blue);
}

@media (max-width: 1024px) {
  .article {
    width: 90%;
  }

  .article p {
    font-size: var(--font-smaller);
  }
}

@media (max-width: 768px) {
  .post-bg {
    width: 100%;
  }

  .article {
    padding: var(--sp-7) 5%;
    margin: 0 auto;
    width: 80%;
  }
}

@media (max-width: 640px) {
  .article {
    padding: var(--sp-7) 5%;
    width: 100%;
  }

  .title {
    font-size: var(--text-2xl);
    margin-top: 0;
  }

  .article h2 {
    font-size: var(--text-xl);
  }

  .article h3 {
    font-size: var(--text-lg);
  }

  .article h4 {
    font-size: var(--text-base);
  }
}
</style>
