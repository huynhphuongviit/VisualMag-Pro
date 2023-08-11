<template>
  <div class="leftContent__container">
    <Advertising></Advertising>
    <div class="d-flex">
      <WebDesign></WebDesign>
      <Marketing></Marketing>
    </div>
    <!-- <WebDesign :data="marketing"></WebDesign> -->
  </div>
</template>

<script>
import WebDesign from "./WebDesign.vue";
import Advertising from "./Advertising.vue";
import Marketing from "./Marketing.vue";
export default {
  components: {
    WebDesign,
    Advertising,
    Marketing
  },
  data() {
    let advertising = {
      heading: "Advertising",
      src: "https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/finance-flat-400x266.jpeg",
      link: "https://demo.wpenjoy.com/visualmag-pro/5-steps-for-using-paid-internet-advertising-to-drive-conversions/",
      date: "April 27, 2021",
      title: "5 Steps for Using Paid Internet Advertising to Drive Conversions",
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta felis non nibh...",
    };
    let marketing = {
      heading: "Marketing",
      src: "https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/facebook-social.jpeg",
      link: "https://demo.wpenjoy.com/visualmag-pro/facebook-stories-a-marketing-guide-with-actionable-tips/",
      date: "May 27, 2021",
      title: "Facebook Stories: A Marketing Guide With Actionable Tips",
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta felis non nibh...",
    };
    let webDesign = {
      heading: "Web Design",
      src: "https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/business-working2-400x266.jpeg",
      link: "",
      date: "May 27, 2021",
      title: "How to Humanize AI-Generated Marketing Content",
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta felis non nibh...",
    };
    return {
      webDesign,
      advertising,
      marketing,
    };
  },
};
</script>
<style>
.leftContent__container {
  width: 66.6%;
}
</style>
