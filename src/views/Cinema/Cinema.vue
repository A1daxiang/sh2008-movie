<template>
    <div class="cinema">
        <Loading v-if="loading"></Loading>
        <div class="header">
            <div class="left">
                <div class="city">
                    <span @click="tiao()">{{city}}</span>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
                        width="6px"
                        height="3px"
                    />
                </div>
            </div>
            <div class="title">
                <div>影院</div>
            </div>
            <div class="right">
                <div>
                    <div class="toCinemaSearch">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAMAAABQrCHsAAABlVBMVEVHcEwaGh8/Pz8ZGxszMzMZGhwZGhsZGhsZGhsZGhscHBwnJycZGhskJCQaGh0fHx8ZGhsaGiMeHh4ZGhsZGhsbGxsZJiYaGhsZGhsZGhwZGhwZGxsZGxsaGhsfHx8ZGhsbGxsqKioaGhsbGxsZGxsbGxsZGhwaGh8ZGhskJCQZGxsZHh4ZGxsZGhsaGh0aGhsZGhsZMzMaGh0ZGhseHh4ZGhsZGhseHh4ZGhsZGhsZHh4aGh0aGhsZGhwbGxsaGh4ZIiIbGxsZGhwbGxsZGxsaGh1/f38aGhsZGxshISEZGxsZGxsZGhsZGhwfHx8aGh4aGhsdHR0ZGxv///8ZGhsqKioaGhwbGxtVVVUaGhwbGxsaGh8ZGhsZGxsaGhwZGxsaGhwaGhwgICAiIiIcHBwZGhsZGxsbGxsZGhsZGxsaGhwbGxsZGhsaGiAZGhwaGhsZGxsaGhwZGxsZGhwaGhsZHBwaGhwZHBwaGhwaGh0aGh0ZGhwbGxsaGh0aGhoZGhwaGiEZGxsZHBwZHR0aGhsaGhsZGhsIL5M3AAAAhnRSTlMAOQTsBeP76P73SA3qB2kY+B0i/fRBFKbfx62elq8QtzgG11V5L70w/BXOO6DeV6T2CnLwKsDWIenVMla5mUo6HhysQs9NAsSXF4uE06IITJwjggHMDFhxA5BAMd3Zj52Iah8PG/JmUuCDfS7LJ7aSqXVl0etQYlp8X2i+JXtz0CZ6Wzy4w4GfxwoAAAJjSURBVBgZrcEFUxQBAIbh77qL7m4ElFCxCQWDUFBQaaXDwu56f7cwzHLHsXe7N+Pz6D9pfPehovJvZcWHd42yx1n4uISkkseFTlmZejRHurlHU8pqaJpDruLN6Nvfb6ObxS4OTQ8pM/dVDoQXnszKMPtkIcyBq25lUNQHFDwI6aTQgwKgr0imejuArphOi3UBHb0yEfNAS7fMdbeAJ6ZTIqXQE1QmwR4ojSjdGHgLlVmhF8aU5hfwSdlEgfc6IVICo8puFEpqlWoGfA+V3UMfzCjFMxdEZSUKrmdKWoN5p6w452FNSXuwLGvLsKdjoTj+57L23E88JEM97MiOHaiX4QVsyY4teCFDGazLjnUok6EUamSHA0pl2IAV2bECGzLEISI7IhCXYR+KZEcR7MvwBrZlxza8keEPBGVHEKplKIfXsuM1lMvwCl7KjpfwSoZdWK2VtdpV2NWxOgjKWhDqlLQExbJWDEtKegr+Zllp9sNTpRiEK7JyBQaV6ocXrim7a+D9ohMqwJWnbPJcUKGTWj3QH1JmoX7wtCrNpbNQfU6ZnKuGs5d0ymWgLSFziTbgskx8BXztMtPuAy7myczHOOSfuaF0N87kgx/CDplx+IDAnftKdf9OAPB9C0CgU2YSlRy6d9dx+5akW7cdd+9xqDKhmjD4G2Tq+ghHvJ7vHi9HRq7rwIXzQLlbpm6WFZCqoOymjlQ1AZ+rZG58YnLYlw/k+4YnJ8Z1zL0I1OUpM+dA44BT6Rr8EHYoV/UBCHQqVzUXwf9TubpwHih3K0dVTUCTWzlyLwLvlbOGlkCzctca0z9q9NKFAyAIHQAAAABJRU5ErkJggg=="
                            width="18px"
                            height="18px"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="cinema-list-tag">
            <div class="cinema-list-tag-name">
                <label class="">
                    全城
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
                        width="6px"
                        height="3px"
                        style="display: none;"/>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
                        width="6px"
                        height="3px"
                /></label>

                <label class="">
                    APP订票
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
                        width="6px"
                        height="3px"
                        style="display: none;"/>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
                        width="6px"
                        height="3px"
                /></label>

                <label class="">
                    最近去过
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
                        width="6px"
                        height="3px"
                        style="display: none;"/>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
                        width="6px"
                        height="3px"
                /></label>
            </div>
        </div>
        <div  class="scroll" :style="{ height: height + 'px' }">
            <div>
        <!-- 列表 -->
        <div class="cinema-banner-wrap">
            <ul class="cinema-list">
                <li class="cinema-banner-item">
                    <div class="name">
                        <span class="title">{{cinemaTop.masterTitle}}</span>
                        <span class="icon" v-if="cinemas.length !== 0">影院券</span>
                    </div>
                    <div class="type">
                        {{cinemaTop.name}}
                    </div>
                </li>
            </ul>
        </div>
        <div
            class="cinema-list-wrap"
            v-for="(item, index) in cinemas"
            :key="index"
        >
            <ul>
                <li @click="tiao1()">
                    <a class="cinema-item-wrap">
                        <div class="cinema-info">
                            <span class="cinema-info-if" >
                                {{ item.name }}
                            </span>
                            <span class="cinema-address">
                                {{ item.address }}
                            </span>
                        </div>
                        <div>
                            <span class="price-fmt">
                                <i>￥</i>
                                <span class="interge" style="font-size: 14px;">
                                    {{ item.lowPrice | price }}
                                </span>
                                <span class="upon">起</span>
                            </span>
                            <span class="cinema-gpsAddress">
                                <span>
                                    <strong>距离未知</strong>
                                </span>
                            </span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
