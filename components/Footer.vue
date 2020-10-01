<template>
    <footer id="footer">
        <div class="footer-row email-row">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="contact-line">
                mattbenton@hey.com
            </span>
        </div>
        <div class="footer-row social-row">
            <a
                href="https://www.linkedin.com/in/matt-benton-6895951a3/"
                target="_blank"
                class="social-link"
            >
                <cld-image
                    cloudName="dheway9t7"
                    publicId="mb-personal/logos/linkedIn_pt5tr4"
                    height="30"
                    secure="true"
                />
            </a>
            <a href="https://codepen.io/matt-benton" target="_blank" class="social-link">
                <cld-image
                    cloudName="dheway9t7"
                    publicId="mb-personal/logos/codepen_edxrcz"
                    height="30"
                    secure="true"
                />
            </a>
        </div>
    </footer>
</template>

<script>
import { cldImage } from 'cloudinary-vue'
export default {}
</script>

<style scoped>
footer {
    font-size: var(--text-base);
    color: var(--color-grey-light-1);
    background-color: var(--color-grey-dark-1);
    padding: 6%;
    border-top: 1px solid var(--color-grey-dark-5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.email-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.dot {
    height: var(--text-xl);
    width: var(--text-xl);
    border-radius: 50%;
    display: inline-block;
    margin: var(--sp-2);
}

.dot:nth-of-type(1n + 1) {
    background-color: var(--color-pink);
}

.dot:nth-of-type(2n + 1) {
    background-color: var(--color-blue);
}

.dot:nth-of-type(3n + 1) {
    background-color: var(--color-green);
}

.contact-line {
    margin: 0 var(--sp-3);
}

.footer-row {
    padding: var(--sp-6) 0;
}

.social-row {
    display: flex;
    justify-content: center;
}

.social-link {
    margin: 0 var(--sp-3);
}
</style>
