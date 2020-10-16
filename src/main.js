import Vue from 'vue'
import App from "./App.vue"
import router from "./router"

//引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false 

// // axios体验
// import axios from 'axios'
// // 配置域名
// axios.defaults.baseURL = "https://m.maizuo.com/";
// axios.interceptors.request.use(function(config){
//   config.headers = {
//     "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1598087896889693885431809","bc":"110100"}',
//     "X-Host": "mall.film-ticket.film.list",
// }
// // 在发送请求之前做些什么
// return config;
// }, function(error) {
// // 对请求错误做些什么
// return Promise.reject(error);
// });

// axios.get("gateway?cityId=210300&pageNum=1&pageSize=10&type=2&k=8273796")

// 使用懒加载
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
    loading: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602481447727&di=2c09b36305e4f247311cc8e34856cd72&imgtype=0&src=http%3A%2F%2Fcss.chinawj.com.cn%2Fpic%2Fimg.gif",
});

//定义事件总线
Vue.prototype.eventBus = new Vue();

//导入vuex的store对象
import store from '@/store/vuex'

//同步一下localstorage数据到vuex
let _token = localStorage.getItem("_token");
// console.log(_token);
if(_token){
    store.commit('updateToken',_token)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
