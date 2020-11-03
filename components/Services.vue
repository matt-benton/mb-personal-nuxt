<template>
  <section class="services" id="services">
    <service-card
      v-for="card in serviceCards"
      :title="card.title"
      :body="card.body"
      :key="card.title"
    >
    </service-card>

    <!-- <div class="services__card">
            <div class="services__card--icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 20 20">
                    <path
                        d="M16.5 20h-13c-0.827 0-1.5-0.673-1.5-1.5v-17c0-0.827 0.673-1.5 1.5-1.5h13c0.827 0 1.5 0.673 1.5 1.5v17c0 0.827-0.673 1.5-1.5 1.5zM3.5 1c-0.276 0-0.5 0.224-0.5 0.5v17c0 0.276 0.224 0.5 0.5 0.5h13c0.276 0 0.5-0.224 0.5-0.5v-17c0-0.276-0.224-0.5-0.5-0.5h-13z">
                    </path>
                    <path
                        d="M10.5 18h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z">
                    </path>
                    <path
                        d="M15.5 16h-11c-0.276 0-0.5-0.224-0.5-0.5v-13c0-0.276 0.224-0.5 0.5-0.5h11c0.276 0 0.5 0.224 0.5 0.5v13c0 0.276-0.224 0.5-0.5 0.5zM5 15h10v-12h-10v12z">
                    </path>
                </svg>
            </div>
            <div class="services__card--header">Mobile friendly websites</div>
            <div class="services__card--text">As technology has evolved, the internet is now accessed from a wide variety of devices. It has never been more important
            to have a website that looks good on screens of all sizes.  I can build responsive websites using media queries, CSS Grid, and Flexbox that will scale to any
            device.</div>
        </div>
        <div class="services__card">
            <div class="services__card--icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 20 20">
                    <path
                        d="M5 15c-0.128 0-0.256-0.049-0.354-0.146l-4-4c-0.195-0.195-0.195-0.512 0-0.707l4-4c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-3.646 3.646 3.646 3.646c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z">
                    </path>
                    <path
                        d="M15 15c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l3.646-3.646-3.646-3.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l4 4c0.195 0.195 0.195 0.512 0 0.707l-4 4c-0.098 0.098-0.226 0.146-0.354 0.146z">
                    </path>
                    <path
                        d="M7.5 15c-0.091 0-0.182-0.025-0.265-0.076-0.234-0.146-0.305-0.455-0.159-0.689l5-8c0.146-0.234 0.455-0.305 0.689-0.159s0.305 0.455 0.159 0.689l-5 8c-0.095 0.152-0.258 0.235-0.424 0.235z">
                    </path>
                </svg>
            </div>
            <div class="services__card--header">Clean Code</div>
            <div class="services__card--text">
                The phrase "Clean Code" may be a platitude, but programming in a way that is readable, thoughtful and efficient is an
                essential skill for a good developer. It reduces bugs, increases development speed, improves maintenance and generally
                makes everyone involved a happier person.</div>
        </div>
        <div class="services__card">
            <div class="services__card--icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 20 20">
                    <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z">
                    </path>
                    <path d="M7.5 14.5c-0.128 0-0.256-0.049-0.354-0.146l-3-3c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.646 2.646 6.646-6.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-7 7c-0.098 0.098-0.226 0.146-0.354 0.146z">
                    </path>
                </svg>
            </div>
            <div class="services__card--header">Test-driven development</div>
            <div class="services__card--text">
                How can it be proven that software does what it is intended to do? How can we assure ourselves that an app doesn't have any
                bugs? TDD ensures that code stays durable even when that code evolves over time. I write tests alongside my
                operational code in order to ensure that features work as intended and stay that way.</div>
        </div>
        <div class="services__card">
            <div class="services__card--icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 20 20">
                    <path
                        d="M19.883 0.178c-0.095-0.113-0.235-0.178-0.382-0.178l-0.51-0c-5.040-0.002-9.021-0.003-11.952 0.698-1.575 0.377-2.793 0.946-3.723 1.739-1.004 0.856-1.688 1.977-2.093 3.429-0.269 0.964-0.395 2.705 0.136 4.437 0.196 0.64 0.502 1.244 0.91 1.799-1.216 1.905-2.267 4.414-2.267 7.399 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-4.605 2.728-8.021 4.354-9.646 1.167-1.167 2.486-2.152 3.816-2.848 1.238-0.648 2.421-1.005 3.331-1.005 0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c-1.084 0-2.396 0.387-3.794 1.12-1.418 0.743-2.822 1.789-4.059 3.027-0.522 0.522-1.15 1.218-1.774 2.070-0.242-0.381-0.43-0.785-0.559-1.207-0.5-1.632-0.316-3.204-0.129-3.875 1.43-5.125 6.862-5.138 16.717-5.135-1.175 6.288-3.366 10.358-6.516 12.101-2.922 1.617-5.82 0.735-6.931 0.28-0.234-0.096-0.47-0.214-0.699-0.35-0.237-0.141-0.544-0.063-0.685 0.174s-0.063 0.544 0.174 0.685c0.272 0.162 0.552 0.302 0.832 0.417 0.622 0.254 1.624 0.58 2.865 0.687 0.274 0.024 0.545 0.035 0.814 0.035 1.469 0 2.849-0.353 4.115-1.053 1.609-0.89 3.001-2.339 4.139-4.304 1.334-2.305 2.338-5.362 2.983-9.086 0.025-0.145-0.015-0.294-0.11-0.407z">
                    </path>
                </svg>
            </div>
            <div class="services__card--header">Simple Solutions</div>
            <div class="services__card--text">
                Often the best solution to a problem is the simplest. When an issue can be solved with less cost, less time and less
                code, I consider that a huge win. I strive to find solutions that maintain the simplicity of the product and will resist
                overcomplicating things unless other options have been exhausted.</div>
        </div> -->
  </section>
</template>

<script>
import ServiceCard from './ServiceCard'
import Tablet from './icons/Tablet'
import Brackets from './icons/Brackets'
import { serviceCards } from '~/service-text.js'

export default {
  data() {
    return {
      serviceCards: serviceCards,
    }
  },
  components: {
    'service-card': ServiceCard,
    'icon-tablet': Tablet,
    'icon-brackets': Brackets,
  },
}
</script>
