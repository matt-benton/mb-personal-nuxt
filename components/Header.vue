<template>
    <header class="header">
        <div class="section-container">
            <div class="hero">
                <h1 class="hero-title">
                    Hi, my name is
                    <b>Matt Benton</b> and I'm a <b>web developer</b> from Birmingham, Alabama
                </h1>
                <h2 class="hero-subtitle">
                    I create web applications with clean interfaces, intuitive user experiences, and
                    reliability.
                </h2>
                <div class="button-container">
                    <a href="#work" @click.prevent="scrollTo('#work')"
                        ><button class="btn">Check Out My Portfolio</button></a
                    >
                    <nuxt-link to="/posts"><button class="btn">Read My Blog</button></nuxt-link>
                    <a href="#skills" @click.prevent="scrollTo('#skills')"
                        ><button class="btn">See My Skills</button></a
                    >
                    <a href="#footer" @click.prevent="scrollTo('#footer')"
                        ><button class="btn">Contact Me</button></a
                    >
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        scrollTo(selector) {
            document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })
        },
    },
}
</script>

<style>
.header {
    color: var(--color-grey-dark-1);
    display: grid;
    grid-template-rows: min-content 1fr;
    margin: auto;
}

.hero {
    display: flex;
    flex-direction: column;
    padding: 16% 0;
}

.hero-title {
    font-size: var(--font-largest);
    font-weight: 300;
    margin-bottom: var(--spacing-medium);
}

.hero-subtitle {
    font-size: var(--font-large);
    font-weight: 300;
    padding-bottom: var(--spacing-medium);
}

.btn {
    background-color: var(--color-blue-dark);
    color: white;
    font-size: 22px;
    padding: 18px 28px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: var(--color-pink-dark);
}

@media (max-width: 1024px) {
    .hero {
        padding: 16% 3%;
    }

    .btn {
        width: 100%;
        margin-bottom: 10px;
    }
}

@media (max-width: 768px) {
    .hero {
        padding-left: var(--spacing-small);
        padding-right: var(--spacing-small);
    }

    .hero-title {
        font-size: var(--font-large);
    }

    .hero-subtitle {
        font-size: var(--font-medium);
        padding-bottom: var(--spacing-large);
    }
}

@media (max-width: 640px) {
    .header {
        padding: var(--spacing-large) var(--spacing-medium);
    }

    .hero {
        padding-left: var(--spacing-small);
        padding-right: var(--spacing-small);
    }

    .hero-title {
        line-height: 2.8rem;
        margin-bottom: var(--spacing-medium);
        font-size: var(--font-large);
    }

    .hero-subtitle {
        font-size: var(--font-medium);
        padding-bottom: var(--spacing-small);
    }
}
</style>
