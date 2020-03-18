<template>
    <header class="header">
        <!-- <Navbar></Navbar>         -->
        <div class="header__hero">
            <!-- <h1 class="header__hero--title">Matt Benton</h1>
            <h2 class="header__hero--subtitle">Birmingham based web developer</h2>
            <p class="header__hero--text">I create web applications with a focus on clean interfaces, intuitive user experiences and reliability.</p> -->
            <h1 class="header__hero--title">
                Hi, my name is <b>Matt Benton</b> and I'm a <b>web developer</b> from Birmingham, Alabama
            </h1>
            <h2 class="header__hero--subtitle">I create web applications with clean interfaces, intuitive user experiences, and reliability.</h2>
            <div class="button-container">
                <button class="btn">Check Out My Portfolio</button>
                <button class="btn">See My Skills</button>
                <button class="btn">Contact Me</button>
            </div>
        </div>
    </header>
</template>

<script>
import Navbar from './navbar'

export default {

    components: {
        Navbar
    }
}
</script>

<style scoped>
.btn {
    background-color: rgb(30, 20, 163);
    color: white;
    font-size: var(--font-small);
    padding: 18px 28px;
    border: none;
    border-radius: 5px;
}
</style>
