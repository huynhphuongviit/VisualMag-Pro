<template>
  <section class="detail__container--left">
    <div class="detail__container__header">
      <NuxtLink
        :to="'/category/' + categories"
        v-for="categories in filterItem[0]?.categories"
        key="index"
        >{{ convertToUpperCase(categories) }}</NuxtLink
      >
    </div>
    <nuxt-content :document="content" />
    <div class="detail__container__content">
      <h1>{{ filterItem[0]?.title }}</h1>
      <div class="detail__content__info">
        <p>Posted by</p>
        <p>{{ filterItem[0]?.name }}</p>
        <p>-</p>
        <time>{{ this.$formatDate(new Date(filterItem[0]?.time), 'MMMM dd, yyyy') }}</time>
      </div>
      <figure>
        <img :src="filterItem[0]?.src" />
      </figure>
      <p>{{ filterItem[0]?.description }}</p>
      <div class="detail__tags__container">
        <span v-for="tag in filterItem[0]?.tags">
          <NuxtLink :to="'/tag/'+tag">{{ convertToUpperCase(tag) }}</NuxtLink>
        </span>
      </div>
      <div class="author__box">
        <div class="author__box__icon">
          <img
            alt=""
            src="https://gravatar.wpenjoy.com/avatar/aed1547d950cb2ba8534a6df5915786f?s=48&d=mm&r=g"
          />
          <span>John Doe</span>
        </div>
        <p>
          Your introduction goes here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
      <h3>Leave a Reply</h3>
      <form class="form__coment">
        <label for="exampleFormControlTextarea1"
          >Your email address will not be published. Required fields are marked
          *
        </label>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Comment * </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name *</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email *</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Website</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label class="form-check-label" for="defaultCheck1">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Post Comment</button>
      </form>
    </div>
  </section>
</template>

<script>
import { dataFake } from "../store/dataFake";
export default {
  data() {
    return {
      item: dataFake,
    };
  },
  computed: {
    filterItem() {
      let params = this.$route.params.params;
      return this.item.filter((e) => this.formatParam(e.title) === params);
    },
  },
  methods: {
    convertToUpperCase(str) {
      return str.replace(/-/g, " ").toUpperCase();
    },
    formatParam(param) {
      return param.toLowerCase().replace(/[^a-z0-9]/g, "-");
    },
  },
};
</script>
<style>
.detail__container__header {
  position: relative;
  width: 100%;
  margin: 0 0 1.5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px
}
.detail__container__header a {
  background-color: #0099e5;
  font-size: 12px;
  font-family: "Inter";
  color: #fff;
  padding: 5px 8px;
}
.detail__container__header a:nth-child(2) {
  background-color: #00c16e;
}
.detail__container__header a:nth-child(3) {
  background-color: #8e43e7;
}

.detail__container__header a:nth-child(4) {
  background-color: #b84592;
}
.detail__container__header a:nth-child(5) {
  background-color: #ff4f81;
}
.detail__container__header a:nth-child(6) {
  background-color: #ff6c5f;
}
.detail__container__content {
  margin-top: 30px;
}
.detail__container__content h1 {
  margin-top: 10px;
  font-size: clamp(1.375rem, 1.2434rem + 0.5263vw, 1.875rem);
  font-weight: 700;
}
.detail__content__info {
  display: flex;
  margin: 14px 0 19px 0;
}
.detail__content__info time,
.detail__content__info p {
  font-size: 13px;
  font-family: "Inter";
  margin-right: 5px;
}
.detail__content__info p:nth-child(2) {
  font-weight: 700;
}
.detail__container__content figure img {
  width: 100%;
  height: 100%;
}
.detail__tags__container span a{
  background-color: #f0f0f0;
  color: #333;
  display: inline-block;
  font-size: 11px;
  line-height: 1.4;
  margin-right: 5px;
  padding: 4px 10px;
}
.detail__tags__container span a:hover{
  background-color: #333;
  color: #fff;
}
.author__box {
  border: 1px solid #e9e9e9;
  margin-top: 20px;
  padding: 24px;
}
.author__box img {
  width: 24px;
  border-radius: 12px;
}
.author__box span {
  color: #222;
  font-weight: bold;
  font-size: 16px;
  font-family: "Inter";
}
.author__box p {
  font-size: 0.95em;
  margin: 10px 0 0;
  font-family: "Inter";
  color: #222;
  font-weight: 400;
  line-height: 1.5;
}
.detail__container__content h3 {
  font-size: 18px;
  margin: 30px 0 0;
  font-family: "Inter";
  color: #222;
  font-weight: 700;
  line-height: 1.5;
}
.form__coment .form-group input,
.form__coment .form-group textarea {
  border-radius: 0;
  border-color: #e9e9e9;
}
.form__coment .form-group textarea:focus,
.form__coment .form-group input:focus {
  outline: none;
  box-shadow: none;
  border-color: #80bdff;
}
.form__coment .form-group input {
  height: 55px;
}
.form__coment .form-group textarea {
  height: 120px;
}
.form__coment {
  margin-top: 20px;
  margin-bottom: 40px;
}
.form__coment .form-group {
  margin-top: 10px;
}
.form__coment button {
  border-radius: 0;
  padding: 10px 30px;
  font-size: 17px;
  margin: 16px 0;
}
</style>
