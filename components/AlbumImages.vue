<template>
  <div class="AlbumImages__container">
    <div class="container__images">
      <div class="images__content" v-for="image in images">
        <a href="">
          <img alt="" :src="image.src" />
          <div>
            <h2>{{ image.title }}</h2>
            <h3>{{ image.description }}</h3>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let images = [
      {
        title: "ADVERTISING",
        src: "https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/06/macbook-laptop-400x266.jpeg",
        description: "The Ultimate Guide To Joining or Hosting A Twitter Chat",
      },
      {
        title: "MARKETING",
        src: "https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/top-workspace-400x266.jpeg",
        description: "How to Use DaaS Tools in Your Marketing Analysis",
      },
      {
        title: "WEB DESIGN",
        src: "https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/business-working2-400x266.jpeg",
        description: "How to Humanize AI-Generated Marketing Content",
      },
      {
        title: "MARKETING",
        src: "https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/laptop-typing-400x266.jpeg",
        description: "How to Run an E-Commerce Marketing Campaign",
      },
      {
        title: "WEB DESIGN",
        src: "https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/business-working3-400x266.jpeg",
        description: "The Best Project Management Software for Beginners",
      },
    ];
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
}
.container__images {
  display: grid;
  grid-gap: 0.5em;
  grid-template-areas:
    "photo1 photo2 photo3"
    "photo1 photo4 photo5";
  grid-template-columns: 1fr 24.5% 24.5%;
}

.images__content {
  height: 12.2vw;
}
.images__content:first-child {
  grid-area: photo1;
  height: 25vw;
}
.images__content {
  position: relative;
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
  padding: 10px 10px 0 10px;
  max-width: 90%;
}
.images__content a div h2 {
  color: #fff;
  font-size: 11px;
  padding: 2px 6px;
  width: fit-content;
}
.images__content a > div > h3 {
  font-size: 17px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0;
}
.images__content:nth-child(1) > a > div > h3 {
  font-size: 28px;
  line-height: 34px;
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
@media only screen and (min-width: 960px) and (max-width: 1179px) {
  .container__images {
    width: 98%;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 960px) {
  .container__images {
    width: 96%;
    margin: 0 auto;
  }
  .AlbumImages__container {
    margin-top: 16px;
  }
}
@media only screen and (max-width: 780px) {
  .container__images {
    display: grid;
    grid-gap: 0.5em;
    grid-template-areas:
      "photo1 photo1"
      "photo2 photo3"
      "photo4 photo5";
    grid-template-rows: 1fr 24.5% 24.5%;
    grid-template-columns: 49.5% 49.5%;
  }

  .images__content {
    height: 27vw;

  }

  .images__content:nth-child(1) {
    height: 384px;
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
  .images__content {
  }
  .images__content:nth-child(1) {
    height: 55vw;
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
