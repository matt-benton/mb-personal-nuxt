<template>
    <div>
        <div class="container">
            <Header />
            <About />
            <Skills />
            <Portfolio @large-project-image-clicked="showModal($event)" />
            <Modal :hidden="modal.hidden" :image="modal.image" @modal-closed="hideModal" />
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from '~/components/Header.vue'
import About from '~/components/About.vue'
import Skills from '~/components/Skills.vue'
import Portfolio from '~/components/Portfolio.vue'
import Modal from '~/components/Modal.vue'
import Footer from '~/components/Footer.vue'

export default {
    data() {
        return {
            modal: {
                hidden: true,
                image: '',
            },
        }
    },
    components: {
        Header,
        About,
        Skills,
        Portfolio,
        Modal,
        Footer,
    },
    methods: {
        showModal(image) {
            this.modal.hidden = false
            this.modal.image = image
        },
        hideModal() {
            this.modal.hidden = true
        },
    },
}
</script>
