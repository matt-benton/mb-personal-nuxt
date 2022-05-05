<template>
  <section id="approach">
    <h3 class="section-header">Approach</h3>
    <ul>
      <li>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          Writing tests is important</span
        >
      </li>
      <li>
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clip-rule="evenodd"
            /></svg
          >Moving slow means moving fast</span
        >
      </li>
      <li>
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
            /></svg
          >User friendliness is key</span
        >
      </li>
    </ul>
    <ul>
      <li>
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
            /></svg
          >Good code has to be readable</span
        >
      </li>
      <li>
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              clip-rule="evenodd"
            /></svg
          >Communication is vital</span
        >
      </li>
      <li>
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg
          >Caffeine is great, sleep is greater</span
        >
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 50% 50%;
  column-gap: var(--sp-3);
}

h3 {
  grid-column: span 2;
}

li {
  margin-bottom: var(--sp-2);
  font-size: var(--text-xl);
}

li span {
  display: inline-flex;
  align-items: center;
}

svg {
  height: var(--text-lg);
  width: var(--text-lg);
  margin-right: var(--sp-2);
}

@media (max-width: 540px) {
  section {
    grid-template-rows: min-content 1fr 1fr;
    grid-template-columns: 100%;
  }

  h3 {
    grid-column: span 1;
  }
}
</style>
