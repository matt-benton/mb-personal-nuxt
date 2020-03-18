<template>
    <div class="container">
        <Header />
        <Services />
        <About />
        <Skills />
        <Portfolio />
    </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Services from '~/components/Services.vue'
import About from '~/components/About.vue'
import Skills from '~/components/Skills.vue'
import Portfolio from '~/components/Portfolio.vue'

export default {
    components: {
        Header,
        Services,
        About,
        Skills,
        Portfolio,
    }
}
</script>

<style>
</style>
