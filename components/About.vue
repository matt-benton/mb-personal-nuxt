<template>
  <section id="about">
    <div class="about-container">
      <div class="image-wrap">
        <img src="/img/matt-benton.jpg" alt="Photo of myself" />
      </div>
      <p>
        When I originally finished college I was headed for a career in the field of education as a
        teacher. I had enthusiasm for learning as well as a passion for crafting experiences that
        would enhance the knowledge of my students. However not everything about education was for
        me and instead I spent several years learning to write code. I returned to school to earn a
        CS degree. Now, instead of learning pedagogy I have become a lifetime learner of frameworks,
        libraries, and coding languages. I absolutely love it - I write code almost every day and I
        hope to one day achieve the momentous goal of creating the perfect pizza tracker. Aside from
        programming I enjoy hiking, music, books, videogames and riding my bike.
      </p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
section {
  line-height: 2.4rem;
}

.image-wrap {
  height: 29rem;
  width: 29rem;
  border-radius: 50%;
  background: linear-gradient(-45deg, var(--color-pink-dark), var(--color-pink));
  padding: 3px;
  shape-outside: circle();
  float: left;
  margin-right: var(--sp-4);
}

img {
  border-radius: 50%;
  filter: saturate(1.2);
  border: none;
}

@media (max-width: 1024px) {
  .image-wrap {
    height: 19rem;
    width: 19rem;
  }
}
</style>
