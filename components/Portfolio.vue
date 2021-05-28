<template>
  <section id="work">
    <div class="section-container">
      <Project
        v-for="(project, index) in projectContent"
        :key="index"
        :index="index"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import Project from './Project.vue'
import { projects } from '~/projects'

export default {
  data() {
    return {
      projectContent: projects,
    }
  },
  components: {
    Project,
  },
}
</script>

<style scoped>
section {
  padding: var(--sp-7) 0;
}

@media (max-width: 768px) {
  .section-container {
    margin: 0;
    padding: 0 5%;
  }
}

@media (max-width: 640px) {
  section {
    padding: var(--sp-8) 5%;
  }
}
</style>
