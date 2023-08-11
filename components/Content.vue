<template>
  <div>
    <AlbumImages></AlbumImages>
    <div class="d-flex m-auto" style="max-width: 1180px">
      <ContentLeft></ContentLeft>
      <ContentRight></ContentRight>
    </div>
  </div>
</template>

<script>
import AlbumImages from './AlbumImages.vue';
import ContentLeft from "./LeftContent.vue";
import ContentRight from "./RightContent.vue";
export default {
  components: {
    AlbumImages,
    ContentLeft,
    ContentRight,
  },
};
</script>
<style></style>
