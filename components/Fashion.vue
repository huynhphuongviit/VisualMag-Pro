<template>
  <section class="fashion">
    <HeaderSection name="Fashion" nuxtlink="https://demo.wpenjoy.com/visualmag-pro/category/fashion/"></HeaderSection>
    <SmallContentWithImages :data="data"></SmallContentWithImages>
  </section>
</template>

<script>
import SmallContentWithImages from './SmallContentWithImages.vue';
import HeaderSection from './HeaderSection.vue';
import {dataFashion} from '../store/dataHomePage'
export default {
  data(){
    let data = dataFashion
    return{
      data
    }
  },
  components: {
    SmallContentWithImages,
    HeaderSection
  }
};
</script>
<style >
.fashion {
  margin-top: 40px;
  margin-bottom: 30px;
}
</style>
