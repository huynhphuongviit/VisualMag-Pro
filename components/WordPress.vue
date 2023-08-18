<template>
  <section class="wordpress">
    <HeaderSection name="WordPress" nuxtlink="/tag/wordpress/"></HeaderSection>
    <SmallTechnology :data="data" totalViews="4"></SmallTechnology>
  </section>
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import {dataWordPress} from '../store/dataHomePage'
import SmallTechnology from './SmallTechnology.vue';
export default {
  data(){
    let data = dataWordPress
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
.wordpress {
  margin-top: 83px;
  margin-bottom: 30px;
}
.wordpress .technology__container--ul li{
  margin-bottom: 10px;
}
.wordpress .technology__container--ul li figure img{
  max-width: 120px;
}
.wordpress .technology__container--ul li .technology__container--content{
  padding-left: 15px;
}
.wordpress .technology__container--ul li .technology__container--content h2 a{
  font-size: 16px;
}
.wordpress .technology__container--ul li .technology__container--content .technology__container--info{
  margin-top: 5px;
}
.wordpress .technology__container--ul li .technology__container--content .technology__container--info  time{
  margin-left: 0;
}
@media screen and (max-width: 768px) {
  .wordpress{
    margin-top: 50px;
  }
}
</style>
