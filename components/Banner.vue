<template>
  <section class="banner__container">
    <div class="banner__container__images d-flex">
      <div class="banner__images__content" v-for="image in images">
        <NuxtLink to="">
          <img alt="" :src="image.src" />
          <div class="banner__images__info">
            <h2>{{ image.title }}</h2>
          </div>
        </NuxtLink>
        <h3>SEO</h3>
      </div>
    </div>
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

<style >
.banner__container {
  margin-top: 15px;
}

.banner__images__content {
  padding: 0 10px;
  position: relative;
}
.banner__images__content:nth-child(1) {
  padding-left: 0;
}

.banner__images__content:nth-child(3) {
  padding-right: 0;
}
.banner__images__content > a > img {
  height: 252px;
  object-fit: cover;
  position: relative;
  filter: brightness(80%)
}

.banner__images__content > a > .banner__images__info{
  position:absolute;
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
  font-size: 11px ;
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
  background-color: #F47721;
}
</style>
