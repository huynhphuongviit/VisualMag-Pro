<template>
  <div class="header__mobile">
    <b-navbar toggleable="lg" class="d-flex justify-content-between">
      <img
        alt=""
        src="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2023/02/logo-1.png"
      />
      <b-navbar-nav v-if="showList">
        <b-nav-item href="link.link" v-for="link in links" key="index">{{
          link.name
        }}</b-nav-item>
      </b-navbar-nav>
      <button
        v-if="!showList"
        @click="openMenu"
        class="d-flex justify-content-center align-items-center"
      >
        <b-icon icon="list"></b-icon>
      </button>
      <button
        v-if="showList"
        @click="closeMenu"
        class="d-flex justify-content-center align-items-center btn__icon--x"
      >
        <b-icon icon="x"></b-icon>
      </button>
    </b-navbar>
  </div>
</template>

<script>
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
      showList: false,
    };
  },
  methods: {
    openMenu() {
      this.showList = true;
      document.documentElement.classList.add("no-scroll");
    },
    closeMenu() {
      this.showList = false;
      document.documentElement.classList.remove("no-scroll");
    },
  },
};
</script>
<style>
.no-scroll{
  overflow: hidden;
}
@media screen and (max-width: 959px) {
  .header__mobile {
    z-index: 1;
    display: block !important;
  }
  .navbar {
    position: relative;
  }
  .navbar-nav {
    position: absolute;
    top: 0;
    z-index: 1000;
    background-color: #fff;
    height: 100vh;
    transition: 2s;
    padding: 67px 32px 32px 25px;
    width: 100vw;
    position: fixed;
    left: 0;
  }
  .navbar .navbar-nav .nav-item a {
    padding: 7px;
    font-size: 17px;
    line-height: 26px;
  }

  .navbar button {
    z-index: 1001;
    border-radius: 0;
    background-color: transparent;
    padding: 5px;
    border: 1px solid #9292923b;
    position: relative;
    width: 34px;
  }
  .navbar button:hover {
    background-color: transparent;
    border: 1px solid #9292923b;
    outline: none;
  }
  .navbar button svg {
    font-size: 25px;
    color: #000;
  }
  .navbar .btn__icon--x svg {
    font-size: 32px;
  }
  .navbar .btn__icon--x {
    border: none;
    right: 26px;
    top: 8px;
    position: relative;
  }
  .navbar .btn__icon--x:hover {
    border: none;
  }
}
</style>
