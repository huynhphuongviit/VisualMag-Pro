<template>
  <section class="news">
    <HeaderSection name="News" nuxtlink="/category/news/"></HeaderSection>
    <MediumContent :data="data"></MediumContent>
  </section>
</template>
<script>
import MediumContent from './MediumContent.vue';
import HeaderSection from './HeaderSection.vue';
import {dataNews} from '../store/dataHomePage';
export default {
  data(){
    let data = dataNews;
    return{
      data,
    }
  },
  component: {
    MediumContent,
    HeaderSection,
  }
};
</script>
<style>
.news {
  width: 100%;
  margin: 63px 0 66px 0;
}
@media screen and (max-width: 768px) {
  .news{
    margin-top: 55px;
  }
}

</style>
