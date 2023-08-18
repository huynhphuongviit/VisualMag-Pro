<template>
  <h1 class="header__section">
    <NuxtLink :to="'/'+nuxtlink">{{ name }}</NuxtLink>
  </h1>
</template>

<script>
export default {
  props: ["name",'nuxtlink']
};
</script>
<style>
.technology {
  margin-top: 40px;
  margin-bottom: 30px;
}
.container__section {
  margin-top: 20px;
}

.header__section {
  border-top: 1px solid #e9e9e9;
  position: relative;
  width: 100%;
}

.header__section a {
  width: fit-content;
  font-size: clamp(1.125rem, 1.0263rem + 0.3947vw, 1.35rem);
  color: #000;
  border-bottom: 2px solid #0099e5;
  display: inline-block;
  position: absolute;
  bottom: 0px;
  padding: 7px 0;
  font-weight: 700;
}
</style>
