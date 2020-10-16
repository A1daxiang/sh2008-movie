<template>
    <div>
        {{num}}
        {{city}}
        {{getCount}}
        <br/>
        <button @click="handle4()">点我+13</button>
        <button @click="handle5()">获取总数</button>
    </div>
</template>

<script>
//按需导入mapState
import {mapMutations, mapState} from 'vuex'
//按需导入mapMutations
import {mutations} from 'vuex'
//按需导入mapActons
import {mapActions} from 'vuex'
//按需导入mapGetters
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            num:1
        }
    },
    mounted() {
        //1,state直接获取对应的数据值
        console.log(this.$store.state.count);
        console.log(this.$store.state.city);
    },
    computed: {
        ...mapState(['count','city']),
        ...mapGetters(['getCount'])
    },
    methods: {
        ...mapMutations(['add']),  //可以多个,不能在这传参
        ...mapActions(['addAsync']),

        handle1(){
            this.$store.commit('add',13)  //一个
        },

        handle2(){
            this.add(13)        //在这里传参
        },

        handle3(){
            this.$store.dispatch('addAsync',31)
        },

        handle4(){
            this.addAsync(31)
        },
        handle5(){
            console.log(this.$store.getters.getCount);
        },
    },
}
</script>