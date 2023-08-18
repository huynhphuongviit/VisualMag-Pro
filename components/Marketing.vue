<template>
  <section class="marketting">
    <HeaderSection
      :name="title"
      :nuxtlink="'/category/' + title"
    ></HeaderSection>
    <div :class="title==='advertising'?'d-flex justify-content-between advertising--reponsive':'advertising--reponsive'" style="width: 100%">
      <BigContent  :style="title==='advertising'?'width: 48.5%':'width: 100%'" :data="dataAdvertising[0]"></BigContent>
      <SmallTechnology :style="title==='advertising'?'width: 48.5%; padding-top: 16px':'width: 100%'" :data="dataAdvertising" :totalViews="title==='advertising'?'4':'3'"></SmallTechnology>
    </div>
  </section>
</template>
<script>
import BigContent from "./BigContent.vue";
import HeaderSection from "./HeaderSection.vue";
import { dataFake } from "../store/dataFake";
import SmallTechnology from "./SmallTechnology.vue";
export default {
  props: ["title"],
  components: {
    BigContent,
    HeaderSection,
  },
  data() {
    //fetch data
    let titleFilter = this.title;
    let dataAdvertising = dataFake?.filter((e) =>
      e.categories.includes(titleFilter)
    );
    return {
      dataAdvertising,
    };
  },
  components: { SmallTechnology },
};
</script>
<style>
.marketting {
  width: 48%;
  margin-top: 35px;
}
.marketting .bigcontent__body h4 {
  margin: 30px 0;
}
.marketting .bigcontent__body .bigcontent__body__content .content__info {
  margin-top: 12px;
}
.marketting .technology__container--ul {
  padding-top: 5px;
}
.marketting .technology__container--ul li {
  margin-bottom: 5px;
}
.marketting .technology__container--ul li figure img {
  width: 120px;
}
.marketting .technology__container--ul li .technology__container--content h2 a {
  font-size: 16px;
}
.marketting .technology__container--ul li .technology__container--content {
  padding-left: 15px;
}
.marketting .technology__container--ul li .technology__container--content h3,
.marketting
  .technology__container--ul
  li
  .technology__container--content
  .technology__container--info
  p {
  display: none;
}

.marketting
  .technology__container--ul
  li
  .technology__container--content
  .technology__container--info
  time {
  margin-left: 0;
}
@media screen and (max-width: 768px) {
  .marketting {
    width: 100%;
  }
  .advertising--reponsive{
    flex-direction: column;
  }
  .advertising--reponsive .technology__container--ul,
  .advertising--reponsive .bigcontent__body{
    width: 100%!important;
  }

}
</style>
