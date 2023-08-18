<template>
  <section class="business">
    <HeaderSection name="Business" nuxtlink="/category/news/"></HeaderSection>
    <MediumContent :data="data"></MediumContent>
  </section>
</template>

<script>
import MediumContent from './MediumContent.vue';
import HeaderSection from './HeaderSection.vue';
import {dataFake} from '../store/dataFake'
export default {
  data(){
    let data = dataFake.slice(25, 29)
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
