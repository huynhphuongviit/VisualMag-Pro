<template>
  <section class="wordpress">
    <HeaderSection name="Wordpress" nuxtlink="https://demo.wpenjoy.com/visualmag-pro/tag/wordpress/"></HeaderSection>
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
  margin-top: 40px;
  margin-bottom: 30px;
}
</style>
