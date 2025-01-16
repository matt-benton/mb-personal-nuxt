<template>
  <section id="skills">
    <div>
      <h3 class="section-header">Tools that I work with</h3>
      <div class="skills-body">
        <div
          v-for="(skill, index) in shuffledSkills"
          :key="index"
          class="pill"
          :class="{ 'bright': skill.prio === 1, 'half-dim': skill.prio === 2, 'dim': skill.prio === 3, }"
        >
          {{ skill.name }}
        </div>
      </div>
    </div>
    <div>
      <h3 class="section-header"><s>Not so</s> recent posts from my blog</h3>
      <ul id="posts-list">
        <li v-for="post in recentPosts" :key="post._path">
          <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const { data: recentPosts } = await useAsyncData('posts', () => queryContent('/posts').sort({ createdAt: -1 }).limit(5).find())

const shuffledSkills = useState('shuffledSkills', () => {
  const skills = [
    {
      name: 'css',
      prio: 2,
    },
    {
      name: 'html',
      prio: 2,
    },
    {
      name: 'typescript',
      prio: 3,
    },
    {
      name: 'javascript',
      prio: 2,
    },
    {
      name: 'vue',
      prio: 1,
    },
    {
      name: 'tailwind',
      prio: 3,
    },
    {
      name: 'php',
      prio: 2,
    },
    {
      name: 'mysql',
      prio: 1,
    },
    {
      name: 'laravel',
      prio: 1,
    },
    {
      name: 'inertia',
      prio: 2,
    },
    {
      name: 'git',
      prio: 2,
    },
    {
      name: 'nuxt',
      prio: 2,
    },
    {
      name: 'rest api',
      prio: 3,
    },
    {
      name: 'dusk',
      prio: 2,
    },
    {
      name: 'phpunit',
      prio: 3,
    },
  ]

  let shuffled = [...skills];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
      // Generate random index
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
})
</script>

<style scoped>
#skills {
  font-size: var(--text-xl);
  line-height: var(--line-height-medium);
  display: grid;
  grid-template-columns: 50% 50%;
}

.pill {
  background-color: var(--color-blue-dark);
  border-radius: 25px;
  padding: var(--sp-1) var(--sp-3);
}

.bright {
  zoom: 125%;
  background: linear-gradient(to right, var(--color-blue-dark) 80%, var(--color-blue));
}

.half-dim {
  background-color: rgb(18, 128, 191, 0.5);
}

.dim {
  background-color: rgb(18, 128, 191, 0.2);
  zoom: 85%;
}

.skills-body {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--sp-3);
  width: var(--sp-12);
  margin: 0 auto;
}

#posts-list {
  list-style-type: disc;
  padding-left: var(--sp-5);
}

#posts-list a {
  font-size: var(--text-base);
  color: var(--color-blue);
}

@media (max-width: 768px) {
  #skills {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: var(--sp-9);
  }
}
</style>
