//封装axios,添加请求拦截器(2个奇怪的请求头)
import axios from 'axios'

// 设置基础域名
axios.defaults.baseURL = "https://m.maizuo.com/";

// 请求拦截器,添加2个请求头
axios.interceptors.request.use(
    function (config) {
    let host = "mall.film-ticket.film.list"
    let info = config.headers.info
    // if(info == "film"){
    //     host = "mall.film-ticket.film.list"
    // }
    if (info == "cinema") {
        host = "mall.film-ticket.cinema.list"
    }
    if (info == "info") {
        host = "mall.film-ticket.film.info"
    }
    if (info == "banners") {
        host = "mall.cfg.cinema.banners"
    }
    if (info == "city") {
        host = "mall.film-ticket.city.list"
    }

    //......后续如果有其他的请求需求,就接着写
    if(config.headers.authorization){
        config.headers = {
            authorization:config.headers.authorization
        }
    }else{
        config.headers = {
            "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1602226683364926191271938","bc":"210300"}',
            "X-Host": host
        }
    }
    
    return config
}, function (err) {
    //错误处理
})

//导出封装好的axios供后续使用
export default axios