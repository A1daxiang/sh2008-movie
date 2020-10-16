<template>
    <van-index-bar :index-list="indexList" highlight-color="#ff0000">
  <div  class="scroll" :style="{ height: height + 'px' }">
        <!--template 伪标签 不能加 :key="index" -->
      <div>
        <template v-for="item in dataList"> 
        <van-index-anchor
          :index="item.index"
          :key="item.index"
          style="background: #eee"
        ></van-index-anchor>
        <van-cell
          @click="chooseCity(sub.name)"
          v-for="(sub, key) in item.data"
          :title="sub.name"
          :key="key"
        />
      </template>
      </div>
  </div>
    </van-index-bar>
</template>

<script>
import BScroll from "better-scroll";
import { cityListData } from "@/api/api";
import Vue from "vue";
import 'vant/lib/index.css';
import { IndexBar, IndexAnchor, Cell } from "vant";
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
  data() {
    return {
      dataList: [],
      indexList: [],
      bs: null,
      height:0,
    };
  },
  async mounted() {
    // 获取城市的列表数据
    let ret = await cityListData();
    this.dataList = ret[0];
    this.indexList = ret[1];
  },
  created() {
    //进入的时候去掉底部导航
    this.eventBus.$emit("footernav", false);
  },
  beforeDestroy() {
    //出来的时候显示底部导航
    this.eventBus.$emit("footernav", true);
  },
  methods: {
    // 获取选择的城市名称
    chooseCity: function (cityName) {
      console.log(cityName);
      //将数据写到vuex中
      this.$store.commit('setCity',cityName)
      this.$router.go(-1)
    },
  },
  updated() {
    this.bs = new BScroll(".scroll", {
      pullUpLoad: true,
      //激活下滑的事件监听
      pullDownRefresh: true,
      //默认情况下使用bs后,它会禁止浏览器的点击事件
      click: true,
    });
    this.bs.on("pullingUp", () => {
      //获取数据
    //   this.getData();
      this.bs.finishPullUp();
    });
    this.bs.on("pullingDown", () => {
      //获取数据
    //   this.getData();
      this.bs.finishPullDown();
    });
  },
  
};
</script>

<style lang="scss" scoped>
    // .scroll{
    //   overflow: hidden;
    // }
</style>