<template>
  <section class="filter">
    <HeaderSection
      name="Filter By Tag"
      nuxtlink="https://demo.wpenjoy.com/visualmag-pro/tag/books/"
    ></HeaderSection>
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
  </section>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";
export default {
  component: {
    HeaderSection,
  },
};
</script>
<style>
.filter {
  margin-top: 70px;
}

.filter__body__img {
  filter: brightness(80%);
  width: 100%;
}
.filter__container--main{
  padding-top: 16px;
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
  font-size: clamp(1.125rem, 1.0263rem + 0.3947vw, 1.35rem);;
  color: #fff;
  bottom: 0px;
  padding: 0px 10px 20px 20px;
  margin: 0;
  font-weight: bold;
}
</style>
