<template>
  <section class="blogging">
    <HeaderSection
      name="Blogging"
      nuxtlink="/category/blogging/"
    ></HeaderSection>
    <MediumContent :data="data"></MediumContent>
  </section>
</template>

<script>
import MediumContent from "./MediumContent.vue";
import {dataFake} from '../store/dataFake';
export default {
  data() {
    //fetch data
    let dataFilter = dataFake.filter((e) => e.categories.includes('blogging'))
    let data = dataFilter?.slice(0, 3);
    return { data };
  },
  components: {
    MediumContent,
  },
};
</script>
<style>
.blogging {
  margin: 60px 0 44px 0;
}
.blogging .mediumcontent__ul {
  gap: 1.4em;
  margin-top: 24px;
}
.blogging .mediumcontent__ul .mediumcontent__li {
  width: calc(100% / 3 - 0.99em);
}
.blogging
  .mediumcontent__ul
  .mediumcontent__li
  a
  .mediumcontent__content
  .mediumcontent__h2 {
  font-size: 18px;
  font-weight: 700;
  margin-top: 16px;
}
@media screen and (max-width: 768px) {
  .blogging{
    margin-top: 48px;
  }
}
@media screen and (max-width: 600px) {
  .blogging .mediumcontent__ul .mediumcontent__li {
    width: 100%;
  }
}
</style>
