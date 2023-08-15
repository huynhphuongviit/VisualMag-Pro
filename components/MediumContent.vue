<template>
  <ul class="mediumcontent__ul">
    <li class="d-flex flex-column mediumcontent__li" v-for="mediumItem in data">
      <a
        :to="mediumItem.link"
      >
        <figure class="mediumcontent__figure">
          <img
            :src="mediumItem.src"
            alt=""
            loading="lazy"
          />
        </figure>
        <div class="mediumcontent__content">
          <h2 style="margin-bottom: 5px" class="mediumcontent__h2">
            {{ mediumItem.title }}
          </h2>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["data"]
};
</script>
<style>
.mediumcontent__ul {
  padding: 0;
  list-style: none;
  display: grid;
  grid-gap: 0.5em;
  grid-template-areas:
    "item1 item2"
    "item3 item4";
  grid-template-columns: calc(50% - 0.625em) calc(50% - 0.625em);
  justify-content: space-between;
}

.mediumcontent__li a {
  color: #000;
  text-decoration: none;
}
.mediumcontent__li figure{
  width: 100%;
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
</style>
