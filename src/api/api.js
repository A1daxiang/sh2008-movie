//发送具体的请求
//导入需要使用的模块
import http from '@/api/http'
import { nowPlayingListUri, comingSoonListUri, movieDetailUrl, cinemaListUrl, cinemaTopUrl,cityListUrl,loginUrl,centerUrl } from '@/config/url'

//请求正在热映的列表数据
export const nowPlayingListData = (pageNum) => {
    http.defaults.headers.info = ""
    http.defaults.headers.authorization = ''
    return http.get(nowPlayingListUri + pageNum);
}

//请求即将热映的列表数据
export const comingSoonListData = (pageNum) => {
    http.defaults.headers.authorization = ''
    return http.get(comingSoonListUri + pageNum);
}

//请求电影详情数据
export const movieDetailData = (filmId) => {
    http.defaults.headers.authorization = ''
    //给axios设置请求头
    http.defaults.headers.info = "info"
    return http.get(movieDetailUrl + filmId);
}

//请求影院数据
export const cinemaListData = () => {
    http.defaults.headers.authorization = ''
    http.defaults.headers.info = "cinema";
    return http.get(cinemaListUrl);
};

export const cinemaTopData = () => {
    http.defaults.headers.authorization = ''
    http.defaults.headers.info = "banners";
    return http.get(cinemaTopUrl);
};

//城市列表诗句
export const cityListData = async () => {
    http.defaults.headers.info = "city";
    http.defaults.headers.authorization = ''
    let ret = await http.get(cityListUrl); //等一下 拿到数据再往后走
    //定义基本的数据
    let cities = ret .data.data.cities;
    let codeList = [];// 'A','B','C'... (完整26字母)
    let dataList = [];//城市信息
    let indexList = [];//'A','B','C'... (经过筛选的字母)

    //for循环生成26个字母
    for(let i = 65;i <= 90;i++){
       codeList.push(String.fromCharCode(i));        
    };

    //开始处理
    codeList.forEach((element)=>{
        //与城市的pinyin字段首字母进行对比,如果符合则留下大字母
        let tempArr = cities.filter((item)=>element.toLowerCase() == item.pinyin.substr(0,1));
        if(tempArr.length > 0){
            indexList.push(element)
            dataList.push({
                index:element,
                data:tempArr
            })
        }
    })
    //返回数据
    return Promise.resolve([dataList,indexList]);
        // console.log(indexList);
        // console.log(dataList);
   
}

//登录
export const userLogin = (data) => {
    return http.post(loginUrl,data)
}

// 获取用户个人信息
export const userInfo = (_token) => {
    http.defaults.headers.authorization =_token; 
    //响应拦截器处理响应的数据
    // http.interceptors.response.use(function(response){
    //     response.data.user_info.gender = response.data.user_info.gender
    //     ?'女'
    //     :'男';
    //     return response
    // },function(error){
    //     //错误处理
    // })
    return http.get(centerUrl)
}