import Loading from '@/components/Loading';

import {mapState} from 'vuex'
import BScroll from "better-scroll";
import { cinemaListData,cinemaTopData } from '@/api/api';

export default {
    data() {
        return {
            loading: true,
            cinemas: [],
            cinemaTop:[],
            bs: null,
            height:0,
        };
    },
    methods: {
        tiao(){
            this.$router.push('/city')
        },
        tiao1(){
            this.$router.push('/cnmdetail')
        }
    },
    components: {
        Loading,
    },
    created() {

        if (this.cinemas.length > 0) {
            this.loading = false;
        } else {
            this.loading = true;
        }
    },
    async mounted() {
        let ret = await cinemaListData();
        this.cinemas = ret.data.data.cinemas;

        let res = await cinemaTopData();
        this.cinemaTop = res.data.data[0];
    },
    filters: {
        price: function(value) {
            let prices = value / 100;
            return prices;
        },
    },
  
    updated() {
    this.height = document.documentElement.clientHeight - 145;

    this.bs = new BScroll(".scroll", {
      pullUpLoad: true,
      //激活下滑的事件监听
      pullDownRefresh: true,
      //默认情况下使用bs后,它会禁止浏览器的点击事件
      click: true,
    });
    this.bs.on("pullingUp", () => {
      //获取数据
    //   this.getData();
      this.bs.finishPullUp();
    });
    this.bs.on("pullingDown", () => {
      //获取数据
    //   this.getData();
      this.bs.finishPullDown();
    });
  },
  computed: {
      ...mapState(['city'])
  },
};
</script>

<style lang="scss" scoped>
.cinema{
    padding-top: 93px;
}
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 50;
    background-color: #fff;
    display: flex;

    .left {
        min-width: 15%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 15px;

        .city {
            display: flex;
            align-items: center;

            span {
                display: inline-block;
                font-size: 13px;
                max-width: 58px;
                height: 16px;
                line-height: 16px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-right: 5px;
                color: #191a1b;
            }
            img {
                vertical-align: middle;
            }
        }
    }

    .title {
        text-align: center;
        font-size: 17px;
        color: #191a1b;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        overflow: hidden;
    }

    .right {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 15px;

        div {
            width: 100%;
            text-align: right;
        }
        img {
            vertical-align: middle;
        }
    }
}

.cinema-list-tag {
    position: fixed;
    height: 50px;
    width: 100%;
    top: 44px;
    right: 0;
    text-align: center;
    background-color: #fff;
    z-index: 2000;

    .cinema-list-tag-name {
        position: relative;

        label {
            float: left;
            width: 33.3%;
            line-height: 49px;
            font-size: 14px;
            color: #191a1b;
            letter-spacing: -0.2px;
        }

        img {
            vertical-align: middle;
            padding-left: 2px;
        }
    }
}

.cinema-banner-wrap {
    // margin-top: 94px;
    border-top: 1px solid #ededed;

    .cinema-list {
        list-style: none;
        padding: 0;
        margin: 0;
        

        li {
            padding: 15px;
            position: relative;
            background-color: #fff;

            .name {
                font-size: 15px;
                color: #18191a;
                position: relative;

                .icon {
                    color: #ffb245;
                    margin-left: 7px;
                    font-size: 10px;
                    padding: 0 6px;
                    text-align: center;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    border: 1px solid #ffb245;
                    border-radius: 4px;
                }
            }
            .type {
                margin-top: 5px;
                font-size: 13px;
                color: #797d82;
            }
        }
    }
}

.cinema-list-wrap {
    z-index: 100;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            position: relative;
            background-color: #fff;
            padding: 15px;
            border-bottom: 1px solid #ededed;

            .cinema-item-wrap {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .cinema-info {
                    width: calc(100% - 65px);
                    text-align: left;
                    padding-right: 15px;
                    float: left;

                    .cinema-info-lf {
                        color: #191a1b;
                        font-size: 15px;
                        float: left;
                        display: block;
                    }
                    .cinema-address {
                        max-width: 80%;
                        color: #797d82;
                        font-size: 12px;
                        margin-top: 5px;
                        display: block;
                        margin-top: 10px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
                .price-fmt {
                    width: 65px;
                    margin-left: -15px;
                    font-size: 13px;
                    color: #ff5f16;
                    height: 0 !important;
                    display: inline-table !important;
                    float: none !important;

                    i {
                        font-size: 11px;
                        font-style: normal;
                    }
                }
                .upon {
                    color: #ff5f16;
                    font-size: 10px;
                }
                .cinema-gpsAddress {
                    display: block;
                    font-size: 11px;
                    color: #797d82;
                    margin-top: 5px;
                    margin-left: -13px;

                    strong {
                        font-weight: 400;
                        display: block;
                        margin-top: 5px;
                    }
                }
            }
        }
    }
}
.scroll{
    overflow: hidden;
}
</style>
