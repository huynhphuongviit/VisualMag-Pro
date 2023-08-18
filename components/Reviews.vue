<template>
  <section class="reviews">
    <HeaderSection
      name="Reviews"
      nuxtlink="/category/reviews/"
    ></HeaderSection>
    <div class="d-flex reviews__container">
      <div class="reviews__container--main">
        <NuxtLink
          to="/the-6-step-guide-to-make-your-mobile-site-load-faster/"
        >
          <div class="reviews__body">
            <img
              src="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/office-graph2-400x266.jpeg"
              alt=""
              class="reviews__body__img"
            />
            <h2 class="reviews__body__title">
              The 6-Step Guide to Make Your Mobile Site Load Faster
            </h2>
          </div>
        </NuxtLink>
        <ul class="reviews__body__content">
          <li class="reviews__body__item">
            <h3>
              <NuxtLink
                to="https://demo.wpenjoy.com/visualmag-pro/how-to-use-instagram-story-highlights-on-a-brand-account/"
                >How to Use Instagram Story Highlights on a Brand
                Account</NuxtLink
              >
            </h3>
          </li>
          <li class="reviews__body__item">
            <h3>
              <NuxtLink
                to="https://demo.wpenjoy.com/visualmag-pro/how-to-use-thought-leadership-marketing/"
                >How to Use Thought Leadership Marketing</NuxtLink
              >
            </h3>
          </li>
          <li class="reviews__body__item">
            <h3>
              <NuxtLink
                to="https://demo.wpenjoy.com/visualmag-pro/how-does-iaas-affect-your-e-commerce-site/"
                >How Does IaaS Affect Your e-Commerce Site</NuxtLink
              >
            </h3>
          </li>
          <li class="reviews__body__item">
            <h3>
              <NuxtLink
                to="https://demo.wpenjoy.com/visualmag-pro/what-are-influencer-engagement-marketplaces/"
                >What Are Influencer Engagement Marketplaces</NuxtLink
              >
            </h3>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style>
.reviews {
  margin-top: 40px;
}
.reviews__body__img {
  filter: brightness(80%);
  width: 100%;
}
.reviews__container--main{
  margin-top:  16px;
}
.reviews__container--main a {
  text-decoration: none;
}
.reviews__body {
  position: relative;
}
.reviews__body__title {
  position: absolute;
  z-index: 1;
  font-size: 18px;
  color: #fff;
  bottom: 0px;
  padding: 0px 20px 20px 20px;
  margin: 0;
  font-weight: bold;
}
.reviews__body__content {
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
}
.reviews__body__content .reviews__body__item h3 {
  font-size: 17px;
  margin: 15px 0;
  font-family: "Kumbh-Sans", sans-serif;
}
.reviews__body__content .reviews__body__item h3 a {
  color: #000;
}
@media screen and (max-width: 768px) {
  .reviews__container--main{
    width: 100%;
  }
}
</style>
