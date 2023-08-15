<template>
  <section class="news">
    <HeaderSection name="News" nuxtlink="https://demo.wpenjoy.com/visualmag-pro/category/news/"></HeaderSection>
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
  margin: 40px 0;
}

</style>
