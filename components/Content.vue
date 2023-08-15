<template>
  <main class="m-auto" style="max-width: 1180px">
    <AlbumImages></AlbumImages>
    <section class="d-flex justify-content-between section__top">
      <div class="leftContent__container--top">
        <Advertising></Advertising>
        <Blogging></Blogging>
        <div class="d-flex justify-content-between">
          <WebDesign></WebDesign>
          <Marketing></Marketing>
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
import WebDesign from "./WebDesign.vue";
import Advertising from "./Advertising.vue";
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
import WordPress from'./WordPress.vue';
import FilterByTag from './FilterByTag.vue';
import Technology from './Technology.vue'
export default {
  components: {
    AlbumImages,
    Advertising,
    Blogging,
    WebDesign,
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
    Technology
  },
};
</script>
<style >

.section__bottom{
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
}
.leftContent__container--top{
  width: 66.1%;
}
.rightContent__container--top{
  width: 32.4%;
}
.leftContent__container--bottom {
  width: 65.3%;
}
.rightContent__container--bottom {
  width: 32%;
}
</style>
