<template>
  <div class="project">
    <div class="project-container project-container-image">
      <ProjectImageGrid
        :images="project.images"
        :project-title="project.title"
        v-if="windowWidth > 640"
      />
      <ProjectImageList
        v-else
        :images="project.images"
        :project-title="project.title"
      ></ProjectImageList>
    </div>
    <div class="project-container project-container-text">
      <div>
        <h3>
          {{ project.title }}
        </h3>
        <h4>
          {{ project.subtitle }}
        </h4>
        <ul class="features">
          <li v-for="(feature, index) in project.features">{{ feature }}</li>
        </ul>
        <p v-for="(paragraph, index) in project.descriptionParagraphs" :key="index">
          {{ paragraph }}
        </p>
        <ul class="references">
          <li v-for="(reference, index) in project.references" :key="index">
            <a :href="reference.url" target="_blank" rel="noreferrer">{{ reference.text }}</a>
          </li>
        </ul>
        <div class="project-links">
          <a
            v-for="link in project.links"
            :key="link.title"
            :href="link.url"
            target="_blank"
            rel="noreferrer"
            >{{ link.text }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectImageGrid from './ProjectImageGrid.vue'
import ProjectImageList from './ProjectImageList.vue'

export default {
  data() {
    return {
      windowWidth: 0,
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth
  },
  props: ['index', 'project'],
  components: {
    ProjectImageGrid,
    ProjectImageList,
  },
}
</script>

<style scoped>
.project {
  display: flex;
}

.project-container {
  display: flex;
  flex-direction: column;
  padding: 0 var(--sp-7);
  margin-bottom: var(--sp-5);
  flex: 1;
}

.project-container-text > div {
  max-width: 450px;
  margin: 0 auto;
}

h3 {
  background: -webkit-linear-gradient(45deg, var(--color-blue), var(--color-blue-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: var(--text-4xl);
  padding-bottom: var(--sp-4);
}

h4 {
  font-size: var(--text-xl);
  margin-bottom: var(--sp-4);
  line-height: 1.2;
}

p {
  font-size: var(--text-base);
  margin-bottom: var(--sp-4);
  line-height: 1.5;
}

.project-links {
  font-size: var(--text-base);
  font-weight: 700;
  display: flex;
}

.project-links a {
  border-radius: 5px;
  padding: 8px 24px;
  border: 2px solid var(--color-blue);
  cursor: pointer;
  margin-right: var(--sp-2);
  color: var(--color-blue);
  transition: background-color 0.3s, border-color 0.1s;
}

.project-links a:hover {
  background-color: var(--color-pink-dark);
  border-color: var(--color-grey-dark-1);
  color: var(--color-grey-light-1);
}

.features {
  list-style-type: disc;
  line-height: var(--line-height-smaller);
  padding-left: var(--sp-5);
  margin-bottom: var(--sp-5);
}

.features li {
  margin-bottom: var(--sp-3);
}

.references {
  margin-bottom: var(--sp-4);
}

.references li {
  line-height: 1.3;
  font-size: var(--text-sm);
}

.references a {
  text-decoration: underline;
  color: var(--color-blue);
}

@media (max-width: 768px) {
  .project {
    flex-direction: column;
    margin: 0 0;
  }

  .project-container-text {
    order: 1;
    padding-bottom: var(--sp-5);
  }

  .project-container-image {
    order: 2;
    padding-top: var(--sp-5);
  }

  .project-container {
    padding-left: 0;
    padding-right: 0;
  }

  .project:last-of-type > .project-container-image {
    padding-bottom: 0;
  }

  .project-container-text > div {
    max-width: none;
    margin: 0 auto;
  }
}

@media (max-width: 640px) {
  h3 {
    font-size: var(--text-3xl);
  }

  h4 {
    font-size: var(--text-lg);
  }

  .project:last-of-type > .project-container-image {
    padding-bottom: 0;
  }
}
</style>
