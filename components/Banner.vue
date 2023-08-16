<template>
  <section class="banner__container">
    <ul class="banner__container__images d-flex">
      <li class="banner__images__content" v-for="image in images">
        <NuxtLink to="">
          <img alt="" :src="image.src" />
          <div class="banner__images__info">
            <h2>{{ image.title }}</h2>
          </div>
        </NuxtLink>
        <h3>SEO</h3>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    let images = [
      {
        src: "https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/desk-office-400x266.jpeg",
        title: "How to Use Amazon Posts to Promote Your Products",
      },
      {
        src: "https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/laptop-work-400x266.jpeg",
        title: "The Definitive Guide to Online Reputation Management",
      },
      {
        src: "https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/education-business-400x266.jpeg",
        title: "How to Write Content For People and Optimize For Google",
      },
    ];
    return {
      images,
    };
  },
};
</script>

<style>
.banner__container {
  margin-top: 15px;
}
.banner__container__images {
  list-style: none;
  padding: 0;
}
.banner__images__content {
  padding: 0 10px;
  position: relative;
  width: 33.3%;
}
.banner__images__content:nth-child(1) {
  padding-left: 0;
}

.banner__images__content:nth-child(3) {
  padding-right: 0;
}
.banner__images__content > .nuxt-link-active{
  height: 100%;
  display:block
}
.banner__images__content > a > img {
  position: relative;
  filter: brightness(80%);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner__images__content > a > .banner__images__info {
  position: absolute;
  bottom: 0px;
  padding: 0px 20px 19.5px 20px;
}
.banner__images__content > a > .banner__images__info > h2 {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
}
.banner__images__content h3 {
  color: #fff;
  font-size: 11px;
  font-family: "Inter";
  height: 20px;
  line-height: 20px;
  padding: 0 6px;
  text-transform: uppercase;
  position: absolute;
  z-index: 1;
  top: 0;
}
.banner__images__content:nth-child(1) h3 {
  background-color: #0099e5;
}
.banner__images__content:nth-child(2) h3 {
  background-color: #34bf49;
}
.banner__images__content:nth-child(3) h3 {
  background-color: #f47721;
}
@media screen and (max-width: 768px) {
  .banner__container{
    margin-top: 10px;
  }
}
@media screen and (max-width: 600px) {
  .banner__container__images {
    width: 100%;
    gap: 20px;
    flex-wrap: wrap;
  }
  .banner__images__content{
    width: 100%;
    padding: 0;
  }
  .banner__images__content > a > img {
    height: auto;
    width: 100%;

  }
}
</style>
