<template>
  <section id="work">
    <h3 class="section-header">Some stuff that I made (or helped make)</h3>
    <div class="projects">
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
.projects {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, min-content);
  grid-gap: var(--sp-7);
}
</style>
