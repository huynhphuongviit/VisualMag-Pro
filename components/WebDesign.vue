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
      title: "The Best Project Management Software for Beginners",
      time: "May 27, 2021",
      name: "John Doe",
      nuxtlink:
        "https://demo.wpenjoy.com/visualmag-pro/how-to-humanize-ai-generated-marketing-content/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta felis non nibh...",
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
  width: 49%;
  margin-top: 35px;
  padding-right: 16px;
}

</style>
