<template>
  <main class="m-auto" style="max-width: 1180px">
    <AlbumImages></AlbumImages>
    <section class="d-flex justify-content-between section__top">
      <div class="leftContent__container--top">
        <Marketing style='width: 100%' title="advertising"></Marketing>
        <Blogging></Blogging>
        <div
          class="leftContent__container--item d-flex justify-content-between"
        >
          <Marketing title="web-design"></Marketing>
          <Marketing title="marketing"></Marketing>
        </div>
      </div>
      <div class="rightContent__container--top">
        <FollowUs></FollowUs>
        <Reviews></Reviews>
        <News></News>
        <Fashion></Fashion>
      </div>
    </section>
    <ImagesBanner></ImagesBanner>
    <section class="d-flex section__bottom">
      <div class="leftContent__container--bottom">
        <SocialMedia></SocialMedia>
        <Technology></Technology>
      </div>
      <div class="rightContent__container--bottom">
        <Lifestyle></Lifestyle>
        <Business></Business>
        <WordPress></WordPress>
        <FilterByTag></FilterByTag>
      </div>
    </section>
  </main>
</template>

<script>
import AlbumImages from "./AlbumImages.vue";
import Marketing from "./Marketing.vue";
import Blogging from "./Blogging.vue";
import ImagesBanner from "./Banner.vue";
import FollowUs from "./FollowUs.vue";
import Reviews from "./Reviews.vue";
import News from "./News.vue";
import Fashion from "./Fashion.vue";
import SocialMedia from "./SocialMedia.vue";
import Lifestyle from "./Lifestyle.vue";
import Business from "./Business.vue";
import WordPress from "./WordPress.vue";
import FilterByTag from "./FilterByTag.vue";
import Technology from "./Technology.vue";
export default {
  components: {
    AlbumImages,
    Blogging,
    Marketing,
    ImagesBanner,
    FollowUs,
    Reviews,
    News,
    Fashion,
    SocialMedia,
    Lifestyle,
    Business,
    WordPress,
    FilterByTag,
    Technology,
  },
};
</script>
<style>
.section__bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
}
.leftContent__container--top {
  width: 65%;
}
.rightContent__container--top {
  width: 32.4%;
}
.leftContent__container--bottom {
  width: 65.3%;
}
.rightContent__container--bottom {
  width: 32.3%;
}
@media screen and (max-width: 1180px) {
  main {
    width: 98%;
  }
}
@media screen and (max-width: 960px) {
  main {
    width: 96%;
  }
}
@media screen and (max-width: 768px) {
  .section__top {
    flex-direction: column;
  }
  .leftContent__container--bottom,
  .rightContent__container--bottom,
  .leftContent__container--top,
  .rightContent__container--top {
    width: 100%;
  }
  .leftContent__container--item {
    flex-direction: column;
  }
  .section__bottom {
    flex-direction: column;
  }
}
</style>
