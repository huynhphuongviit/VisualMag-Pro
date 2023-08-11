<template>
  <div>
    <header class="header__pc">
      <b-navbar toggleable="lg" class="d-flex justify-content-between">
        <img
          alt=""
          src="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2023/02/logo-1.png"
        />
        <div class="d-flex justify-content-between">
          <b-navbar-nav>
            <b-nav-item href="link.link" v-for="link in links" key="index">{{
              link.name
            }}</b-nav-item>
          </b-navbar-nav>
          <div
            class="d-flex search__container justify-content-center align-items-center"
          >
            <b-nav-form>
              <b-form-input type="search" class=""></b-form-input>
              <b-button
                class="d-flex justify-content-center align-items-center"
                type="submit"
              >
                <img src="../static/assets/icon-search.png" alt="" />
              </b-button>
            </b-nav-form>
          </div>
        </div>
      </b-navbar>
    </header>
    <HeaderMobile></HeaderMobile>
  </div>
</template>

<script>
import HeaderMobile from "../components/HeaderMobile.vue";
export default {
  data: () => {
    let links = [
      { name: "Home", link: "#" },
      { name: "Advertising", link: "" },
      { name: "Blogging", link: "" },
      { name: "Marketing", link: "" },
      { name: "Social", link: "" },
      { name: "SEO", link: "" },
      { name: "Web Design", link: "" },
      { name: "Tech", link: "" },
    ];
    return {
      links,
    };
  },
  components: {
    HeaderMobile,
  },
};
</script>
<style>
.header__pc {
  display: block;
}
.header__mobile {
  display: none;
}
header {
  padding: 15px 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
}
header img {
  width: 220px;
  aspect-ratio: auto 220 / 41;
}
.navbar {
  max-width: 1180px;
  margin-left: auto !important;
  margin-right: auto !important;
  padding: 0;
}
.navbar-nav {
  margin-right: 20px;
}
.navbar-light .navbar-nav .nav-link {
  color: #000;
  padding: 10px 12px;
  font-size: 17px;
}
.form-inline {
  width: 200px;
}
.form-inline input {
  border-radius: 0;
  height: 36px;
  max-width: 162px;
  background-color: #f0f0f0;
  border: 1px solid #eae6e6;
}
.form-inline input:focus {
  border: 1px solid #0099e5;
  background-color: #f0f0f0;
  box-shadow: none;
}

.form-inline button {
  border-radius: 0;
  background-color: #0099e5;
  height: 36px;
  width: 38px;
  padding: 5px 7px;
  border: transparent;
}
.form-inline button img {
  width: 16px;
  transform: rotate(90deg);
}
@media screen and (max-width: 960px) {
  .header__pc {
    display: none;
  }
}
@media screen and (max-width: 1180px) {
  .header__pc nav > div > div{
    display: none!important;;
  }
}
</style>
