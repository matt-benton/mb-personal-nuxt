<template>
  <section id="about">
    <h3 class="section-header">About Me</h3>
    <div class="about-container">
      <div class="image-wrap">
        <img src="/img/matt-benton.jpg" alt="Photo of myself" />
      </div>
      <p>
        Formerly in the field of education, I moved into web development and started building
        websites for clients in 2016. Since then I have nurtured an enjoyment for building
        applications that has motivated me to continue growing and developing my skills.
      </p>
      <p>
        My goal when developing is to deliver simple, easy-to-use solutions that are as intuitive as
        possible. I focus on delivering the best experience to the user. Additionally, I write tests
        in order ensure reliability and make sure that the project is easily maintainable for the
        long-term.
      </p>
      <p>
        In addition to web development I also hike, ride my bike, and enjoy videogames in my free
        time.
      </p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
section {
  line-height: 2.6rem;
  font-size: var(--text-lg);
}

p {
  margin-bottom: var(--sp-3);
}

.image-wrap {
  height: 29rem;
  width: 29rem;
  border-radius: 50%;
  background: linear-gradient(-45deg, var(--color-blue-dark), var(--color-blue));
  padding: 2px;
  shape-outside: circle();
  float: left;
  margin-right: var(--sp-6);
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
