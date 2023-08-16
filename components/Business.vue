<template>
  <section class="business">
    <HeaderSection name="Business" nuxtlink="https://demo.wpenjoy.com/visualmag-pro/category/news/"></HeaderSection>
    <MediumContent :data="data"></MediumContent>
  </section>
</template>

<script>
import MediumContent from './MediumContent.vue';
import HeaderSection from './HeaderSection.vue';
import {dataBusiness} from '../store/dataHomePage'
export default {
  data(){
    let data = dataBusiness
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
.business {
  margin: 72px 0;
}

</style>
