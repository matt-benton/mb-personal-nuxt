<template>
    <header class="header">
        <!-- <Navbar></Navbar> -->
        <div class="header__hero">
            <h1 class="header__hero--title">
                Hi, my name is <b>Matt Benton</b> and I'm a <b>web developer</b> from Birmingham, Alabama
            </h1>
            <h2 class="header__hero--subtitle">I create web applications with clean interfaces, intuitive user experiences, and reliability.</h2>
            <div class="button-container">
                <a href="#work"><button class="btn">Check Out My Portfolio</button></a>
                <a href="#skills"><button class="btn">See My Skills</button></a>
                <a href="#footer"><button class="btn">Contact Me</button></a>
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

<style>

.btn {
    background-color: rgb(18, 128, 191);
    color: white;
    font-size: 22px;
    padding: 18px 28px;
    border: none;
    cursor: pointer;
    transition: background-color .3s;
}

</style>
