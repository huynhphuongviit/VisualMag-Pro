<template>
  <section class="lifestyle">
    <HeaderSection name="Lifestyle" nuxtlink="https://demo.wpenjoy.com/visualmag-pro/category/lifestyle/"></HeaderSection>
    <SmallContentWithImages :data="data"></SmallContentWithImages>
  </section>
</template>

<script>
import SmallContentWithImages from './SmallContentWithImages.vue';
import HeaderSection from './HeaderSection.vue';
import {dataLifestyle} from '../store/dataHomePage'
export default {
  data(){
    let data = dataLifestyle
    return{
      data
    }
  },
  components:{
    SmallContentWithImages,
    HeaderSection
  }
};
</script>
<style>
.lifestyle {
  margin-top: 40px;
  margin-bottom: 70px;
}
.lifestyle .smallcontent__container--ul {
  padding-top: 16px;
}
</style>
