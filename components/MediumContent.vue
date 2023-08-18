<template>
  <ul class="mediumcontent__ul">
    <li
      class="d-flex flex-column mediumcontent__li"
      v-for="(mediumItem, index) in data"
      :key="index"
    >
      <NuxtLink :to="'/' + formatParam(mediumItem.title)">
        <figure class="mediumcontent__figure">
          <img :src="mediumItem.src" alt="" loading="lazy" />
        </figure>
        <div class="mediumcontent__content">
          <h2 style="margin-bottom: 5px" class="mediumcontent__h2">
            {{ mediumItem.title }}
          </h2>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    formatParam(param) {
      return param.toLowerCase().replace(/[^a-z0-9]/g, "-");
    },
  },
};
</script>
<style>
.mediumcontent__ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25em;
  row-gap: 1em;
  padding: 0;
  list-style: none;
  margin-top: 24px;
}
.mediumcontent__li {
  width: calc(100% - 50% - 0.625em);
}
.mediumcontent__li a {
  color: #000;
  text-decoration: none;
}
.mediumcontent__li figure {
  width: 100%;
  margin: 0 0 10px 0;
}
.mediumcontent__li figure img {
  width: 100%;
}

.mediumcontent__li .mediumcontent__content h2 {
  display: flex;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 400;
}
@media screen and (max-width: 600px) {
  .mediumcontent__li {
    width: 100%;
  }
}
</style>
