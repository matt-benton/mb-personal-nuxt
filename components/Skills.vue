<template>
    <section id="skills">
        <div class="section-container">
            <div class="skills-container">
                <div class="skills-left">
                    <p class="left-text">
                        I am a <b>JavaScript</b> and <b>PHP</b> developer with experience using
                        various frameworks and libraries. I really love using <b>Vue.js</b> and
                        <b>Laravel</b> for my projects. I also enjoy designing and writing my own
                        <b>CSS</b>, but I have used lots of CSS libraries such as
                        <b>Bootstrap</b> and <b>TailwindCSS</b> over the years.
                    </p>
                </div>
                <div class="skills-right">
                    <div class="skills-grid">
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/html-5-logo-png-transparent-min.png"
                                alt="html5 logo"
                            />
                            html
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/css-3-logo-png-transparent-min.png"
                                alt="css3 logo"
                            />
                            css
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/javascript-logo-png-transparent-min.png"
                                alt="javascript logo"
                            />
                            javascript
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/vue-9-logo-png-transparent-min.png"
                                alt="vue logo"
                            />
                            vue
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/php-1-logo-png-transparent-min.png"
                                alt="php logo"
                            />
                            php
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/mysql-5-logo-png-transparent-min.png"
                                alt="mysql logo"
                            />
                            mysql
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/laravel-1-logo-png-transparent-min.png"
                                alt="laravel logo"
                            />
                            laravel
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style scoped>
section {
    background-color: var(--color-grey-light-1);
    justify-content: space-evenly;
    font-size: var(--text-lg);
    line-height: var(--line-height-medium);
}

.skills-container {
    display: flex;
    background-color: #fff;
    padding: var(--sp-7);
    margin: var(--sp-7) 0;
}

.skills-container > div {
    width: 50%;
}

.skills-left {
    display: flex;
    align-items: center;
    padding: var(--sp-6);
}

.left-text {
    color: var(--color-grey-dark-3);
    font-weight: 300;
}

.skills-right {
    display: flex;
    align-items: center;
    padding: var(--sp-6);
}

.skills-grid {
    display: grid;
    width: 100%;
    grid-template-columns: 50% 50%;
    grid-auto-rows: 1fr;
}

.skills-grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--sp-2);
    margin: var(--sp-2);
    border-radius: 5px;
    color: var(--color-grey-dark-2);
}

.skills-grid-item:nth-of-type(3n + 1) {
    background-color: var(--color-pink-transparent);
}

.skills-grid-item:nth-of-type(3n + 2) {
    background-color: var(--color-blue-transparent);
}

.skills-grid-item:nth-of-type(3n + 3) {
    background-color: var(--color-green-transparent);
}

img {
    max-height: var(--text-2xl);
    max-width: var(--text-2xl);
    margin-right: var(--sp-3);
    border: none;
}

@media (max-width: 640px) {
    .skills-container {
        flex-direction: column;
        margin: 0;
    }

    .skills-container > div {
        width: 100%;
    }

    section {
        padding: var(--sp-8) 5%;
    }
}
</style>
