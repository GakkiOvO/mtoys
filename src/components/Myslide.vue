<template>
  <div id="Myslide">
    <vueper-slides
      ref="vueperslides1"
      class="no-shadow"
      :touchable="false"
      fade
      :autoplay="false"
      :bullets="false"
      :arrows="false"
      fixed-height="500px"
      @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
    >
      <vueper-slide v-for="(slide, i) in srcList" :key="i" :image="slide.image"> </vueper-slide>
    </vueper-slides>

    <vueper-slides
      ref="vueperslides2"
      class="no-shadow thumbnails"
      :visible-slides="srcList.length > 4 ? 4 : srcList.length"
      fixed-height="100px"
      :bullets="false"
      :arrows="false"
      :touchable="false"
      :gap="5"
      @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
    >
      <vueper-slide
        v-for="(slide, i) in srcList"
        :key="i"
        :image="slide.image"
        @click.native="$refs.vueperslides2.goToSlide(i)"
      >
      </vueper-slide>
    </vueper-slides>
    <div class="arrows">
      <div class="left" @click="$refs.vueperslides1.previous()"></div>
      <div class="right" @click="$refs.vueperslides1.next()"></div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: 'Myslide',
  components: { VueperSlides, VueperSlide },
  props: {
    srcList: {
      type: Array,
      // default: function () {
      //   return { productIconUrl: require('@/assets/image/home/icon_ce@2x.webp') }
      // },
      default: function () {
        return []
      },
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped>
#Myslide {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 532px;
  height: 650px;
  z-index: 0;
  .thumbnails {
    margin: auto;
    width: 100%;
  }
  .vueperslides--fixed-height.vueperslides--bullets-outside {
    margin-bottom: 0;
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
    border-bottom: 2px solid #ff4f8d;
  }
  .arrows {
    position: relative;
    display: flex;
    justify-content: space-between;
    bottom: 42px;
  }
  .left {
    position: relative;
    left: -12px;
    bottom: 16px;
    width: 7px;
    height: 7px;
    border-top: 2px solid #929292;
    border-right: 2px solid #929292;
    transform: rotate(-135deg);
    cursor: pointer;
  }
  .right {
    position: relative;
    right: -12px;
    bottom: 16px;
    width: 7px;
    height: 7px;
    border-top: 2px solid #929292;
    border-right: 2px solid #929292;
    transform: rotate(45deg);
    cursor: pointer;
  }
}
</style>
