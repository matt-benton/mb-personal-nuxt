<template>
    <div class="container">
        <Header />
        <Services />
        <About />
        <Skills />
        <Portfolio @large-project-image-clicked="showModal($event)" />
        <Modal :hidden="modal.hidden" :image="modal.image" />
    </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Services from '~/components/Services.vue'
import About from '~/components/About.vue'
import Skills from '~/components/Skills.vue'
import Portfolio from '~/components/Portfolio.vue'
import Modal from '~/components/Modal.vue'

export default {
    data() {
        return {
            modal: {
                hidden: true,
                image: '',
            }
        }
    },
    components: {
        Header,
        Services,
        About,
        Skills,
        Portfolio,
        Modal,
    },
    methods: {
        showModal(image) {
            this.modal.hidden = false
            this.modal.image = image
        }
    }
}
</script>

<style>
</style>
