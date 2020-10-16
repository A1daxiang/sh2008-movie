//引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'

//在Vue里面使用vuex
Vue.use(Vuex)

//创建Store对象用于存储数据
export default new Vuex.Store({
    state:{
        count:0,
        city:'城市',
        //如果有更多的数据需要存储接着写
        _token:'',
    },
    mutations:{
        add:function(state,step){
            state.count += step;
        },
        setCity(state,cityName){
            state.city = cityName
        },
        updateToken(state,_token){
            state._token = _token;
            localStorage.setItem("_token",_token);
        }
        //...
    },
    actions:{
        addAsync(context,step){
            setTimeout(() => {
                context.commit('add',step)
            },3000)
        }
    },
    getters:{
        getCount(state){
            return '当前总数是' + state.count
        }
    },
})