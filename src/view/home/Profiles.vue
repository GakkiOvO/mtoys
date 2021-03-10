<template>
  <div id="Profiles">
    <div class="flex">
      <div class="comany">
        <div class="title">PROFILE</div>
        <div class="group">
          <img src="@/assets/image/home/img_profile.webp" alt="" />
          <div class="context">
            Founded in 2015, Shenzhen Warmdoll Model Co., Ltd. is a designer and producer of adult
            products for people of all shapes and sizes. We have a full selection of small
            vibrators, massagers, vibrating eggs, dildos, anal plugs, and much more. Whether you are
            looking to keep things interesting in your relationship or explore your own needs, we
            offer everything you can think of to liven up your sex life. <br /><br />Our factory is
            located in Dongguan, Guangdong and we have more than 100 highly skilled employees. We
            can provide complete independent processing for sex toy production, including
            pre-design, mold opening, and injection molding.
          </div>
        </div>
        <div class="ce">
          <div>
            <img src="@/assets/image/home/icon_ce.png" />
            <div class="ce-title">Quality assurance</div>
            <div>Strictly comply with CE standards.</div>
          </div>
          <div>
            <img src="@/assets/image/home/icon_fast.png" />
            <div class="ce-title">Deliver fast</div>
            <div>Our average delivery time is 7-25 days</div>
          </div>
          <div>
            <img src="@/assets/image/home/icon_word.png" />
            <div class="ce-title">Customer service</div>
            <div>Our customers come from all over the world.</div>
          </div>
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
  margin-top: 136px;
  font-family: ArialMT;
  font-size: 26px;
  font-weight: normal;
  color: #1d1d1f;
  .title {
    margin: 189px 0 95px;
    color: #515154;
    font-size: 56px;
    font-weight: 900;
  }
  .ce-title {
    margin: 47px 0 28px;
    font-size: 30px;
    font-weight: 100;
  }
  .context {
    padding: 0 13px;
    margin-top: 91px;
    color: #515154;
    line-height: 36px;
    text-align: justify;
  }
  .flex {
    padding: 0 16px;
    .comany {
      display: flex;
      flex-direction: column;
      align-items: center;
      .ce {
        text-align: center;
        > div {
          margin-top: 88px;
        }
      }
    }
  }
}
</style>
