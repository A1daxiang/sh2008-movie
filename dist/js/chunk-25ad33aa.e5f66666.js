(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25ad33aa"],{"0237":function(t,e,n){},"3a5e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"out-box"}),n("div",{staticClass:"inner-box"}),n("div",{staticClass:"text-box"},[t._v("loading")])])}],s=(n("d468"),n("2877")),r={},c=Object(s["a"])(r,a,i,!1,null,"1aab4081",null);e["a"]=c.exports},"4e77":function(t,e,n){},"74b2":function(t,e,n){"use strict";var a=n("4e77"),i=n.n(a);i.a},b661:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list scroll",style:{height:t.height+"px"}},[t.loading?n("Loading"):t._e(),n("div",t._l(t.data,(function(e,a){return n("div",{key:a,staticClass:"item",on:{click:function(n){return t.goDetail(e.filmId)}}},[n("div",{staticClass:"left"},[n("img",{attrs:{src:e.poster}})]),n("div",{staticClass:"middle"},[n("div",[t._v(t._s(e.name)),n("span",{staticClass:"dnf"},[t._v(t._s(e.filmType.name))])]),1==t.type?n("div",[n("span",[t._v("观众评分 ")]),n("span",{staticClass:"grade"},[t._v(t._s(e.grade))])]):t._e(),n("div",[t._v("主演："+t._s(t._f("parseActors")(e.actors)))]),n("div",[t._v(t._s(e.nation)+" | "+t._s(e.runtime)+"分钟")])]),n("div",{staticClass:"right"},[1==t.type?n("span",[t._v("购票")]):n("span",[t._v("预购")])])])})),0)],1)},i=[],s=(n("99af"),n("4160"),n("b0c0"),n("159b"),n("96cf"),n("1da1")),r=n("3a5e"),c=n("f40f"),l=n("4ec3"),u={data:function(){return{loading:!0,height:0,bs:null,pageNum:1,flag:!0,data:[]}},props:["list","type"],components:{Loading:r["a"]},created:function(){this.data=this.list,this.data.length>0?this.loading=!1:this.loading=!0},filters:{parseActors:function(t){var e="";return t?t.forEach((function(t){e+=t.name+" "})):e="暂无主演",e}},methods:{goDetail:function(t){this.$router.push({name:"detail",params:{filmId:t}})},getData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.flag){t.next=13;break}if(this.pageNum++,1!=this.type){t.next=8;break}return t.next=5,Object(l["f"])(this.pageNum);case 5:e=t.sent,t.next=11;break;case 8:return t.next=10,Object(l["d"])(this.pageNum);case 10:e=t.sent;case 11:e.data.data.films.length<10&&(this.flag=!1),this.data=this.data.concat(e.data.data.films);case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.height=document.documentElement.clientHeight-100},updated:function(){var t=this;this.bs=new c["a"](".scroll",{pullUpLoad:!0,pullDownRefresh:!0,click:!0}),this.bs.on("pullingUp",(function(){t.getData(),t.bs.finishPullUp()})),this.bs.on("pullingDown",(function(){t.getData(),t.bs.finishPullDown()}))}},o=u,d=(n("74b2"),n("2877")),f=Object(d["a"])(o,a,i,!1,null,null,null);e["a"]=f.exports},d468:function(t,e,n){"use strict";var a=n("0237"),i=n.n(a);i.a},ec8c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("FilmList",{key:"film"+t.list.length,attrs:{list:t.list,type:t.type}})],1)},i=[],s=(n("96cf"),n("1da1")),r=n("4ec3"),c=n("b661"),l={data:function(){return{pageNum:1,list:[],type:2}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["d"])(t.pageNum);case 2:n=e.sent,t.list=n.data.data.films;case 4:case"end":return e.stop()}}),e)})))()},components:{FilmList:c["a"]}},u=l,o=n("2877"),d=Object(o["a"])(u,a,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-25ad33aa.e5f66666.js.map