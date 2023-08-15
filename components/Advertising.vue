<template>
  <section class="avertising">
    <HeaderSection
      name="Advertising"
      nuxtlink="https://demo.wpenjoy.com/visualmag-pro/category/advertising/"
    ></HeaderSection>
    <div class="d-flex avertising__container__section">
      <div class="avertising__container--main">
        <BigContent :data="bigContentData"></BigContent>
      </div>
      <div class="avertising__container--extra">
        <SmallContentWithImages
          :data="smallContentData"
        ></SmallContentWithImages>
      </div>
    </div>
  </section>
</template>

<script>
import BigContent from "./BigContent.vue";
import HeaderSection from "./HeaderSection.vue";
import SmallContentWithImages from "./SmallContentWithImages.vue";
import {dataSmallAdvertising} from '../store/dataHomePage'
export default {
  components: {
    BigContent,
    HeaderSection,
    SmallContentWithImages,
  },
  data() {
    let bigContentData = {
      src: "https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/finance-flat-400x266.jpeg",
      title: "5 Steps for Using Paid Internet Advertising to Drive Conversions",
      time: "April 27, 2021",
      name: "John Doe",
      nuxtlink:
        "https://demo.wpenjoy.com/visualmag-pro/5-steps-for-using-paid-internet-advertising-to-drive-conversions/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta felis non nibh...",
    };
    let smallContentData = dataSmallAdvertising
    return {
      bigContentData,
      smallContentData,
    };
  },
};
</script>
<style>
.avertising {
  width: 98%;
  margin-top: 40px;
  margin-bottom: 30px;
  
}
.avertising .header__section a{
  padding-bottom: 7.1px;
}
.avertising__container__section {
  padding-top: 16px;
}
.avertising__container--main .bigcontent__body{
  padding-top: 0;
}
.avertising__container--main {
  width: 50%;
  margin-right: 17px;
}
.avertising__container--extra {
  width: 50%;
  margin-left: 15px;
}
</style>
