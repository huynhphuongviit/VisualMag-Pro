<template>
    <ul class="smallcontent__container--ul">
      <li v-for='smallContent in data' class="smallcontent__container--li">
        <figure class="smallcontent__container--figure">
          <img
            :src="smallContent.src"
            alt=""
            loading="lazy"
          />
        </figure>

        <div style="color: #888888" class="smallcontent__container--content">
          <h2  class="smallcontent__container--h2">
            <NuxtLink
              :to="smallContent.nuxtlink"
              >{{ smallContent.title }}</NuxtLink
            >
          </h2>
          <time datetime="2021-04-28T05:14:00+00:00">{{ smallContent.time }}</time>
        </div>
      </li>
     
    </ul>
</template>

<script>
export default {
  props: ['data']
};
</script>
<style>
.smallcontent {
  margin-top: 40px;
  margin-bottom: 30px;
}
.container__section {
  margin-top: 20px;
}

.smallcontent__header {
  border-top: 1px solid #dddddd;
  position: relative;
  width: 100%;
}

.smallcontent__header a {
  width: fit-content;
  font-size: 22px;
  color: #000;
  border-bottom: 2px solid #0099e5;
  display: inline-block;
  position: absolute;
  bottom: 0px;
  padding: 10px 0;
  font-weight: bold;
}

.smallcontent__container--ul {
  list-style: none;
  padding: 0;
}
.smallcontent__container--li {
  display: flex;
  margin-bottom:24px;
}
.smallcontent__container--li .smallcontent__container--figure{
  margin: 0;
}
.smallcontent__container--li .smallcontent__container--figure img {
  width: 120px;
}

.smallcontent__container--content h2 {
  display: flex;
  align-items: flex-start;
  padding-left: 15px;
  margin-bottom: 2px;
}
.smallcontent__container--content h2 a {
  color: #000;
  font-size: 16px;
  margin: 0;
  font-weight: bold;
}
.smallcontent__container--content time {
  color: #888;
  font-size: 14px;
  font-family: 'Inter';
  padding-left: 15px;
}
</style>
