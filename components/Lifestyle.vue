<template>
  <section class="lifestyle">
    <HeaderSection name="Lifestyle" nuxtlink="/category/lifestyle/"></HeaderSection>
    <SmallTechnology :data="data" totalViews="4"></SmallTechnology>
  </section>
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import {dataFake} from '../store/dataFake'
import SmallTechnology from './SmallTechnology.vue';
export default {
  data(){
    let data = dataFake.slice(5, 10)
    return{
      data
    }
  },
  components:{
    HeaderSection,
    SmallTechnology
}
};
</script>
<style>
.lifestyle {
  margin-top: 40px;
  margin-bottom: 70px;
}
.lifestyle .technology__container--ul li{
  margin-bottom: 10px;
}
.lifestyle .technology__container--ul li figure img{
  max-width: 120px;
}
.lifestyle .technology__container--ul li .technology__container--content{
  padding-left: 15px;
}
.lifestyle .technology__container--ul li .technology__container--content .technology__container--info p,
.lifestyle .technology__container--ul li .technology__container--content h3{
  display: none;
}
.lifestyle .technology__container--ul li .technology__container--content h2 a{
  font-size: 16px;
}
.lifestyle .technology__container--ul li .technology__container--content .technology__container--info{
  margin-top: 5px;
}
.lifestyle .technology__container--ul li .technology__container--content .technology__container--info  time{
  margin-left: 0;
}
</style>
