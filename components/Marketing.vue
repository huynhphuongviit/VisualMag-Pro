<template>
  <section class="marketting">
    <HeaderSection
      name="Marketing"
      nuxtlink="https://demo.wpenjoy.com/visualmag-pro/category/marketing/"
    ></HeaderSection>
    <BigContent :data="bigContentData"></BigContent>
    <SmallContentWithImages :data="smallContentData"></SmallContentWithImages>
  </section>
</template>
<script>
import BigContent from "./BigContent.vue";
import HeaderSection from "./HeaderSection.vue";
import SmallContentWithImages from "./SmallContentWithImages.vue";
import { dataSmallMarketing } from "../store/dataHomePage";
export default {
  comments: {
    BigContent,
    HeaderSection,
    SmallContentWithImages,
  },
  data() {
    let bigContentData = {
      src: "https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/facebook-social.jpeg",
      title: "Facebook Stories: A Marketing Guide With Actionable Tips",
      time: "May 27, 2021",
      name: "John Doe",
      nuxtlink:
        "https://demo.wpenjoy.com/visualmag-pro/facebook-stories-a-marketing-guide-with-actionable-tips/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta felis non nibh interdum, tempus tempor urna tincidunt. Sed eget...",
    };
    let smallContentData = dataSmallMarketing;
    return {
      bigContentData,
      smallContentData,
    };
  },
};
</script>
<style>
.marketting {
  width: 48%;
  margin-top: 35px;
}
.marketting .bigcontent__body h4 {
  margin: 30px 0;
}
.marketting .bigcontent__body .bigcontent__body__content .content__info {
  margin-top: 12px;
}
@media screen and (max-width: 768px) {
  .marketting {
    width: 100%;
  }
}
</style>
