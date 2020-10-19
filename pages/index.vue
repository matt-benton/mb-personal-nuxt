<template>
    <div>
        <div class="container">
            <Header />
            <About />
            <Skills />
            <Portfolio @large-project-image-clicked="showModal($event)" />
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from '~/components/Header.vue'
import About from '~/components/About.vue'
import Skills from '~/components/Skills.vue'
import Portfolio from '~/components/Portfolio.vue'
import Footer from '~/components/Footer.vue'

export default {
    components: {
        Header,
        About,
        Skills,
        Portfolio,
        Footer,
    },
}
</script>
