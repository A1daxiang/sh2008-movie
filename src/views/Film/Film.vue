<template>
    <div >
        <FilmListTopNav :class="fixed ? 'fixed' : '' "></FilmListTopNav>
        <router-view></router-view>
    </div>
</template>

<script>
import FilmListTopNav from '@/components/FilmListTopNav'
export default {
    // 注册组件
    components: {
        FilmListTopNav
    },
    data(){
        return {
            fixed:false
        }
    },
    mounted() {
        //事件监听,监听滚动调试件,判断滚动条的位置是否吸顶
        window.addEventListener('scroll',(e) => {
            let top = document.documentElement.scrollTop
            if(top > 66 * 2){
                this.fixed = true
            }else{
                this.fixed = false
            }
        },true);
    },
}
</script>
<style lang="scss" scoped>
    .fixed{
        position: fixed;
        top: 0;
        background: #fff;
    }
</style>