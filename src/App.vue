<template>
  <div id="app">
    <!-- <FooterNav></FooterNav> 简写成如下 -->
    <FooterNav v-if="is_show"></FooterNav>
    <router-view/>
  </div>
</template>

<script>
// 导入需要使用的组件
import FooterNav from '@/components/FooterNav'
export default {
  data() {
    return {
      is_show:true
    }
  },
  components:{
    FooterNav,
  },
  created() {
    this.eventBus.$on('footernav',(mark)=>{
      this.is_show = mark
    })
  },
}
</script>

<style lang="scss" >  //scoped 作用范围 只在当前组件生效 所以不能写
    *{
        margin: 0;
        padding: 0;
    }
    html,
    body{
        height: 100%;
        touch-action: none; //禁止缩放
    }
    ul,li{
        list-style: none;
    }
</style>


