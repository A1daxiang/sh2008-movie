import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//引入路由模块化的文件
import centerRouter from './routes/center'
import cinemaRouter from './routes/cinema'
import filmRouter from './routes/film'
import detailRouter from './routes/detail'
import cityRouter from './routes/city'
import vuexRouter from './routes/vuex'
import authRouter from './routes/auth'
import cnmdetailRouter from './routes/cnmdetail'

const routes = [
  {
    path: "/",
    // 访问根路由跳转到电影页面
    redirect:'/film',
  },
  centerRouter,
  cinemaRouter,
  filmRouter,
  detailRouter,
  cityRouter,
  vuexRouter,
  ...authRouter,
  cnmdetailRouter,
]

const router = new VueRouter({
  mode: 'history',
  // 前缀  http://localhost:3000/app/film
  // base: process.env.BASE_URL,
  routes
})

//路由守卫
router.beforeEach((to,from,next) => {
    let arr = [
      //存需要登录的页面地址
      "/cinema",
      // "/film",
      ];
      if(arr.includes(to.path)){
        //返回值在(需要登录判断)
        if(localStorage.getItem("_token")){
          next()
        }else{
          next({path:'/login', query:{'refer': to.fullPath}}) 
        }
      }else{
        //不再(不登录判断)
        next()
      }  
})

export default router
