<template>
  <section class="web__design">
    <HeaderSection
      name="Web Design"
      nuxtlink="https://demo.wpenjoy.com/visualmag-pro/category/web-design/"
    ></HeaderSection>
    <BigContent :data="bigContentData"></BigContent>
    <SmallContentWithImages :data="smallContentData"></SmallContentWithImages>
  </section>
</template>

<script>
import BigContent from "./BigContent.vue";
import HeaderSection from "./HeaderSection.vue";
import SmallContentWithImages from "./SmallContentWithImages.vue";
import {dataSmallWebDesign} from '../store/dataHomePage'
export default {
  comments: {
    BigContent,
    HeaderSection,
    SmallContentWithImages,
  },
  data() {
    let bigContentData = {
      src: "https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/business-working2-400x266.jpeg",
      title: "How to Humanize AI-Generated Marketing Content",
      time: "May 27, 2021",
      name: "John Doe",
      nuxtlink:
        "https://demo.wpenjoy.com/visualmag-pro/how-to-humanize-ai-generated-marketing-content/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta felis non nibh interdum, tempus tempor urna tincidunt. Sed eget...",
    };
    let smallContentData = dataSmallWebDesign
    return {
      bigContentData,
      smallContentData,
    };
  },
  components: { SmallContentWithImages },
};
</script>
<style>
.web__design {
  width: 48%;
  margin-top: 35px;
}
.web__design  .bigcontent__body  h4{
    margin: 30px 0;
}
.web__design  .bigcontent__body .bigcontent__body__content .content__info {
  margin-top: 12px
}
@media screen and (max-width: 768px) {
  .web__design{
    width: 100%;
  }

}
</style>
