<template>
  <header>
    <div class="header__pc">
      <b-navbar class="d-flex justify-content-between">
        <img
          alt=""
          src="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2023/02/logo-1.png"
        />
        <div class="d-flex justify-content-between">
          <b-navbar-nav>
            <b-nav-item
              href="link.link"
              v-for="link in links"
              :key="link.index"
            >
              <NuxtLink :to="link.nuxtlink">{{ link.name }}</NuxtLink>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav
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
          </b-navbar-nav>
        </div>
      </b-navbar>
    </div>
    <HeaderMobile></HeaderMobile>
  </header>
</template>

<script>
import HeaderMobile from "../components/HeaderMobile.vue";
export default {
  data: () => {
    let links = [
      { name: "Home", nuxtlink: "#" },
      {
        name: "Advertising",
        nuxtlink:
          "https://demo.wpenjoy.com/visualmag-pro/category/advertising/",
      },
      {
        name: "Blogging",
        nuxtlink: "https://demo.wpenjoy.com/visualmag-pro/category/blogging/",
      },
      {
        name: "Marketing",
        nuxtlink: "https://demo.wpenjoy.com/visualmag-pro/category/marketing/",
      },
      {
        name: "Social",
        nuxtlink:
          "https://demo.wpenjoy.com/visualmag-pro/category/social-media/",
      },
      {
        name: "SEO",
        nuxtlink: "https://demo.wpenjoy.com/visualmag-pro/category/seo/",
      },
      {
        name: "Web Design",
        nuxtlink: "https://demo.wpenjoy.com/visualmag-pro/category/web-design/",
      },
      {
        name: "Tech",
        nuxtlink: "https://demo.wpenjoy.com/visualmag-pro/category/technology/",
      },
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
  height: 46px;
}

.navbar-nav {
  margin-right: 19px;
}
.navbar-nav .nav-item {
  margin-right: 3px;
}

.navbar-light .navbar-nav .nav-link {
  color: #000;
  padding: 10px 10.44px;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  line-height: 26px;
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

@media screen and (min-width: 960px) {
  .search__container {
    margin-right: 0;
  }
}
@media screen and (max-width: 960px) {
  .header__pc {
    display: none;
  }
  header {
    padding: 12.5px 0;
  }
  .header__mobile {
    width: 96%;
    margin: 0 auto;
  }
}
@media screen and (min-width: 961px) and (max-width: 1180px) {
  .header__pc nav > div > .search__container {
    display: none !important;
  }
  header {
    padding: 12.5px 0;
  }
  .header__pc {
    width: 98%;
    margin: 0 auto;
  }
  .navbar-nav {
    margin-right: 0;
  }
  .navbar-light .navbar-nav .nav-link {
    padding: 10px 0 10px 12px;
}

}
</style>
