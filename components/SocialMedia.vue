<template>
  <section class="socialMedia">
    <HeaderSection
      name="Social Media"
      nuxtlink="/category/social-media/"
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
<style>
.socialMedia {
  width: 100%;
  margin: 40px 0;
}
.socialMedia__li {
  width: calc(50% - 12px);
}
.socialMedia__li .bigcontent__body .bigcontent__body__content {
  margin-top: 20px;
}
.socialMedia__ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px 24px ;
}
@media screen and (max-width: 768px) {
  .socialMedia__li {
    width: calc(50% - 12px);
  }
}
@media screen and (max-width: 600px) {
  .socialMedia__li {
    width: 100%;
  }
}
</style>
