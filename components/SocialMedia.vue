<template>
  <section class="socialMedia">
    <HeaderSection
      name="Social Media"
      nuxtlink="https://demo.wpenjoy.com/visualmag-pro/category/social-media/"
    ></HeaderSection>
    <ul class="socialMedia__ul">
      <li class="socialMedia__li" v-for="item in data" key="index">
        <BigContent :data="item"></BigContent>
      </li>
    </ul>
  </section>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";
import BigContent from "./BigContent.vue";
import { dataSocial } from "../store/dataHomePage";
export default {
  component: { HeaderSection, BigContent },
  data() {
    let data = dataSocial;
    return { data };
  },
};
</script>
<style >
.socialMedia {
  width: 100%;
  margin: 40px 0;
}
.socialMedia__li{
  width: 99.4%;
}
.socialMedia__li .bigcontent__body .bigcontent__body__content{
  margin-top: 20px;
}
.socialMedia__ul {
  padding: 0;
  list-style: none;
  display: grid;
  grid-gap: 0.5em;
  grid-template-areas:
    "item1 item2"
    "item3 item4";
  grid-template-columns: calc(50% - 0.625em) calc(50% - 0.625em);
  justify-content: space-between;
}
</style>
