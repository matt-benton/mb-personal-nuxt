<template>
    <section class="skills" id="skills">
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
                                class="skills-grid-logo"
                                alt="html5 logo"
                            />
                            html
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/css-3-logo-png-transparent-min.png"
                                class="skills-grid-logo"
                                alt="css3 logo"
                            />
                            css
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/javascript-logo-png-transparent-min.png"
                                class="skills-grid-logo"
                                alt="javascript logo"
                            />
                            javascript
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/sass-1-logo-png-transparent-min.png"
                                class="skills-grid-logo"
                                alt="sass logo"
                            />
                            sass
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/jquery-1-logo-png-transparent-min.png"
                                class="skills-grid-logo"
                                alt="jquery logo"
                            />
                            jquery
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/vue-9-logo-png-transparent-min.png"
                                class="skills-grid-logo"
                                alt="vue logo"
                            />
                            vue
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/angular-logo-png-transparent-min.png"
                                class="skills-grid-logo"
                                alt="angularjs logo"
                            />
                            angularjs
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/php-1-logo-png-transparent-min.png"
                                class="skills-grid-logo"
                                alt="php logo"
                            />
                            php
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/mysql-5-logo-png-transparent-min.png"
                                class="skills-grid-logo"
                                alt="mysql logo"
                            />
                            mysql
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/laravel-1-logo-png-transparent-min.png"
                                class="skills-grid-logo"
                                alt="laravel logo"
                            />
                            laravel
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/git-logo-png-transparent-min.png"
                                class="skills-grid-logo"
                                alt="git logo"
                            />
                            git
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/bootstrap-4-logo-png-transparent-min.png"
                                class="skills-grid-logo"
                                alt="bootstrap 4 logo"
                            />
                            bootstrap
                        </div>
                        <div class="skills-grid-item">
                            <img
                                src="/img/logos/tailwindcss.png"
                                class="skills-grid-logo"
                                alt="tailwindcss logo"
                            />
                            tailwindcss
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

<style>
.skills {
    background-color: var(--color-grey-light-1);
    justify-content: space-evenly;
    font-size: var(--font-small);
}

.skills-container {
    display: flex;
    background-color: #fff;
    padding: var(--spacing-large);
    margin: var(--spacing-large) 0;
}

.skills-left {
    display: flex;
    align-items: center;
    padding: var(--spacing-large);
}

.left-text {
    color: var(--color-grey-dark-3);
    font-weight: 300;
    line-height: 2.2rem;
}

.skills-right {
    display: flex;
    align-items: center;
    padding: var(--spacing-large);
}

.skills-grid {
    display: flex;
    flex-wrap: wrap;
}

.skills-grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-small);
    margin: var(--spacing-small);
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

.skills-grid-logo {
    max-height: var(--font-large);
    max-width: var(--font-large);
    margin-right: 1rem;
}

@media (max-width: 1024px) {
    .skills-container {
        flex-direction: column;
    }

    .skills-left {
        margin-right: 0;
    }

    .skills-right {
        margin-left: 0;
    }
}

@media (max-width: 768px) {
    .skills-container {
        padding: var(--spacing-small);
    }
}

@media (max-width: 640px) {
    .skills {
        padding: 0 0;
    }

    .skills-left {
        padding: var(--spacing-medium);
    }

    .skills-right {
        padding: var(--spacing-medium);
    }

    .left-text {
        line-height: var(--line-height-medium);
    }

    .skills-grid-item {
        padding: var(--spacing-small);
    }
}
</style>
