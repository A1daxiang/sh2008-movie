<template>
  <div class="list scroll" :style="{ height: height + 'px' }">
    <Loading v-if="loading"></Loading>
    <!-- 展示数据 -->
    <div>
      <div
        class="item"
        v-for="(item, index) in data"
        :key="index"
        @click="goDetail(item.filmId)"
      >
        <div class="left">
          <img :src="item.poster" />
        </div>
        <div class="middle">
          <div>{{ item.name }}<span class="dnf">{{item.filmType.name}}</span></div>
          <div v-if="type == 1">
            <span>观众评分 </span>
            <span class="grade">{{ item.grade }}</span>
          </div>
          <div>主演：{{ item.actors | parseActors }}</div>
          <div>{{ item.nation }} | {{ item.runtime }}分钟</div>
        </div>
        <div class="right">
          <span v-if="type == 1">购票</span>
          <span v-else>预购</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//loading导入
import Loading from "@/components/Loading";
import BScroll from "better-scroll";
//导入请求方法
import {nowPlayingListData,comingSoonListData} from "@/api/api";
export default {
  data() {
    return {
      loading: true,
      height: 0,
      //bs:用于保存better-scroll的实例结果
      bs: null,
      pageNum: 1,
      flag: true, //控制是否可以继续下滑加载更多
      data: [], //拼接数据
    };
  },
  props: ["list", "type"],
  components: {
    Loading,
  },
  //判断数据是否获取到,获取到之后停止loading
  created() {
    //当进入页面后需要将父传子的数据list转交给data
    this.data = this.list;
    //判断数据是否获取到,获取到之后去除loading组件
    if (this.data.length > 0) {
      this.loading = false;
    } else {
      this.loading = true;
    }
  },
  //处理演员的数据,将主演的数据从数组形式转化成字符串形式以输出
  filters: {
    //处理演员的数据,将主演的数据从数组形式转化成字符串形式以便输出
    parseActors: function (value) {
      let actors = "";
      if (value) {
        value.forEach((element) => {
          actors += element.name + " ";
        });
      } else {
        actors = "暂无主演";
      }
      return actors;
    },
  },
  methods: {
    goDetail: function (filmId) {
      this.$router.push({ name: "detail", params: { filmId } });
    },

    //获取数据的方法
    getData: async function () {
      if (this.flag) {
        this.pageNum++;
        //获取数据
        if (this.type == 1) {
          //正在热映
          var ret = await nowPlayingListData(this.pageNum);
        } else {
          //即将上映
          var ret = await comingSoonListData(this.pageNum);
        }
        //如果当前请求到的数据少于10,说明后面没有数据了,此时将标记设置成false
        if (ret.data.data.films.length < 10) {
          this.flag = false;
        }
        //将数据处理好新增到列表中去
        this.data = this.data.concat(ret.data.data.films);
      }
    },
  },
  mounted() {
    //获取可视高度
    this.height = document.documentElement.clientHeight - 100;
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
      this.getData();
      this.bs.finishPullUp();
    });
    this.bs.on("pullingDown", () => {
      //获取数据
      this.getData();
      this.bs.finishPullDown();
    });
  },
  // beforeDestroy() {
  //       // 节约资源
  //       this.bs = null
  // },
};
</script>

<style lang="scss">
.list {
  margin-bottom: 50px;
  .item {
    margin-top: 15px;
    padding-bottom: 15px;
    display: flex;
    color: #797d82;
    font-size: 13px;
    border-bottom: 1px solid #ededed;

    .left {
      width: 77px;
      height: 100px;
      margin-left: 20px;
      img {
        width: 66px;
        height: 100%;
      }
    }

    .middle {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 55%;
      padding: 6px 0;
          .dnf {
                font-size: 9px;
                color: #fff;
                background-color: #d2d6dc;
                height: 14px;
                line-height: 14px;
                padding: 0 2px;
                border-radius: 2px;
                margin-left: 10px;
                display: inline-block;
            }
      div:nth-of-type(1) {
        color: #191a1b;
        font-size: 16px;
      }
      div:nth-of-type(2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      div:nth-of-type(3) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .grade {
        color: #ffb232;
        font-size: 14px;
      }
    }

    .right {
      width: 12%;
      display: flex;
      align-items: center;
      margin-left: 10px;

      span {
        border: 1px solid #ff5f16;
        background: white;
        color: #ff5f16;
        border-radius: 2px;
        height: 25px;
        line-height: 25px;
        font-size: 13px;
        width: 50px;
        text-align: center;
      }
    }
  }
}

.scroll {
  overflow: hidden;
}
</style>