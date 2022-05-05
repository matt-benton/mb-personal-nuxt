<template>
  <div>
    <Navbar />
    <main>
      <div class="container">
        <Header />
        <Services />
        <About />
        <Skills />
        <Approach />
        <Portfolio />
        <Footer />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Header from '~/components/Header.vue'
import About from '~/components/About.vue'
import Skills from '~/components/Skills.vue'
import Portfolio from '~/components/Portfolio.vue'
import Footer from '~/components/Footer.vue'
import Services from '~/components/Services.vue'
import Approach from '~/components/Approach.vue'

export default {
  components: {
    Navbar,
    Header,
    About,
    Skills,
    Portfolio,
    Footer,
    Services,
    Approach,
  },
}
</script>
