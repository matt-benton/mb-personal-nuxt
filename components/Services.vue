<template>
  <section class="services" id="services">
    <div class="services-container">
      <service-card
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
      </service-card>
      <service-card
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
      </service-card>
      <service-card
        :title="serviceCards[2].title"
        :listItems="serviceCards[2].listItems"
        :key="serviceCards[2].title"
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
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </service-card>
      <service-card
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
      </service-card>
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
            'Bring your idea to the web',
            'Custom made SaaS applications',
            'Software that solves unique problems',
          ],
        },
        {
          title: 'Custom business software',
          listItems: [
            'Applications that fit your organization',
            'Solve your business problems',
            "User-friendly design making employees' jobs easier",
          ],
        },
        {
          title: 'E-commerce',
          listItems: ['Put your store on the web', 'Sell your product online', 'Collect payments'],
        },
        {
          title: 'HTML / CSS',
          listItems: ['Convert a design to html & css', 'Mobile-friendly', 'Accessible'],
        },
      ],
    }
  },
  components: {
    'service-card': ServiceCard,
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
    grid-template-rows: repeat(4, 1fr);
  }
}
</style>
