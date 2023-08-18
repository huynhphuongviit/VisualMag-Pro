<template>
  <div class="container__default">
    <Header></Header>
    <main class="d-flex main__detail">
      <nuxt class="right__Container__detail" style="width: 66.66%" />
      <RightContainerDetail  class="left__Container__detail" style="width: 33.33%"></RightContainerDetail>
    </main>
    <Footer></Footer>
    <button
      @click="scrollToTop"
      :class="showButton ? 'btn__scroll fade' : 'btn__scroll opacity--0 '"
    >
      <img src="../static/assets/icon-up.png" alt="'icon'" />
    </button>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import RightContainerDetail from "../components/RightContainerDetail.vue";
export default {
  components: {
    Footer,
    Header,
    RightContainerDetail,
  },
  data() {
    return {
      showButton: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      if (window.scrollY > 100) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style>
.container__default {
  font-family: "Kumbh-Sans", sans-serif;
  text-decoration: none;
  margin: auto;
}
.container__default a:hover {
  color: #0099e5;
}
.main__detail {
  max-width: 1180px;
  display: flex;
  gap: 2rem;
  margin: 24px auto 0 auto;
}
.btn__scroll {
  position: fixed;
  bottom: 10px;
  background-color: #0099e5;
  border: none;
  right: 10px;
  height: 30px;
  width: 30px;
}
.btn__scroll:hover {
  opacity: 0.6 !important;
}
.opacity--0 {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 0.33s, opacity 0.33s linear;
}
.fade {
  visibility: visible;
  opacity: 1 !important;
  transition: opacity 1s;
}
.btn__scroll img {
  height: 15px;
  width: 18px;
}
.container__default a {
  text-decoration: none;
  cursor: pointer;
  color: #000;
}
@media screen and (max-width: 768px) {
  .main__detail {
    flex-direction: column;
    padding: 20px;
  }
  .left__Container__detail,
  .right__Container__detail{
    width: 100%!important;
  }
}
</style>
