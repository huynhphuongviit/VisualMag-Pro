<template>
  <section class="fashion">
    <HeaderSection
      name="Fashion"
      nuxtlink="https://demo.wpenjoy.com/visualmag-pro/category/fashion/"
    ></HeaderSection>
    <SmallTechnology :data="data" totalViews="4"></SmallTechnology>
  </section>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";
import { dataFashion } from "../store/dataHomePage";
import SmallTechnology from "./SmallTechnology.vue";
export default {
  data() {
    let data = dataFashion;
    return {
      data,
    };
  },
  components: {
    HeaderSection,
    SmallTechnology
},
};
</script>
<style>
.fashion {
  margin-top: 40px;
  margin-bottom: 30px;
}
.fashion .technology__container--ul li{
  margin-bottom: 10px;
}
.fashion .technology__container--ul li figure img{
  max-width: 120px;
}
.fashion .technology__container--ul li .technology__container--content{
  padding-left: 15px;
}
.fashion .technology__container--ul li .technology__container--content h2 a{
  font-size: 16px;
}
.fashion .technology__container--ul li .technology__container--content .technology__container--info{
  margin-top: 5px;
}
.fashion .technology__container--ul li .technology__container--content .technology__container--info  time{
  margin-left: 0;
}
</style>
