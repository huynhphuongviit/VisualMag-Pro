<template>
  <section class="detail__right">
    <a href="https://wpenjoy.com/themes/visualmag-pro/">
      <img
        class="img__main"
        alt=""
        src="https://demo.wpenjoy.com/visualmag-pro/wp-content/themes/visualmag-pro/assets/images/300x250.png"
      />
    </a>
    <FollowUs style="margin-top: 72px"></FollowUs>
    <div class="padding--20px">
      <RecentPosts></RecentPosts>
      <CategoriesDetail></CategoriesDetail>
      <TagsDetail></TagsDetail>
    </div>
  </section>
</template>

<script>
import CategoriesDetail from "./CategoriesDetail.vue";
import FollowUs from "./FollowUs.vue";
import RecentPosts from "./RecentPosts.vue";
import TagsDetail from "./TagsDetail.vue";
export default {
  components: {
    FollowUs,
    RecentPosts,
    CategoriesDetail,
    TagsDetail,
  },
};
</script>
<style>
.detail__right {
}
.detail__right a .img__main {
  width: 100%;
}
.detail__right .followUs .header__section a {
  font-size: 18px;
  padding-bottom: 10px;
}

@media screen and (max-width: 768px) {
  .padding--20px {
    padding: 0 20px;
  }
}
</style>
