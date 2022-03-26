<template>
  <div
    class="p-3"
    style="background-color: #1b7340; box-shadow: #1da64a 5px 5px"
  >
    <a href="https://fffutu.re/pirna" target="_blank">
      <div class="is-flex is-align-items-center mb-2">
        <img
          class="mr-3"
          style="
            width: 32px;
            heigth: auto;
            border-radius: 500rem;
            border-color: white;
            border: 1px solid white;
          "
          src="@/assets/logo.png"
        />
        <div style="color: white"><b>fffpirna</b></div>
      </div>
    </a>
    <b-carousel
      :autoplay="true"
      :interval="4000"
      indicator-style="is-lines"
      indicator-position="is-top"
      :pause-hover="false"
    >
      <b-carousel-item v-for="img in images" :key="images.indexOf(img)">
        <b-image v-if="!img.endsWith('.mp4')" :src="img" />
        <div v-else class="m-6" style="color: white">
          Video noch nicht unterstützt :(
        </div>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: this.$config.images,
    };
  },
};
</script>

<style>
div.carousel
  div.carousel-indicator.is-inside.is-top
  a.indicator-item
  span.indicator-style.is-lines {
  color: white;
  background-color: white;
  border-color: white;
  height: 5px;
  width: 40px;
}

div.carousel
  div.carousel-indicator.is-inside.is-top
  a.indicator-item.is-active
  span.indicator-style.is-lines {
  color: white;
  background-color: #90d3ed;
  border-color: #90d3ed;
  height: 5px;
  width: 40px;
}
</style>
