<template>
  <section class="technology">
    <HeaderSection name="Technology" nuxtlink="https://demo.wpenjoy.com/visualmag-pro/category/technology/"></HeaderSection>
    <SmallTechnology :data="data"
      ></SmallTechnology
    >
  </section>
</template>

<script>
import SmallTechnology from "./SmallTechnology.vue";
import HeaderSection from "./HeaderSection.vue";
import {dataTechnology} from '../store/dataHomePage.js'
export default {
  data() {
    let data = dataTechnology
    return { data };
  },
  components: {
    SmallTechnology,
    HeaderSection,
  },
};
</script>
<style>
.technology {
  padding-top: 32px;
  margin-bottom: 24px;
}

</style>
