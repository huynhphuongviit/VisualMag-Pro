<template>
  <section class="blogging">
    <HeaderSection name="Blogging" nuxtlink="https://demo.wpenjoy.com/visualmag-pro/category/blogging/"></HeaderSection>
    <div class="d-flex container__section">
      <div class="blogging__container--extra">
        <ul class="d-flex blogging__ul">
          <li class="d-flex flex-column blogging__li">
            <NuxtLink
              to="https://demo.wpenjoy.com/visualmag-pro/a-starter-guide-to-google-ads-manager-accounts/"
            >
              <figure class="blogging__figure">
                <img
                  src="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/architecture-building-400x266.jpeg"
                  alt=""
                  loading="lazy"
                />
              </figure>

              <div class="blogging__content">
                <h2 style="margin-bottom: 5px" class="blogging__h2">
                  A Starter Guide to Google Ads Manager Accounts
                </h2>
              </div>
            </NuxtLink>
          </li>
          <li class="d-flex flex-column blogging__li">
            <NuxtLink
              to="https://demo.wpenjoy.com/visualmag-pro/how-to-use-amazon-attribution-for-ad-campaigns/"
            >
              <figure class="blogging__figure">
                <img
                  src="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/family-bathroom-400x266.jpeg"
                  alt=""
                  loading="lazy"
                />
              </figure>

              <div class="blogging__content">
                <h2 style="margin-bottom: 5px" class="blogging__h2">
                  How to Use Amazon Attribution For Ad Campaigns
                </h2>
              </div>
            </NuxtLink>
          </li>
          <li class="d-flex flex-column blogging__li">
            <NuxtLink
              to="https://demo.wpenjoy.com/visualmag-pro/how-to-convert-blog-readers-into-customers/"
            >
              <figure class="blogging__figure">
                <img
                  src="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/colored-pastels-400x266.jpeg"
                  alt=""
                  loading="lazy"
                />
              </figure>

              <div class="blogging__content">
                <h2 style="margin-bottom: 5px" class="blogging__h2">
                  How to Convert Blog Readers Into Customers
                </h2>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style >
.blogging {
  width: 98%;
  margin: 40px 0 30px 0;
}
.blogging__container--extra {
  width: 100%;
}

.container__section {
  margin-top: 20px;
}

.blogging__ul {
  padding: 0;
  list-style: none;
}
.blogging__li {
  width: 33.33%;
  padding: 0 15px;
}
.blogging__li a{
  color: #000;
  text-decoration: none;
}
.blogging__li:nth-child(1) {
  padding-left: 0;
}
.blogging__li:nth-child(2) {
  padding: 0 8px;
}
.blogging__li:nth-child(3) {
  padding-right: 0;
}
.blogging__li figure img {
  width: 100%;
}

.blogging__li .blogging__content h2 {
  display: flex;
  align-items: flex-start;
  font-size: 18px;
  font-weight: bold;
}
</style>
