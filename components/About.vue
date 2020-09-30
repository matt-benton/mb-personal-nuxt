<template>
    <section id="about">
        <div class="section-container">
            <div class="about-content-container">
                <img src="/img/matt-benton.jpg" alt="Photo of myself" />
                <p>
                    When I originally finished college I was headed for a career in the field of
                    education as a teacher. I had enthusiasm for learning as well as a passion for
                    crafting experiences that would enhance the knowledge of my students. However
                    not everything about education was for me and I spent several years learning to
                    write code. I returned to school to earn a CS degree. Now, instead of learning
                    pedagogy I have become a lifetime learner of frameworks, libraries, and coding
                    languages. I absolutely love it - I write code almost every day and I hope to
                    one day achieve the momentous goal of creating the perfect pizza tracker. Aside
                    from programming I enjoy music, books, videogames and riding my bike.
                </p>
            </div>
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
    font-size: var(--text-base);
    line-height: 2.2rem;
    display: flex;
    justify-content: center;
}

.about-content-container {
    padding: 5rem 9rem;
}

img {
    height: 26rem;
    width: 26rem;
    border-radius: 50%;
    float: left;
    shape-outside: circle();
    margin: 1rem;
    border: 2px solid white;
    filter: saturate(1.2);
}

@media (max-width: 1024px) {
    .about-content-container {
        padding: 0;
    }

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
        line-height: 1.6rem;
        padding: var(--spacing-large) var(--spacing-medium);
    }
}
</style>
