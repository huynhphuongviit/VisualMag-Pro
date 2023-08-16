<template>
  <section class="followUs">
    <HeaderSection name="Follow Us" nuxtlink="#"></HeaderSection>
    <ul class="followUs__content">
      <li class="followUs__content__item">
        <a href="https://#">
          <b-icon icon="twitter"></b-icon>
          <span class="followUs__item--span">Twitter</span>
        </a>
      </li>
      <li class="followUs__content__item">
        <a href="https://#">
          <b-icon icon="facebook"></b-icon>
          <span class="followUs__item--span">Facebook</span>
        </a>
      </li>
      <li class="followUs__content__item">
        <a href="https://#">
          <b-icon icon="instagram"></b-icon>
          <span class="followUs__item--span">Instagram</span>
        </a>
      </li>
      <li class="followUs__content__item">
        <a href="https://#">
          <b-icon icon="youtube"></b-icon>
          <span class="followUs__item--span">Youtube</span>
        </a>
      </li>
      <li class="followUs__content__item">
        <a href="https://#">
          <img src="../static/assets/icons-dribbble.svg" />
          <span class="followUs__item--span">Dribbble</span>
        </a>
      </li>
      <li class="followUs__content__item">
        <a href="https://#">
          <b-icon icon="linkedin"></b-icon>
          <span class="followUs__item--span">Linkedln</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import HeaderSection from './HeaderSection.vue';
export default {
  component: HeaderSection,
};
</script>
<style>
.followUs {
  margin-top: 40px;
  margin-bottom: 72px;
}


.followUs__content {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin-top: 18px;
  gap: 10px 10px;
}
.followUs__content__item {
  width: fit-content;
  height: 30px;
  display: flex;
  align-items: center;
}
.followUs__content__item:hover{
  transform: scale(1.1);
}
.followUs__content__item a {
  display: flex;
  align-items: center;

}
.followUs__content__item a svg {
  font-size: 24px;
}

.followUs__content__item:nth-child(1) a svg,
.followUs__content__item:nth-child(1) a .followUs__item--span {
  color: #1da1f2;
}
.followUs__content__item:nth-child(2) a svg,
.followUs__content__item:nth-child(2) a .followUs__item--span {
  color: #1778f2;
}
.followUs__content__item:nth-child(3) a svg,
.followUs__content__item:nth-child(3) a .followUs__item--span {
  color: #f00075;
}
.followUs__content__item:nth-child(4) a svg,
.followUs__content__item:nth-child(4) a .followUs__item--span {
  color: #ff0000;
}

.followUs__content__item:nth-child(5) a .followUs__item--span {
  color: #E94C89;
}
.followUs__content__item:nth-child(6) a svg,
.followUs__content__item:nth-child(6) a .followUs__item--span {
  color: #0d66c2;
}
.followUs__content__item a .followUs__item--span {
  padding-left: 10px;
  font-size: 15.6px;
  font-family: "Inter";
}
.followUs__content__item:nth-child(5) a .followUs__item--span {
  padding-left: 5px;

}
@media  screen and (max-width: 780px) {
  .followUs__content{
  justify-content: unset;
  gap: 10px 20px;

  }
}
</style>
