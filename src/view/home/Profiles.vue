<template>
  <div id="Profiles">
    <div class="flex">
      <div class="banner">
        <!-- <img src="@/assets/image/home/banner_03.webp" alt="" /> -->
        <video
          poster="@/assets/image/home/banner_03.webp"
          src="http://tv.etwvideous15.com/en/szwomengduo/1-about_warmdoll_en.mp4"
          playsinline="true"
          webkitPlaysinline="true"
          autoplay
          controls
        >
          您的浏览器不支持 video 标签.
        </video>
      </div>
      <div class="comany">
        <div class="title">COMANY PROFILES</div>
        <div class="group">
          <img src="@/assets/image/home/img_prof_01.webp" alt="" />
          <img src="@/assets/image/home/img_prof_02.webp" alt="" />
          <img src="@/assets/image/home/img_prof_03.webp" alt="" />
          <div class="context">
            Founded in 2015, Shenzhen Warmdoll Model Co., Ltd. is a designer and producer of adult
            products for people of all shapes and sizes. uc h more. <br />Whether you are looking to
            keep things interesting in your relationship or explore your own needs, we offer
            everything you can think of to liven up your sex life. <br /><br />Our factory is
            located in Dongguan, Guangdong and we have more than 100 highly skilled employees. We
            can provide complete independent processing for sex toy production, including
            pre-design, mold opening, and injection molding.
          </div>
        </div>
      </div>
      <div class="course">
        <div class="underline"></div>
        <div class="between">
          <img src="@/assets/image/home/img_prof_04.webp" alt="" />
          <div class="context-group">
            <div class="context big group1">
              We began as a small operation producing adult products with a line of metal anal
              plugs.
            </div>
            <div class="context big group2">
              Shenzhen Warm doll Model Co.， Ltd.was officially established in Shenzhen， focusing
              on the adult products industry.
            </div>
            <div class="context big group3">
              An adult products mold and assembly factory was setup in the Dongguan Industrial Park.
            </div>
            <div class="context big group4">
              Two production lines were built with an independent design department， R&D department
              and procurement department.Service customers include：<span class="special"
                >LE LO， E IS， AN SELL， Car vaka SexToys， etc.</span
              >
            </div>
            <div class="context big group5">
              we are expanding our production scale and planning an independent quality laboratory
              to carryout experiments and testing to ensurethe quality of the products.
            </div>
          </div>
        </div>
        <div class="context fullline">
          As the standards of living improves all over the world, people are becoming more aware of
          the importance of a healthy sex life. This awakening has led to a rise in the popularity
          of sex toys across the board.<br /><br />

          Shenzhen Warmdoll Model Co. is a trusted source of adult toys and OEM and ODM services. We
          have worked with some of the most prominent names in the sex toy industry to help them
          meet their production needs. Warmdoll has always been dedicated to ensuring customers have
          access to a selection of high quality, affordable, and safe sex toys.<br /><br />

          Starting with a line of traditional sex toys, we have since developed and expanded our
          catalog of products to meet the unique and diverse requirements of users all around the
          world.<br /><br />

          As the rubber material quality used in sex toys directly affects the end user’s experience
          and safety, we use high grade silicone that undergoes strict inspection via qualified
          inspection personnel. The material ensures a hygienic toy that is soft to the touch and
          safe. We process these materials with 20 injection molding machines to further enhance the
          quality of the materials and the end products. Thanks to the carefully selected materials
          and advanced processing equipment, we can guarantee every product is of the best possible
          quality and meets the requirements and standards laid out in the design drawings. Once
          products are completed, we have specially assigned personnel for the cleaning and
          packaging of products so that the sex toys received by customers are safe and ready to use
          without worry.
        </div>
        <div class="center">
          <img src="@/assets/image/home/img_prof_05.webp" alt="" />
        </div>
        <div class="context fullline">
          After a decade of development, Warmdoll has established strong partnerships with a number
          of internationally known names in the sex toy business, including LELO, Bondara, EIS,
          ANSELL and more. Our products have been exported to Japan, Germany, the United Kingdom,
          United States, Switzerland, Russia and more than 80 countries and regions around the
          world. We look forward to continuing our efforts of providing custom, high quality adult
          toy products to our customers.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profiles',
  methods: {},
}
</script>

<style lang="less" scoped>
#Profiles {
  padding-top: 136px;
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .context {
      font-family: ArialMT;
      font-size: 26px;
      font-weight: normal;
      line-height: 28px;
      color: #515154;
      padding: 0 38px;
      // width: 592px;
      &.big {
        font-size: 22px;
        padding: 0 0 0 1px;
        color: #1d1d1f;
        width: 100%;
      }
      &.group1 {
        padding-top: 88px;
        // padding-right: 19px;
      }
      &.group2 {
        padding-top: 60px;
        // padding-right: 29px;
      }
      &.group3 {
        padding-top: 56px;
        // padding-right: 35px;
      }
      &.group4 {
        padding-top: 48px;
        // padding-right: 20px;
      }
      &.group5 {
        padding-top: 27px;
        // padding-right: 32px;
      }
      &.fullline {
        width: 100%;
        font-size: 26px;
        line-height: 36px;
      }
      // .special {
      //   font-family: SimSun;
      // }
    }
    .banner {
      margin: 0 auto 180px;
      video {
        width: 750px;
        height: 432px;
        object-fit: cover;
      }
    }
    .comany {
      margin: auto;
      .title {
        margin-bottom: 119px;
        text-align: center;
        font-family: ArialMT;
        letter-spacing: 1px;
        font-size: 56px;
        font-weight: 900;
        color: #1d1d1f;
      }
      .group {
        margin-bottom: 119px;
        img {
          padding: 0 83px 40px;
        }
      }
    }
    .course {
      margin: 0 auto 224px;
      .underline {
        margin: 0 25px 49px;
        border: 1px solid#d6d6d6;
      }
      .between {
        margin-bottom: 76px;
        display: flex;
        justify-content: space-between;
        img {
          width: 260px;
          height: 740px;
        }
        // .context-group {
        //   padding-right: 12px;
        // }
      }
      .center {
        text-align: center;
        margin: 193px 0 97px;
      }
    }
  }
}
</style>
