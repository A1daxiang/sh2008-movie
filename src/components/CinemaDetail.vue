<template>
  <div class="cnmdetail">
    <div class="goBack" @click="goBack()">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
        alt=""
      />
    </div>
    <div class="header-title">SFC上影影城（新世界店）</div>
    <div class="tags">
      <div class="tag">前台兑换</div>
      <div class="tag">儿童票</div>
      <div class="tag">停车</div>
      <div class="tag">优惠</div>
      <div class="tag">3D眼镜</div>
      <div class="tag">影厅介绍</div>
      <i
        class="tag-more iconfont icon-quanju_liebiaojiantou"
        style="font-size: 10px"
      ></i>
    </div>

    <div  class="address">
      <img
        
        src="data:image/png;base64,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"
        width="14px"
        height="21px"
        alt=""
      />
      <div
        
        class="address-des"
        data-enter-time="1603282835"
        data-click-fun="track_f_931085"
      >
        上海市黄浦区南京西路2-68号新世界12楼
      </div>
      <a
        
        href="tel:021-63594933"
        class="tel-icon"
        data-enter-time="1603282835"
        data-click-fun="track_f_808489"
        ><img
          
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA2CAMAAABdslGrAAACJVBMVEVHcEwhISEzMzMZHBwZMzMZGhsZGxsZGhsZGhv///8ZGxsbGxsfHx8kJCQaGh0bGxsZGhsZJiYqKioaGhwZHR0ZGhsZGhsZGxsZGhsaGh5VVVV/f38ZGhscHBwZGhsZGhsaGigZGhsZGhwZGhsZGhsaGh8ZGhsaGhsbGxsaGhsaGhsZHBwaGh0fHx8nJycZGhwZGxscHBwZGxsZGhscHBwbGxsZGxsaGhsaGhscHBwaGiAZGxsaGhsaGhwZHBwZGxsaGh4ZGhsZGhsZGhsZGxsZGhscHBwZGhsaGhwdHR0fHx8ZGhwZGxsZGhwkJCQaGiMZGhsZGhsbGxsdHR0ZGhsbGxsaGhsaGhsaGhsZGxscHBwbGxsZGxsZGhwZHx8ZGxsaGhseHh4aGh0cHBwbGxsZHh4bGxsaGhsZGhweHh4ZGxsZGxsZGhsZHh4ZGxsaGhseHh4cHBw/Pz8ZGhsfHx8ZGxsZGxsZGhsaGh0ZGxsZGhwcHBwaGhsaGhwbGxsZGhwZGhwZGxsZGhsZGhwZGxsaGhsiIiIZGhsZGhscHBwZHBwaGhwqKioZGhwZGhsaGh8ZIiIaGhseHh4ZGxsaGhwbGxsbGxsZGxsZGxsZGhsaGh8ZGhwaGh0ZGhsZGhsZGxsZGhwaGh0aGhwZHBwaGhwbGxsZGxsaGh0ZGxsbGxsfHx8eHh4ZGhsdHR0ZGhsbGxsZGhsZGhsZHR0ZGhsZGhwaGhwZGhuqFRxRAAAAtnRSTlMAFwVZCvqy/v0Bl2cQB2kl5RQGYT3M+NnKQwMC8iTq8BP7vfbtMO65QsOldk4gDceDPs75G16zkq4SJ52TiFtuTOfd5Kr3CfR/Iwi1oNoVHfPWcTS3L5u6nLtISWW/KHfrImg/SjNBxLQqlajUO8bXITUE6RiEje9Wiq029WpA45mx0qNvpBbByy1kYgyr5jkerxGMkS43eGbbMch78dWe0V+FbHxUgXJ5XCkZ4CvJOOj8RdOYkJ3guaYAAAJ3SURBVBgZvcEFcxNRAEbRr22S3dTd3XApLoVCi7u7u7u7u7u7u97fR5NNCkM2vGWY4Rz9m025DUH9jQHJmUC7Ennma7QIS5JXqT1o5c+EU/LoXDcgryg7qwZy5c04sJcEJR2Cy/KkzoYchSywsEfLiwAMk2MsNMqDtBqsMjmKYGSqzJbCV0U9goUyS4dvinoMLYkySofvisoeCoNltASS1eYe5MloGXxQm8oaWCqT1CrsCWqTDIdlNB9y1GaAhZ0hk5fQTz/1gd0yKYORYxTVqwOsktFkWKaInFIgSUaDYKAc6y2wO8nsBgyfoLDNwDx5cRdeyLEHugXlwXNYNEJhXYZDb3lQ3AzpcnSHC1fkwVMYX6Iw30EYG5SZrxZuyTHEglHy4BnUn5DjCdhzZZY2Ho7KUTIT6hfIrAhoL0flO/j0XmbHoSBNjuWlsKhORgk7oa8iPlZA/VSFrBjVOah4UoCzilheC5NeS4kzgHYJimct9LyoiOnlwLj+AUK2zlEcvh4wtJci3kwG9gErbbB2ZMvdpXIoHKEI30NCktU+E8jLkLsGP5zsqqjBpTCtWMrqA0zqLXcpQGF/RWX0W+NTSFM+0LGrXB2z4EiCYkzfCDTvlaszNhRMVAzfLMDfKSg3SVVQPlexdlUAsxPkpnM+WFcTFaPLBmBdqtzktgCFoxVjy3Yb9stVZQC4n1KsGB0gXXE05QMPhug3ddBzm+K5U0Cr+VP1q8RqGKj4xtysAKxhB4KKCnYEa7X+JOuan1a3X71V2OKZwBQZlJ0n5HNg3pc5KQE/MEhmp/vW8lNVd3mSllRtEWZVX5dnixfOmj1txpSJ+t9+AAZEC6aFGvT2AAAAAElFTkSuQmCC"
          width="17px"
          height="18px"
          alt=""
      /></a>
    </div>

    <div class="schedule-wrap">
      <div class="film-bg">
        <div
          class="img"
          style="
            background-image: url('https://pic.maizuo.com/usr/movie/0b4e01c33b555e533cf8aca71b67df1a.jpg');
          "
        ></div>
      </div>

      <div class="film-list">
        <div
          class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-ios"
        >
          <div
            class="swiper-wrapper"
            style="
              transition: all 0ms ease 0s;
              transform: translate3d(151.875px, 0px, 0px);
            "
          >
            <div
              class="swiper-slide swiper-slide-active"
              style="width: 71.25px; margin-right: 30px"
            >
              <div class="film-item">
                <div class="img-wrap">
                  <img
                    src="https://pic.maizuo.com/usr/movie/0b4e01c33b555e533cf8aca71b67df1a.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="swiper-slide swiper-slide-next"
              style="width: 71.25px; margin-right: 30px"
            >
              <div class="film-item">
                <div class="img-wrap">
                  <img
                    src="https://pic.maizuo.com/usr/movie/32c92eaddb6864b656b267da76751b38.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="swiper-slide"
              style="width: 71.25px; margin-right: 30px"
            >
              <div class="film-item">
                <div class="img-wrap">
                  <img
                    src="https://pic.maizuo.com/usr/movie/fad9f1e9a5c38f3883d7f9b5e561e5fe.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="swiper-slide"
              style="width: 71.25px; margin-right: 30px"
            >
              <div class="film-item">
                <div class="img-wrap">
                  <img
                    src="https://pic.maizuo.com/usr/movie/75d95b53eed62b9df354695a0578fc0c.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="swiper-slide"
              style="width: 71.25px; margin-right: 30px"
            >
              <div class="film-item">
                <div class="img-wrap">
                  <img
                    src="https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="swiper-slide"
              style="width: 71.25px; margin-right: 30px"
            >
              <div class="film-item">
                <div class="img-wrap">
                  <img
                    src="https://pic.maizuo.com/usr/movie/eed45f47017ac50aed3a685b33c3f745.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="swiper-slide"
              style="width: 71.25px; margin-right: 30px"
            >
              <div class="film-item">
                <div class="img-wrap">
                  <img
                    src="https://pic.maizuo.com/usr/movie/5b5a1912708a8621b9ac8f0d918a226f.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="swiper-slide"
              style="width: 71.25px; margin-right: 30px"
            >
              <div class="film-item">
                <div class="img-wrap">
                  <img
                    src="https://pic.maizuo.com/usr/movie/d0d73a81cf3883c366870ba0e1a51baa.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="swiper-slide"
              style="width: 71.25px; margin-right: 30px"
            >
              <div class="film-item">
                <div class="img-wrap">
                  <img
                    src="https://pic.maizuo.com/usr/movie/bd90f19c4913df9aa62ccd89f92ef474.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="swiper-slide"
              style="width: 71.25px; margin-right: 30px"
            >
              <div class="film-item">
                <div class="img-wrap">
                  <img
                    src="https://pic.maizuo.com/usr/movie/5bd171d9d64480a9719793145418d145.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="swiper-slide"
              style="width: 71.25px; margin-right: 30px"
            >
              <div class="film-item">
                <div class="img-wrap">
                  <img
                    src="https://pic.maizuo.com/usr/movie/b6ea145c129cbf12a87e7d065dd9f76e.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <span
            aria-live="assertive"
            aria-atomic="true"
            class="swiper-notification"
          ></span>
        </div>
        <div class="triangle">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUAgMAAACCKJcoAAAACVBMVEVHcEz////////mcEUwAAAAAnRSTlMAgJsrThgAAABLSURBVAgdBcEBDQAACAMg/GYDAxnB/mkEUAuBPgjMQOAagtpaBM0hGAbB0Qi11BIajjAwhIMmaqFWNHBigBEHtNQCtWmAywBMDqAfx4oGipkmrUEAAAAASUVORK5CYII="
            width="20px"
            height="10px"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  },
  mounted() {
    // 关于this.$nextTick()函数,当当前异步操作全部做完之后再去做其里面的东西
    this.$nextTick(() => {
      var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        },
      });
    });
  },
};
</script>

