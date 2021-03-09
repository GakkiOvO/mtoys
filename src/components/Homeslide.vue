<template>
  <div id="Myslide">
    <vueper-slides
      ref="vueperslides1"
      class="no-shadow"
      :touchable="false"
      autoplay
      :arrows="false"
      fixed-height="634px"
      @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"> </vueper-slide>
    </vueper-slides>
    <img class="shadow" src="@/assets/image/home/shadow.webp" alt="" />
    <div class="view">
      <div class="group">
        <div class="type1">SEX</div>
        <div class="type1 small">ADULT PRODUCTS</div>
      </div>
      <!-- <div class="type2 more">VIEW MORE >></div> -->
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: 'Myslide',
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        { image: require('@/assets/image/home/banner-_01.jpg') },
        { image: require('@/assets/image/home/banner-_02.jpg') },
      ],
    }
  },
  methods: {
    pause() {
      this.$refs.vueperslides1.pauseAutoplay()
    },
    resume() {
      this.$refs.vueperslides1.resumeAutoplay()
    },
  },
}
</script>

<style lang="less" scoped>
#Myslide {
  position: relative;
  z-index: 0;
  .thumbnails {
    margin: auto;
    width: 100%;
    max-width: 300px;
  }
  .vueperslides--fixed-height.vueperslides--bullets-outside {
    margin-bottom: 0;
  }
  /deep/.vueperslides__bullet {
    z-index: 2;
    // color: mediumpurple !important;
  }
  .thumbnails .vueperslide {
    box-sizing: border-box;
    border: 1px solid #fff;
    transition: 0.3s ease-in-out;
    opacity: 0.7;
    cursor: pointer;
  }

  .thumbnails .vueperslide--active {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    opacity: 1;
    border-color: #000;
  }
  .arrows {
    position: relative;
    display: flex;
    justify-content: space-between;
    bottom: 42px;
  }
  .left {
    width: 7px;
    height: 7px;
    border-top: 2px solid #929292;
    border-right: 2px solid #929292;
    transform: rotate(-135deg);
    cursor: pointer;
  }
  .right {
    width: 7px;
    height: 7px;
    border-top: 2px solid #929292;
    border-right: 2px solid #929292;
    transform: rotate(45deg);
    cursor: pointer;
  }
  .more {
    cursor: pointer;
    border-radius: 10px;
    width: 128px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-family: ArialMT;
    font-size: 12px;
    font-weight: normal;
    border: solid 1px #ffffff;
    color: #ffffff;
  }
  .type1 {
    font-family: 'ArialMT';
    font-size: 80px;
    font-weight: 900;
    line-height: 80px;
    letter-spacing: 1px;
    color: #ffffff;
    &.small {
      line-height: normal;
      font-size: 50px;
    }
    .type2 {
      font-family: 'ArialMT';
      font-size: 12px;
      font-weight: normal;
    }
  }
  .shadow {
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1;
  }
  .view {
    position: absolute;
    left: 399px;
    bottom: 92px;
    z-index: 1;
    .group {
      position: relative;
      bottom: 31px;
    }
  }
}
</style>
