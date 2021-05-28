<template>
  <section id="work">
    <Project
      v-for="(project, index) in projectContent"
      :key="index"
      :index="index"
      :project="project"
    />
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
