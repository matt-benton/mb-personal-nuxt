<template>
    <footer class="footer" id="footer">
        <div class="footer-row">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="contact-text">Contact Me: mattbenton10@gmail.com</span>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer {
    font-size: var(--font-small);
    color: var(--color-grey-light-1);
    background-color: var(--color-grey-dark-1);
    padding: 6%;
    border-top: 1px solid var(--color-grey-dark-5);
}

.footer-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.dot {
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
    display: inline-block;
    margin: .8rem;
}

.dot:nth-of-type(1) {
    background-color: var(--color-pink);
}

.dot:nth-of-type(2) {
    background-color: var(--color-blue);
}

.dot:nth-of-type(3) {
    background-color: var(--color-green);
}

.contact-text {
    margin: 0 var(--spacing-large);
}

</style>