<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!-- 插槽 -->
            <slot></slot>
        </div>
    </div>
</template>


<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
    //JS代码
    mounted() {
        // 关于this.$nextTick()函数,当当前异步操作全部做完之后再去做其里面的东西
        this.$nextTick(()=>{
            new Swiper(".swiper-container", {
                slidesPerView: 4,
            });  
        });
    },
};
</script>

<style lang="scss" >
    .swiper-container{
        z-index: 0;
    }
</style>