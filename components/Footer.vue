<template>
  <footer
    class="relative flex flex-column items-top justify-content-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <div
      class="footer__container d-flex flex-column justify-content-center m-auto"
      style="max-width: 1180px"
    >
      <div class="footer__content d-flex justify-content-between">
        <div class="footer__content__intro">
          <h3>Introduction</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim
            velit, laoreet non feugiat et, gravida a nibh. Sed at ex.
          </p>
        </div>
        <ul class="footer__content--ul padding__left--12px">
          <h3>Company</h3>
          <li class="footer__content--li mt__12px">
            <NuxtLink to="">About Us</NuxtLink>
          </li>
          <li class="footer__content--li">
            <NuxtLink to="">Meet Our Team</NuxtLink>
          </li>
          <li class="footer__content--li">
            <NuxtLink to="">News</NuxtLink>
          </li>
          <li class="footer__content--li">
            <NuxtLink to="">Contact Us</NuxtLink>
          </li>
        </ul>
        <ul class="footer__content--ul padding__left--12px">
          <h3>Products</h3>
          <li class="footer__content--li mt__12px">
            <NuxtLink to="">Services</NuxtLink>
          </li>
          <li class="footer__content--li">
            <NuxtLink to="">Products List</NuxtLink>
          </li>
          <li class="footer__content--li">
            <NuxtLink to="">Plans & Pricing</NuxtLink>
          </li>
          <li class="footer__content--li">
            <NuxtLink to="">Partners</NuxtLink>
          </li>
        </ul>
        <div class="footer__content__intro padding__left--12px">
          <h3>Newsletter</h3>
          <p style="margin-bottom: 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <NuxtLink to="">Subscribe now!</NuxtLink>
        </div>
      </div>
      <ul
        class="footer__content--ul footer__content--subject d-flex justify-content-center w-100"
      >
        <li class="footer__content--li">
          <NuxtLink to="">Single Page</NuxtLink>
        </li>
        <li class="footer__content--li">
          <NuxtLink to="">Full Width</NuxtLink>
        </li>
        <li class="footer__content--li">
          <NuxtLink to=""> 404 Page</NuxtLink>
        </li>
        <li class="footer__content--li">
          <NuxtLink to="">Search Results</NuxtLink>
        </li>
      </ul>
      <h3
        style="
          font-size: 15px;
          color: #fff;
          font-family: Inter;
          font-weight: 400;
        "
        class="d-flex justify-content-center"
      >
        WordPress Theme by WPEnjoy
      </h3>
      <ul class="footer__icon d-flex justify-content-center">
        <li class="footer__icon__item">
          <a href="https://#">
            <b-icon icon="twitter"></b-icon>
          </a>
        </li>
        <li class="footer__icon__item">
          <a href="https://#">
            <b-icon icon="facebook"></b-icon>
          </a>
        </li>
        <li class="footer__icon__item">
          <a href="https://#">
            <b-icon icon="instagram"></b-icon>
          </a>
        </li>
        <li class="footer__icon__item">
          <a href="https://#">
            <b-icon icon="youtube"></b-icon>
          </a>
        </li>
        <li class="footer__icon__item">
          <a href="https://#">
            <img src="../static/assets/footer-dribbble.svg" />
          </a>
        </li>
        <li class="footer__icon__item">
          <a href="https://#">
            <b-icon icon="linkedin"></b-icon>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style>
footer {
  background-color: #000;
  padding: 40px 40px 30px 40px;
}
.footer__container {
  display: flex;
}

.footer__content__intro {
  width: 24%;
}
.footer__content__intro a {
  background-color: #0693e3;
  padding: 14px 20px;
  color: #fff !important;
  font-size: 16.8px;
}
.footer__content__intro p {
  margin-bottom: 20px;
}
.footer__content--ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 25%;
}

.padding__left--12px {
  padding-left: 12px;
}
.footer__container h3{
  font-size: 15px;
  font-family:"Inter";
  color: #fff
}
.footer__content--ul h3,
.footer__content__intro h3 {
  font-size: 18px;
  font-weight: 700;
  color: #fff !important;
}
.footer__content--li {
  margin-top: 5px;
}
.mt__12px {
  margin-top: 12px;
}
.footer__content--li a,
.footer__content__intro p {
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #fff !important;
  margin-top: 14px;
}
.footer__content--subject {
  margin-top: 58px;
  margin-bottom: 25px;
}
.footer__content--subject li {
  margin: 0 10px;
}
.footer__content--subject li a {
  font-size: 15px;
}
.footer__icon {
  list-style: none;
  margin-top: 10px;
  padding: 0;
}
.footer__icon__item {
  margin: 4.8px 7.3px;
}
.footer__icon__item:hover{
  transform: scale(1.1);
}
.footer__icon__item a svg {
  font-size: 13px;
  color: #fff;
}
.footer__icon__item a img {
  width: 18px;
}
.footer__icon__item:nth-child(1) a,
.footer__icon__item:nth-child(2) a,
.footer__icon__item:nth-child(3) a,
.footer__icon__item:nth-child(4) a,
.footer__icon__item:nth-child(5) a,
.footer__icon__item:nth-child(6) a {
  background-color: #0693e3;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  border-radius: 12px;
}
.footer__icon__item:nth-child(2) a {
  background-color: #1778f2;
}
.footer__icon__item:nth-child(3) a {
  background-color: #f00075;
}
.footer__icon__item:nth-child(4) a {
  background-color: #ff0000;
}
.footer__icon__item:nth-child(5) a {
  background-color: #e94c89;
}
.footer__icon__item:nth-child(6) a {
  background-color: #0d66c2;
}
@media screen and (max-width: 768px) {
  footer{
    margin-top: 44px;
    padding: 20px
  }
  .footer__content {
    flex-wrap: wrap;
    gap: 35px;
  }

  .footer__content__intro,
  .footer__content--ul{
    padding: 0;
    width: 100%;
  }
  .footer__content__intro p{
    margin-bottom: 0;
  }
}
</style>
