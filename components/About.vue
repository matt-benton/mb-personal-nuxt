<template>
    <section id="about">
        <div class="about-container">
            <img src="/img/matt-benton.jpg" alt="Photo of myself" />
            <p>
                When I originally finished college I was headed for a career in the field of
                education as a teacher. I had enthusiasm for learning as well as a passion for
                crafting experiences that would enhance the knowledge of my students. However not
                everything about education was for me and I spent several years learning to write
                code. I returned to school to earn a CS degree. Now, instead of learning pedagogy I
                have become a lifetime learner of frameworks, libraries, and coding languages. I
                absolutely love it - I write code almost every day and I hope to one day achieve the
                momentous goal of creating the perfect pizza tracker. Aside from programming I enjoy
                music, books, videogames and riding my bike.
            </p>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style scoped>
section {
    background: linear-gradient(to right, var(--color-blue), var(--color-blue-dark));
    color: var(--color-grey-light-1);
    font-size: var(--text-lg);
    line-height: 2.4rem;
    display: flex;
    justify-content: center;
    padding: var(--sp-8) 0;
}

.about-container {
    width: 750px;
}

img {
    height: 28rem;
    width: 28rem;
    border-radius: 50%;
    float: left;
    shape-outside: circle();
    margin: var(--sp-3);
    border: 2px solid white;
    filter: saturate(1.2);
}

@media (max-width: 1024px) {
    img {
        height: 18rem;
        width: 18rem;
    }
}

@media (max-width: 768px) {
    img {
        height: 10rem;
        width: 10rem;
        margin-left: 0;
    }
}

@media (max-width: 640px) {
    section {
        padding: var(--sp-8) 5%;
    }

    img {
        height: 18rem;
        width: 18rem;
    }
}
</style>
