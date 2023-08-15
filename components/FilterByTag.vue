<template>
  <section class="filter">
    <HeaderSection name="Filter By Tag" nuxtlink="https://demo.wpenjoy.com/visualmag-pro/tag/books/"></HeaderSection>
    <div class="d-flex filter__container">
      <div class="filter__container--main">
        <NuxtLink
          to="https://demo.wpenjoy.com/visualmag-pro/how-to-create-the-perfect-h1-tag-for-seo/"
        >
          <div class="filter__body">
            <img
              src="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/office-supplies-400x266.jpeg"
              alt=""
              class="filter__body__img"
            />
            <h2 class="filter__body__title">
              How to Create the Perfect H1 Tag for SEO
            </h2>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderSection from "./HeaderSection.vue"
export default {
  component:{
    HeaderSection,
  }
};
</script>
<style>
.filter {
  margin-top: 4vw;
}
.filter__header {
  border-top: 1px solid #dddddd;
  position: relative;
  width: 100%;
}

.filter__header a {
  width: fit-content;
  font-size: 23px;
  color: #000;
  border-bottom: 2px solid #0099e5;
  display: inline-block;
  position: absolute;
  bottom: 0px;
  padding: 10px 0;
  font-weight: bold;
}
.filter__body__img {
  filter: brightness(80%);
  width: 100%;
}
.filter__container--main a {
  text-decoration: none;
}
.filter__body {
  position: relative;

}
.filter__body__title {
  position: absolute;
  z-index: 1;
  font-size: calc(10px + 0.75vw);
  color: #fff;
  bottom: 0px;
  padding: 0px 20px 20px 20px;
  margin: 0;
  font-weight: bold;
}

</style>
