<template>
  <div class="detail">
    <div class="goBack" @click="goBack()">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
        alt=""
      />
    </div>
    <div class="img">
      <img v-lazy="film.poster" />
    </div>

    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{ film.name }}</span>
          <span class="item">{{ film.filmType.name }}</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{ film.grade }}</span>
          <span class="grade-text">&nbsp;分</span>
        </div>
      </div>
      <div class="grey-text">{{ film.category }}</div>
      <div class="grey-text">{{ film.premiereAt | parsePremiereAt }}上映</div>
      <div class="grey-text">{{ film.nation }} | {{ film.runtime }}</div>
      <div class="grey-text hidde">{{ film.synopsis }}</div>

      <!-- 演职人员 -->
      <div class="actors">
        <div class="actors-title-bar">
          <span class="actors-title-text">演职人员</span>
        </div>
        <Swiper :key="'actors_' + film.actors.length">
          <!-- 循环输出图片信息 -->
          <div
            v-for="(item, index) in film.actors"
            :key="index"
            class="swiper-slide"
          >
            <div>
              <img :src="item.avatarAddress" alt="" />
              <span data-v-624f798e="" class="actors-name">{{
                item.name
              }}</span>
              <span data-v-624f798e="" class="actors-role">{{
                item.role
              }}</span>
            </div>
          </div>
        </Swiper>
      </div>
      <!-- 剧照 -->
      <div class="actors">
        <div class="actors-title-bar">
          <span class="actors-title-text">剧照</span>
        </div>
        <Swiper :key="'actors_' + film.actors.length">
          <!-- 循环输出图片信息 -->
          <div
            v-for="(item, index) in film.photos"
            :key="index"
            class="swiper-slide juzhao"
          >
            <div>
              <img :src="item" alt="" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>

    <a
      href="#/film/5109/cinemas"
      class=""
      style="height: 49px; position: fixed; bottom: 0px; width: 100%"
    >
      <div class="goSchedule">选座购票</div>
      </a>
  </div>
</template>

<script>
import { movieDetailData } from "@/api/api";
//引入moment
import moment from "moment";
import Swiper from "@/components/Swiper";
export default {
  data() {
    return {
      film: { actors: [] },
    };
  },
  async mounted() {
    let ret = await movieDetailData(this.$route.params.filmId);
    this.film = ret.data.data.film;
  },
  filters: {
    parsePremiereAt: function (value) {
      //事件戳的单位是秒,需要乘以1000转化成毫秒
      return moment(value * 1000).format("YY-MM-DD");
    },
  },
  components: {
    Swiper,
  },
  created() {
    //发起通知,通知app.vue组件移除底部菜单
    this.eventBus.$emit("footernav", false);
  },
  beforeDestroy() {
    //发起通知,通知app.vue组件恢复底部菜单
    this.eventBus.$emit("footernav", true);
  },
  methods: {
    goBack: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
    
  .goBack {
    height: 30px;
    position: absolute;
    top: 5px;
    left: 5px;
    img {
      width: 30px;
    }
  }

  .img {
    width: 100%;
    height: 260px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .film-detail {
    padding: 15px;
    padding-top: 12px;
    background-color: #fff;
    
  }
  .col {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .film-name {
      width: 256px;
      .name {
        color: #191a1b;
        font-size: 18px;
        height: 24px;
        line-height: 24px;
        margin-right: 7px;
      }
      .item {
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        display: inline-block;
      }
    }
    .film-grade {
      width: calc(100% - 250px);
      text-align: right;
      color: #ffb232;
      .grade {
        font-size: 18px;
        font-style: italic;
      }
      .grade-text {
        font-size: 10px;
      }
    }
  }

  .grey-text {
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
  }
  .hidde {
    height: 100%;
    overflow: hidden;
  }
  .actors {
    margin-top: 10px;
    background-color: #fff;
    .actors-title-bar {
      width: 100%;
      padding: 15px 15px 15px 0;
      .actors-title-text {
        font-size: 16px;
        text-align: left;
        color: #191a1b;
      }
    }
    .swiper-slide {
      z-index: 1;
      margin-left: -3px;
      text-align: center;
      img {
        width: 80px;
      }
      .actors-name {
        padding-top: 10px;
        font-size: 12px;
        color: #191a1b;
        // width: 85px;
        height: 18px;
        display: block;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .actors-role {
        display: block;
        font-size: 10px;
        color: #797d82;
        // text-align: center;
      }
    }
    .juzhao {
      margin-right: 10px;
      margin-bottom: 50px;
      img {
        width: 90%;
        //  width: 150px;
        height: 120px;
      }
    }
  }

  .goSchedule {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 49px;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
  }
}
</style>