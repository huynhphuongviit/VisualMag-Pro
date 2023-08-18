<template>
  <section class="tags__container">
    <HeaderSection
      name="Tags"
      nuxtlink="/"
    ></HeaderSection>
    <ul class="tags__container__ul">
      <li class="tags__container__li" v-for="tag in tags">
        <nuxt-link :to="`/tag/${formatParam(tag)}`">{{ tag }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import SmallContentWithImages from "./SmallContentWithImages.vue";
import HeaderSection from "./HeaderSection.vue";
export default {
  data() {
    let tags = [
      "ads",
      "adwords",
      "awesome",
      "blog",
      "books",
      "copywriting",
      "design",
      "facebook",
      "google",
      "instagram",
      "landing pages",
      "marketing",
      "seo",
      "tag",
      "tag one",
      "tag two",
      "twitter",
      "wordpress",
    ];
    return {
      tags,
    };
  },
  components: {
    SmallContentWithImages,
    HeaderSection,
  },
  methods: {
    formatParam(param) {
      return param.toLowerCase().replace(/[^a-z0-9]/g, '-');
    }
  }
};
</script>
<style>
.tags__container {
  margin-top: 65px;
  margin-bottom: 30px;
}
.tags__container .header__section a{
  font-size: 18px;
}
.tags__container__ul {
  padding: 14px 0 0 0;
  list-style: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 4px;
}
.tags__container__ul li a{
  background-color: #F0F0F0;
  padding: 4px 8px;
  font-size: 13px;
  font-family: 'Inter';
  color: #555555;
}
.tags__container__ul li a:hover{
  background-color: #333;
  color: #fff;
}
@media screen and (max-width: 768px) {
  .tags {
    margin-top: 50px;
  }
}
</style>
