<template>
  <ul class="technology__container--ul">
    <li v-for="item in data" key="index" class="technology__container--li">
      <figure class="technology__container--figure">
        <img :src="item.src" alt="" loading="lazy" />
      </figure>
      <div style="color: #888888" class="technology__container--content">
        <h2 style="margin-bottom: 5px" class="technology__container--h2">
          <NuxtLink :to="item.nuxtlink">{{ item.title }}</NuxtLink>
        </h2>
        <div class="technology__container--info d-flex">
          <p>{{ item.name }}</p>
          <time datetime="2021-04-28T05:14:00+00:00">{{ item.time }}</time>
        </div>
        <h3>{{ item.description }}</h3>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["data"],
};
</script>
<style>
.technology__container--ul {
  list-style: none;
  padding: 15px 0 0 0;
}
.technology__container--li {
  display: flex;
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
.technology__container--content .technology__container--info{
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
.technology__container--content h3 {
  color: #888;
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  line-height: 1.8;
  margin-top: 12px;
}</style>
