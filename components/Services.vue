<template>
  <section class="services" id="services">
    <h3 class="section-header">Services</h3>
    <div class="services-container">
      <ServiceCard
        :title="serviceCards[0].title"
        :listItems="serviceCards[0].listItems"
        :key="serviceCards[0].title"
      >
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
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </ServiceCard>
      <ServiceCard
        :title="serviceCards[1].title"
        :listItems="serviceCards[1].listItems"
        :key="serviceCards[1].title"
      >
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
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      </ServiceCard>
      <ServiceCard
        :title="serviceCards[2].title"
        :listItems="serviceCards[2].listItems"
        :key="serviceCards[2].title"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      </ServiceCard>
      <ServiceCard
        :title="serviceCards[3].title"
        :listItems="serviceCards[3].listItems"
        :key="serviceCards[3].title"
      >
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </ServiceCard>
    </div>
  </section>
</template>

<script>
import ServiceCard from './ServiceCard'

export default {
  data() {
    return {
      serviceCards: [
        {
          title: 'Web application development',
          listItems: [
            'Laravel development with PHP best practices',
            'Vue powered frontends',
            'Test driven development',
          ],
        },
        {
          title: 'Custom business software',
          listItems: [
            'Applications that fit your organization',
            'Solve your business problems',
            'User-friendly design',
          ],
        },
        {
          title: 'Database',
          listItems: ['Design with data integrity', 'Fast queries and optimization'],
        },
        {
          title: 'HTML & CSS',
          listItems: [
            'Design conversion to HTML and CSS',
            'Responsive and mobile-friendly',
            'Accessible',
          ],
        },
      ],
    }
  },
  components: {
    ServiceCard,
  },
}
</script>

<style scoped>
.services-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-row-gap: var(--sp-5);
}

@media (max-width: 768px) {
  .services-container {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, min-content);
  }
}
</style>
