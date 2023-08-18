<template>
  <section class="categories">
    <HeaderSection
      name="Categories"
      nuxtlink="https://demo.wpenjoy.com/visualmag-pro/tag/wordpress/"
    ></HeaderSection>
    <ul class="categories__ul">
      <li class="categories__li" v-for="categories in data">
        <NuxtLink :to="categories.nuxtlink">{{ categories.name }}</NuxtLink>
        <span class="post-count">{{ categories.count }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import SmallContentWithImages from "./SmallContentWithImages.vue";
import HeaderSection from "./HeaderSection.vue";
export default {
  data() {
    let data = [
      {
        name: "Advertising",
        count: "12",
        nuxtlink: "/category/advertising",
      },
      {
        name: "Blogging",
        count: "16",
        nuxtlink: "/category/blogging",
      },
      {
        name: "Marketing",
        count: "24",
        nuxtlink: "/category/marketing",
      },
      {
        name: "SEO",
        count: "27",
        nuxtlink: "/category/seo/",
      },
      {
        name: "Social Media",
        count: "8",
        nuxtlink: "/category/social-media/",
      },
      {
        name: "Technology",
        count: "8",
        nuxtlink: "/category/technology/",
      },
      {
        name: "Web Design",
        count: "32",
        nuxtlink: "/category/web-design/",
      },
    ];
    return {
      data,
    };
  },
  components: {
    SmallContentWithImages,
    HeaderSection,
  },
};
</script>
<style>
.categories {
  margin-top: 53px;
  margin-bottom: 30px;
}
.categories .header__section a{
  font-size: 18px;
  padding-bottom: 9px;
}
.categories__ul {
  list-style: none;
  margin: 14px 0 0 0;
  padding: 0;
}
.categories__li {
  justify-content: space-between;
  display: flex;
  border-bottom: 1px solid #f5f5f5;
  align-items: center;
  padding: 12px 0;
}
.categories__li a{
  font-size: 16px;
  font-family: 'Inter';
}
.categories__li span {
  background: #f0f0f0;
  color: #999;
  font-size: 11px;
  font-weight: 400;
  text-align: center;
  min-width: 24px;
  height: 24px;
  line-height: 24px;
}
@media screen and (max-width: 768px) {
  .categories {
    margin-top: 50px;
  }
}
</style>
