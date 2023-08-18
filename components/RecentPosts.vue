<template>
  <section class="recent__posts">
    <HeaderSection name="Recent Posts" nuxtlink="/tag/wordpress/"></HeaderSection>
    <SmallContentWithImages :data="data"></SmallContentWithImages>
  </section>
</template>

<script>
import SmallContentWithImages from './SmallContentWithImages.vue';
import HeaderSection from './HeaderSection.vue';
import {dataFake} from '../store/dataFake'
export default {
  data(){
    let data = dataFake.slice(0, 4)
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
.recent__posts {
  margin-top: 75px;
  margin-bottom: 30px;
}
.recent__posts .header__section a{
  font-size: 18px;
  padding-bottom: 10px;
}
.recent__posts .smallcontent__container--ul{
  padding-top: 0;
}
.recent__posts .smallcontent__container--ul li{
  border-bottom: 1px solid #f0f0f0;
  padding: 20px 0;
  margin: 0;
}
.recent__posts .smallcontent__container--ul li:last-child{
  border: none;
}
.recent__posts .smallcontent__container--ul li figure img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}
.recent__posts .smallcontent__container--ul li .smallcontent__container--content h2 a {
  font-size: 16px;
  font-family: "Inter";
  font-weight: 400;
}

@media screen and (max-width: 768px) {
  .recent__posts{
    margin-top: 50px;
  }
}
</style>
