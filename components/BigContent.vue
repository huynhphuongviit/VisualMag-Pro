<template>
  <section class="bigcontent__body">
    <NuxtLink :to="'/'+formatParam(data.title)">
      <img :src="data?.src" alt="" />
    </NuxtLink>
    <div class="bigcontent__body__content">
      <div class="content__info d-flex align-items-center">
        <h2>{{ data?.name }}</h2>
        <time>{{ data?.time }}</time>
      </div>
      <h3>
        <NuxtLink :to="'/'+formatParam(data?.title)">{{ data?.title }}</NuxtLink>
      </h3>
    </div>
    <h4 v-if="data.description">
      {{ data.description }}
    </h4>
  </section>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    formatParam(param) {
      return param.toLowerCase().replace(/[^a-z0-9]/g, "-");
    }
  }
};
</script>
<style>
.bigcontent__body {
  padding-top: 16px;
}
.bigcontent__body img {
  width: 100%;
}

.bigcontent__body__content h3 {
  font-size: clamp(1.125rem, 1.0263rem + 0.3947vw, 1.35rem);
  font-weight: bold;
  color: #000;
  margin: 11px 0;
}
.bigcontent__body h4 {
  color: #888888;
  font-size: 16px;
  line-height: 1.8;
  font-family: "Inter";
  margin: 12px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3.6em;
}
.content__info {
  padding: 0;
  margin: 18px 0 0 0;
}
.content__info h2 {
  color: #000;
  font-size: 14px;
  margin: 0;
  font-family: "Inter";
  font-weight: 700;
  padding-bottom: 2px;
}
.content__info time {
  color: #888888;
  font-size: 14px;
  font-family: "Inter";
  margin: 0;
  padding: 0;
  margin-left: 15px;
}
@media screen and (min-width: 769px) {
}
</style>