<style lang="css" scoped>
/* .cnmdetail {
} */
.header-title {
  position: relative;
  text-align: center;
  font-size: 17px;
  color: #191a1b;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  padding: 0 15px;
  background: #fff;
  top: 0;
  height: 44px;
  line-height: 44px;
  z-index: 302;
}
.goBack {
  position: fixed;
  top: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  padding-left: 15px;
  z-index: 303;
}
.goBack img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.header-title {
  position: relative;
  text-align: center;
  font-size: 17px;
  color: #191a1b;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  padding: 0 15px;
  background: #fff;
  top: 50px;
  height: 44px;
  line-height: 44px;
  z-index: 2;
}
.tags {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #ffb232;
  overflow: hidden;
  position: relative;
  padding: 5px 0 15px;
  margin-top: 55px;
}
.tags .tag {
  position: relative;
  padding: 0 6px;
  margin: 0 2.5px;
  font-size: 10px;
  margin-top: 00px;
}
.tags i {
  margin-left: 5px;
}

.address{
    height: 50px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: 17px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.address img{
    width: 14px;
    height: 21px;
}
.address .address-des{
    font-size: 14px;
    height: 20px;
    padding: 0 12px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.address .tel-icon{
    height: 18px;
    padding: 0 25px;
}






.film-bg {
  position: absolute;
  top: 200px;
  height: 160px;
  width: 100%;
  padding: 15px 0;
  overflow: hidden;
}

.film-bg .img {
  height: 100%;
  width: 100%;
  filter: blur(30px);
}
.film-list {
  height: 128px;
  position: relative;
  padding: 15px 0;
  margin-top: 25px;
}
.schedule-wrap .triangle{
     position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 22px;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}
.schedule-wrap .swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}

.swiper-slide {
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
}

.swiper-container img {
  width: 90px;
  height: 130px;
}
.cinema-schedule .schedule-wrap .triangle {
  display: flex;
  justify-content: center;
}
</style>