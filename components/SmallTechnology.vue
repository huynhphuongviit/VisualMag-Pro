<template>
  <ul class="technology__container--ul">
    <li
      v-for="(item , index) in data"
      v-if="index < totalViews"
      :key="item.id"
      class="d-flex technology__container--li"
      @click="selectItem(item.title)"
    >
      <figure class="technology__container--figure">
        <img :src="item.src" alt="" loading="lazy" />
      </figure>
      <div style="color: #888888" class="technology__container--content">
        <h2 @click="selectItem(item.id)" style="margin-bottom: 5px" class="technology__container--h2">
          <NuxtLink :to="'/'+ formatParam(item.title)" >{{
            item.title
          }}</NuxtLink>
        </h2>
        <div class="technology__container--info d-flex">
          <p v-if="item.name">{{ item.name }}</p>
          <time v-if="item.time" datetime="2021-04-28T05:14:00+00:00">{{ item.time }}</time>
        </div>
        <h3 v-if="item.description">{{ item.description }}</h3>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["data","totalViews"],
  methods: {
    formatParam(param) {
      return param.toLowerCase().replace(/[^a-z0-9]/g, "-");
    },
    selectItem(params) {
      this.$router.push({ path:'/'+ this.formatParam(params) });
    }
  },
};
</script>
<style>
.technology__container--ul {
  list-style: none;
  padding: 15px 0 0 0;
}
.technology__container--li {
  height: fit-content;
  margin-bottom: 16px;
}
.technology__container--li .technology__container--figure img {
  width: 240px;
}

.technology__container--content {
  padding-left: 23px;
}
.technology__container--content h2 a {
  color: #000;
  font-size: clamp(1.125rem, 1.0263rem + 0.3947vw, 1.35rem);
  margin: 0;
  font-weight: bold;
  font-weight: 700;
  display: flex;
  align-items: flex-start;
}
.technology__container--content .technology__container--info {
  margin-top: 11px;
}
.technology__container--content .technology__container--info time {
  color: #888;
  font-size: 14px;
  margin: 0 0 0 15px;
  padding: 0;
  font-family: "Inter", sans-serif;
}
.technology__container--content .technology__container--info p {
  color: #000;
  font-size: 14px;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  font-weight: 700;
}
.technology__container--li h3 {
  color: #888;
  font-size: 16px;
  margin: 0;
  padding: 0;
  line-height: 1.8;
  font-family: "Inter";
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3.6em;
}
@media screen and (max-width: 768px) {
  .technology__container--figure img {
    max-width: 120px;
  }
  .technology__container--li {
    margin-bottom: 32px;
  }
}
@media screen and (max-width: 480px) {
  .technology__container--info p,
  .technology__container--li h3 {
    display: none;
  }
  .technology__container--content h2 a {
    font-size: 16px;
  }
  .technology__container--content {
    padding-left: 16px;
  }
  .technology__container--info time {
    margin-left: 0 !important;
  }
}
</style>
