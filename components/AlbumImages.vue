<template>
  <section class="AlbumImages__container">
    <figure class="images__content" v-for="image in images">
      <NuxtLink to="">
        <img alt="" :src="image.src" />
        <div>
          <h2>{{ image.title }}</h2>
          <h3>{{ image.description }}</h3>
        </div>
      </NuxtLink>
    </figure>
  </section>
</template>

<script>
import { imagesBanner } from "../store/dataHomePage";
export default {
  name: "AlbumImages",
  data() {
    let images = imagesBanner;
    return {
      images,
    };
  },
};
</script>
<style>
.AlbumImages__container {
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  margin-bottom: 2em;
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.images__content {
  height: 12.2vw;
}
.images__content:first-child {
  min-height: 100%;
  grid-row: span 2;
  grid-column: span 2;
}
.images__content {
  position: relative;
  margin-bottom: 0;
  max-height: 384px;
  height: auto;
}
.images__content a {
  display: block;
  width: 100%;
  height: 100%;
}
.images__content a img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: brightness(80%);
}
.images__content a div {
  position: absolute;
  bottom: 20px;
  left: 10px;
  padding: 10px 0 0 10px;
  max-width: 90%;
}
.images__content a div h2 {
  color: #fff;
  font-size: 11px;
  padding: 4px 6px;
  width: fit-content;
  text-align: center;
}

.images__content a > div > h3 {
  font-size: 17px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0;
}
.images__content:nth-child(1) > a > div > h3 {
  font-size: clamp(1.375rem, 1.2434rem + 0.5263vw, 1.875rem);
  line-height: 1.2em;
}
.images__content:nth-child(1) a div h2 {
  background-color: #0099e5;
}
.images__content:nth-child(2) a div h2 {
  background-color: #34bf49;
}
.images__content:nth-child(3) a div h2 {
  background-color: #ff9900;
}
.images__content:nth-child(4) a div h2 {
  background-color: #1cc7d0;
}
.images__content:nth-child(5) a div h2 {
  background-color: #ff4f81;
}
.images__content a div h2:hover {
  background-color: rgba(0, 0, 0, 0.519);
}

@media only screen and (max-width: 960px) {
  .container__images {
    margin: 0 auto;
  }
  .AlbumImages__container {
    margin-top: 16px;
  }
}
@media only screen and (max-width: 768px) {
  .AlbumImages__container {
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
  .images__content{
    height: 187px;
  }


  .images__content:nth-child(1) {
    grid-row: span 2;
    grid-column: span 2;
  }
  .images__content a div {
    width: 100%;
    left: 0;
    bottom: 8px;
  }
  .images__content a div h2 {
    padding: 4px 6px;
  }
  .images__content a > div > h3 {
    font-size: 14px;
    font-weight: 500;
  }
  .images__content:nth-child(1) a > div > h3 {
    font-size: 22px;

    font-weight: bold;
  }
}
@media only screen and (max-width: 600px) {
  .images__content:nth-child(1) {
    height: 55vw;
  }
  .images__content{
    height:  calc(100px + 10vw);
  }
}
@media only screen and (max-width: 480px) {
  .images__content a > div > h2 {
    display: none;
  }
  .images__content:nth-child(1) a > div > h2 {
    display: block;
  }
}
</style>
