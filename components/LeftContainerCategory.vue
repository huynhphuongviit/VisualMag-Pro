<template>
  <section class="category__container--left">
    <div class="category__container__header">
      <h1>{{ formatText(category) }}</h1>
      <h2>Category description here</h2>
    </div>
    <SmallTechnology :data="paginatedItems" :totalViews="paginatedItems.length"></SmallTechnology>
    <div class="category__container__button">
      <button v-if="currentPage !== 1" @click="goToPage(currentPage - 1)">
        PREVIOUS PAGE
      </button>
      <div class="container__button--option">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="currentPage === page ? 'btn__active' : ''"
          style="margin-right: 5px"
        >
          {{ page }}
        </button>
      </div>
      <button
        @click="goToPage(currentPage + 1)"
        v-if="currentPage !== totalPages"
      >
        NEXT PAGE
      </button>
    </div>
  </section>
</template>

<script>
import SmallTechnology from "./SmallTechnology.vue";
import { dataFake } from "../store/dataFake";
export default {
  data() {
    //fetch data
    let category = this.$route.params.id;
    const items = dataFake?.filter((e) => e.categories.includes(category));
    return {
      category,
      items,
      itemsPerPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.items.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
  },
  methods: {
    goToPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
    formatText: (value) => {
      if (!value) return "";
      return value
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },
  },

  components: { SmallTechnology },
};
</script>
<style>
.category__container__header {
  border-bottom: 1px solid #e9e9e9;
  position: relative;
  width: 100%;
}
.category__container__header h1 {
  font-size: clamp(1.375rem, 1.2434rem + 0.5263vw, 1.875rem);
  font-weight: 700;
}
.category__container__header h2 {
  margin-top: 14px;
  margin-bottom: 20px;
  font-size: 15px;
  font-family: "Inter";
  font-weight: 400;
}
.category__container--left ul li .technology__container--content {
  padding-left: 20px;
}
.category__container--left ul li .technology__container--content h3{
  margin-top: 13px;
  color: #000;
  font-weight: 400;
}
.category__container--left ul li {
  border-bottom: 1px solid #e9e9e9;
  padding: 16px 0;
}
.category__container__button {
  display: flex;
  justify-content: space-between;
  margin: 30px 0 40px 0;
}
.category__container__button button {
  background-color: #f0f0f0;
  outline: none;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  font-family: "Inter";
}
.category__container__button button:hover,
.category__container__button .btn__active {
  background-color: #0099e5;
  color: #fff;
}
</style>
