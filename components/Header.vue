<template>
    <header class="header">
        <div class="hero">
            <h1 class="hero-title">
                Hi, my name is <b>Matt Benton</b> and I'm a <b>web developer</b> from Birmingham, Alabama
            </h1>
            <h2 class="hero-subtitle">I create web applications with clean interfaces, intuitive user experiences, and reliability.</h2>
            <div class="button-container">
                <a href="#work"><button class="btn">Check Out My Portfolio</button></a>
                <a href="#skills"><button class="btn">See My Skills</button></a>
                <a href="#footer"><button class="btn">Contact Me</button></a>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>
.header {
    color: var(--color-grey-dark-1);
    display: grid;
    grid-template-rows: min-content 1fr;
    padding: var(--spacing-large);
}

.hero {
    display: flex;
    flex-direction: column;
    padding: 16% 10%;
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
    background-color: rgb(18, 128, 191);
    color: white;
    font-size: 22px;
    padding: 18px 28px;
    border: none;
    cursor: pointer;
    transition: background-color .3s;
}

@media (max-width: 1024px) {
    .hero {
        padding: 16% 3%;
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

    .btn {
        width: 100%;
        margin-bottom: 10px;
    }
}

@media (max-width: 640px) {
    .hero {
        padding-left: 0;
        padding-right: 0;
    }

    .hero-title {
        margin-bottom: var(--spacing-medium);
        font-size: var(--font-large);
    }

    .hero-subtitle {
        font-size: var(--font-medium);
        padding-bottom: var(--spacing-small);
    }
}

</style>
