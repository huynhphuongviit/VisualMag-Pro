<template>
  <section class="technology">
    <HeaderSection name="Technology" nuxtlink="/category/technology/"></HeaderSection>
    <SmallTechnology :data="data" totalViews=5
      ></SmallTechnology
    >
  </section>
</template>

<script>
import SmallTechnology from "./SmallTechnology.vue";
import HeaderSection from "./HeaderSection.vue";
import {dataFake} from '../store/dataFake.js'
export default {
  data() {
    //fetch data
    let data = dataFake
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
