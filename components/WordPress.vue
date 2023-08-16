<template>
  <section class="wordpress">
    <HeaderSection name="WordPress" nuxtlink="https://demo.wpenjoy.com/visualmag-pro/tag/wordpress/"></HeaderSection>
    <SmallContentWithImages :data="data"></SmallContentWithImages>
  </section>
</template>

<script>
import SmallContentWithImages from './SmallContentWithImages.vue';
import HeaderSection from './HeaderSection.vue';
import {dataWordPress} from '../store/dataHomePage'
export default {
  data(){
    let data = dataWordPress
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
.wordpress {
  margin-top: 83px;
  margin-bottom: 30px;
}
.wordpress .smallcontent__container--ul {
  padding-top: 16px;
}
@media screen and (max-width: 768px) {
  .wordpress{
    margin-top: 50px;
  }
}
</style>
