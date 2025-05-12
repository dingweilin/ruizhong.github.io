<template>
    <div class="home-container">
        <div class="module_one clearfix">
            <div class="news-notice">
                <div class="news">
                    <sidebar :showMore="showMore" title="新闻资讯" />
                    <div class="news-swiper-list">
                        <div class="left-swiper">
                            <banner-carousel :slides="slides2" showCaption="true" />
                        </div>
                        <div class="right-news">
                            <div class="news-btn">
                                <div class="news-btn-item" v-for="(item) in buttonList" :key="item.value">{{item.lable}}</div>
                               
                            </div>
                            <div class="news-list">
                                <div class="news-list-item" v-for="item in 7" :key="item">
                                    <div class="news-list-item-title">赵乐际分别会见印度尼西亚总统普拉博沃11111111</div>
                                    <div class="news-list-item-time">10/04</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="notice">
                    <sidebar title="通知公告" />
                    <div class="news-list">
                        <div class="news-list-item" v-for="item in 10" :key="item">
                            <div class="news-list-item-title">赵乐际分别会见印度尼西亚总统普拉博沃11111111</div>
                            <div class="news-list-item-time">10/04</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="image-list">
            <div class="image-list-item" v-for="(item, index) in slides3" :key="index">
                <img v-lazy="item.image" alt="" />
                <div class="image-list-item-caption">
                    <div class="caption">{{ item.caption }}</div>
                    <div class="eng">{{ item.eng }}</div>
                </div>
            </div>
        </div>
        <div class="school-rules-party">
            <div class="rules-list">
                <div class="rules">
                    <div class="title">
                        <span>学校章程</span>
                    </div>
                    <div class="school-rules-party-news-list">
                        <div class="news-list-item" v-for="item in 5" :key="item">
                            <div class="news-list-item-title">工作计划不会写？这个超赞工具送给你送给你送给你送给你送给你</div>
                            <div class="news-list-item-time">10/04</div>
                        </div>
                    </div>
                </div>
                <div class="rules">
                    <div class="title">
                        <span>瑞中党建</span>
                    </div>
                    <div class="school-rules-party-news-list">
                        <div class="news-list-item" v-for="item in 5" :key="item">
                            <div class="news-list-item-title">工作计划不会写？这个超赞工具送给你送给你送给你送给你送给你</div>
                            <div class="news-list-item-time">10/04</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="home-education-list">
            <div class="list">
                <div class="left listCard">
                    <sidebar title="教学教研" />
                    <div class="img-news">
                        <img src="./images/v2_st1xmc.jpg" alt="" />
                        <div class="img-news-right">
                            <div class="top">2022年其他类型类型类型</div>
                            <div class="bot">温州二高作为温州校园微电影文化的起源地，已经走过了10个春10个春1已经走过了10个春10个春</div>
                        </div>
                    </div>
                    <div class="dashed-line"></div>
                    <div class="news-list">
                        <div class="news-list-item" v-for="item in 8" :key="item">
                            <div class="news-list-item-title">探索了5种改善移动用户体验的绝佳做法，绝佳做法</div>
                            <div class="news-list-item-time">10/04</div>
                        </div>
                    </div>
                </div>
                <div class="center listCard">
                    <sidebar title="德育时空" />
                    <div class="img-news">
                        <img src="./images/v2_st1xmc.jpg" alt="" />
                        <div class="img-news-right">
                            <div class="top">2022年其他类型类型类型</div>
                            <div class="bot">温州二高作为温州校园微电影文化的起源地，已经走过了10个春10个春1已经走过了10个春10个春</div>
                        </div>
                    </div>
                    <div class="dashed-line"></div>
                    <div class="news-list">
                        <div class="news-list-item" v-for="item in 8" :key="item">
                            <div class="news-list-item-title">探索了5种改善移动用户体验的绝佳做法，绝佳做法</div>
                            <div class="news-list-item-time">10/04</div>
                        </div>
                    </div>
                </div>
                <div class="right listCard">
                    <div class="top">
                        <sidebar title="快速通道" :showMore="showMore" />
                        <div class="column">
                            <ul>
                                <li v-for="(item, index) in columnList" :key="index">
                                    <img v-lazy="item.image" alt="" />
                                    <a href="javascript:;" class="news-btn-item">{{item.caption}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="bot">
                        <div class="img-list">
                            <div class="img-list-item">
                                <img src="./images/v2_st39fz.png">
                                <div class="img-list-item-title-left">智慧教育平台</div>
                            </div>
                            <div class="img-list-item">
                                <img src="./images/v2_st0362.jpg">
                                <div class="img-list-item-title-right">浙江省瑞安中学招生网</div>
                            </div>
                        </div>
                        <div class="bot-img">
                            <img src="./images/v2_st39ht.jpg">
                            <div class="bot-img-title">
                                <div>百年瑞中</div>
                                <div>专题网站</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="bot-swiper">
            <div class="swiper-container">
                <sidebar title="视觉瑞中" :showMore="showMore" />
                <div class="swiper">
                    <div class="my-swiper-container" ref="mainSwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide slide1" v-for="(item,index) in botSlidesImgList" :key="index">
                                <img v-lazy="item.image" alt="" />
                                <div class="swiper-title">{{item.caption}}</div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts" name="Home">
import { ref, onMounted } from 'vue';
// Swiper 11 的正确导入方式
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const showMore = ref(false);
const slides2 = ref([
    { image: 'src/views/home/images/v2_rfywdq.jpg', caption: '赵乐际分别会见印度尼西亚总统普拉博沃' },
    { image: "src/views/home/images/v2_rfywgj.jpg", caption: '赵乐际分别会见印度尼西亚总统普拉博沃' },
    { image: 'src/views/home/images/v2_st0362.jpg', caption: '赵乐际分别会见印度尼西亚总统普拉博沃' },
]);
const slides3 = ref([
    { image: 'src/views/home/images/8.jpg', caption: '校园文化', eng: "CAMPUS CULTURE" },
    { image: "src/views/home/images/wDxFn_dBEC0.jpg", caption: '杏坛群英', eng: "OUTSTANDING ALUMNI" },
    { image: 'src/views/home/images/v2_st1v58.jpg', caption: '校长信箱', eng: "PRINCIPAL MAILBOX" },
]);

const buttonList = ref([
    { lable: '瑞中新闻', value: 'news' },
    { lable: "媒体聚焦", value: 'media' },
    { lable: '校友讯息', value: 'century' },
]);

const columnList = ref([
    { image: 'src/views/home/images/pt.png', caption: '省师训平台' },
    { image: 'src/views/home/images/pt.png', caption: '温州云阅卷' },
    { image: 'src/views/home/images/pt.png', caption: '智慧教育平台' },
    { image: 'src/views/home/images/pt.png', caption: '正确云备课' },
    { image: 'src/views/home/images/pt.png', caption: '橡皮网题库' },
    { image: 'src/views/home/images/pt.png', caption: '教育智学网' },
    { image: 'src/views/home/images/pt.png', caption: '校本资源库' },
    { image: 'src/views/home/images/pt.png', caption: '瑞中校友会' },
    { image: 'src/views/home/images/pt.png', caption: '优秀传统文化' },
])

const botSlidesImgList = ref([
    { image: 'src/views/home/images/v2_rfywdq.jpg', caption: '艺术楼1' },
    { image: "src/views/home/images/v2_rfywdq.jpg", caption: '艺术楼2' },
    { image: 'src/views/home/images/v2_rfywdq.jpg', caption: '艺术楼3'},
    { image: "src/views/home/images/v2_rfywdq.jpg", caption: '艺术楼4' },
    { image: 'src/views/home/images/v2_rfywdq.jpg', caption: '艺术楼5'},
    { image: "src/views/home/images/v2_rfywdq.jpg", caption: '艺术楼6' },
    { image: 'src/views/home/images/v2_rfywdq.jpg', caption: '艺术楼7'},
]);



let mainSwiper: Swiper | null = null;

const initSwiper = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    mainSwiper = new Swiper('.my-swiper-container', {
        // 配置选项
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        allowTouchMove: false, // 禁用触摸滑动
        // loopFillGroupWithBlank: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },

        breakpoints: {
            // 当窗口宽度 >= 320px
            320: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            451: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            
            // 当窗口宽度 >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            501: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            638: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            // 当窗口宽度 >= 768px
            768: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            785: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            // 当窗口宽度 >= 992px
            992: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            // 当窗口宽度 >= 1200px
            1200: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        },




        autoplay: {
            delay: 5000, // 增加轮播间隔
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};
onMounted(() => {
   
    initSwiper();


});
</script>

<style lang="scss" scoped>
.news-list {
    font-size: 14px;
    line-height: 30px;
    margin-top: 10px;
    color: #101010;
    text-align: center;
    cursor: pointer;

    .news-list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:hover {
            color: #254E7A;
        }

        .news-list-item-title {
            float: left;
            width: 275px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            // @media (max-width: 626px) {
            //     width: 70%;
            //     min-width: 200px;
            // }
        }

        .news-list-item-time {
            float: right;
            color: #999999;
            flex-shrink: 0;
        }
    }
}

.home-container {
    // @media screen and (max-width: 590px) {
    //     width: 100%;
    //     margin: 0 auto;
    //     overflow: hidden;
    // }

    .module_one {
        width: 100%;
        height: auto;
        margin-bottom: 20px;

        // @media screen and (max-width: 500px) {
        //     width: 100%;
        //     display: flex;
        //     flex-direction: column;
        //     // align-items: center;
        // }

        .news-notice {
            width: 1210px;
            margin: 0 auto;

            // 默认布局
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            @media screen and (max-width: 626px) {
                display: flex;
                flex-direction: row !important;
                flex-wrap: wrap !important;
                width: auto !important;
            }

            // @media screen and (max-width: 500px) {
            //     width: 500px;
            //     display: flex;
            //     flex-direction: column;
            //     // align-items: center;
            // }

            .news {
                padding-right: 20px;
                float: left;
                width: 790px;
                border: 1px solid #d1c9c9;
                padding: 20px;

                @media (max-width: 626px) {
                    width: 98%;
                    // margin: 0 20px;
                    margin: auto;
                    margin-bottom: 20px;
                }



                .news-swiper-list {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;

                    @media (max-width: 992px) {
                        // flex-direction: column;
                        // align-items: center;
                    }

                    .left-swiper {
                        float: left;
                        max-width: 380px;
                        height: 288px;
                        margin-right: 20px;

                        @media (max-width: 992px) {
                            // width: 340px;
                            // max-width: 500px;
                            margin-right: 20px;
                            margin-bottom: 20px;
                            float: none;
                        }
                    }

                    .right-news {
                        float: right;
                        width: 360px;

                        @media (max-width: 626px) {
                            width: 65%;
                            // margin: 0 20px;
                            // margin-bottom: 20px;
                        }

                        // @media (max-width: 992px) {
                        //     width: 100%;
                        //     max-width: 500px;
                        //     float: none;
                        // }

                        .news-btn {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            // justify-content: space-around;
                            border: 1px solid #254E7A;
                            border-radius: 5px;
                            font-size: 16px;
                            color: #254E7A;
                            font-family: SourceHanSerif;
                            font-weight: 400;
                            line-height: 20px;
                            font-style: normal;
                            letter-spacing: 0px;

                            @media (max-width: 768px) {
                                flex-wrap: wrap;
                            }

                            .news-btn-item {
                                width: 150px;
                                padding: 10px 22px;
                                cursor: pointer;
                                text-align: center;
                                // white-space: nowrap;
                                // overflow: hidden;
                                // text-overflow: ellipsis;

                                @media (max-width: 768px) {
                                    width: 33.33%;
                                }
                                @media (max-width: 626px) {
                                    font-size: 14px;
                                    padding: 10px 5px !important;
                                }
                                & {
                                    padding: 10px 22px;
                                    cursor: pointer;
                                }

                                &:not(:last-child) {
                                    border-right: 1px solid #254E7A;
                                }

                                &:hover {
                                    background-color: #254E7A;
                                    color: rgb(255, 255, 255);

                                }
                            }
                        }


                    }
                }
            }

            .notice {
                padding: 20px;
                float: right;
                width: 390px;
                border: 1px solid #d1c9c9;

                @media (max-width: 626px) {
                    // width: 100%;
                    // margin: 0 20px;
                    width: 98%;
                    // margin: 0 20px;
                    margin: auto;
                }

                // @media screen and (max-width: 992px) {
                //     width: 100%;
                //     float: none;
                // }
            }

            .news-list {
                font-size: 14px;
                line-height: 30px;
                margin-top: 10px;
                color: #101010;
                cursor: pointer;

                .news-list-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    &:hover {
                        color: #254E7A;
                    }

                    .news-list-item-title {
                        float: left;
                        width: 270px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;

                        // @media (max-width: 626px) {
                        //     width: 70%;
                        //     min-width: 200px;
                        // }
                    }

                    .news-list-item-time {
                        float: right;
                        color: #999999;
                        flex-shrink: 0;
                    }
                }
            }
        }
    }


    .image-list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 1210px;
        margin: 0 auto;
        height: auto;

        @media (max-width: 626px) {
            display: flex;
            // width: 100%;
            width: 98%;
            // margin: 0 20px;
            margin: auto;
        }

        .image-list-item {
            // display: flex;
            width: 380px;
            height: 91px;
            position: relative;
           
           

            &::after {
                content: '';
                display: block;
                background-color: rgba(245, 245, 245, .2);
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;

            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 5px;

            }

            .image-list-item-caption {
                color: #fff;
                position: absolute;
                top: 50%;
                transform: translate(50px, -50%);

                @media (max-width: 626px) {
                    transform: translate(14%, -50%);
                }

                .caption {
                    color: rgba(255, 255, 255, 1);
                    font-size: 24px;
                    font-family: SourceHanSansSC;
                    font-weight: 700;
                    line-height: 35px;
                    letter-spacing: 8.0px;
                }

                .eng {
                    color: rgba(255, 255, 255, 1);
                    font-size: 18px;
                    font-family: Roboto;
                    font-weight: 400;
                    line-height: 25px;
                    letter-spacing: 2.0px;
                }
            }
        }

        .image-list-item:nth-child(2){
                @media (max-width: 626px) {
                margin: 0 8px;
            }
            }
    }

    .school-rules-party {
        width: 100%;
        margin: 0 auto;
        height: auto;


        .rules-list {
            width: 1210px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            margin-top: 20px;

            @media (max-width: 626px) {
                width: 98%;
                display: flex;
                flex-direction: column;
                // margin: 0 auto;
            }
        }


        .rules {
            width: 590px;
            height: 178px;
            border-radius: 5px;
            background-color: #CBE3EF;
            display: flex;

            @media (max-width: 626px) {
                width: 100%;
                margin: auto;
                margin-bottom: 10px;
            }

            .title {
                width: 64px;
                height: 177px;
                font-family: SourceHanSansSC;
                font-size: 24px;
                font-weight: 700;
                font-style: normal;
                justify-content: center;
                align-items: flex-end;
                text-align: right;
                box-shadow: none;
                writing-mode: horizontal-tb;
                background: rgb(37, 78, 122);
                letter-spacing: 20px;
                line-height: 35px;
                padding: 0px;
                text-decoration: none;
                display: flex;
                flex-direction: column;
                text-shadow: none;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                position: relative;

                span {
                    color: rgba(255, 255, 255, 1);
                    font-size: 24px;
                    font-family: SourceHanSansSC;
                    font-weight: 700;
                    line-height: 35px;
                    letter-spacing: 18px;
                    position: relative;
                }

                &::after {
                    content: '';
                    display: block;
                    width: 0;
                    height: 0;
                    border-top: 15px solid transparent;
                    border-left: 15px solid rgb(37, 78, 122);
                    border-right: 0;
                    border-bottom: 15px solid transparent;
                    position: absolute;
                    top: 50%;
                    right: -15px;
                    transform: translateY(-50%);
                    z-index: 10;
                }


            }

            .school-rules-party-news-list {
                width: 100%;
                padding: 20px;
                font-size: 14px;
                line-height: 30px;
                color: #101010;
                cursor: pointer;

                .news-list-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    &:hover {
                        color: #254E7A;
                    }

                    .news-list-item-title {
                        float: left;
                        width: 270px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;

                        @media (max-width: 626px) {
                            width: 70%;
                            min-width: 200px;
                        }
                    }

                    .news-list-item-time {
                        float: right;
                        color: #999999;
                        flex-shrink: 0;
                    }
                }
            }
        }

        .party {
            width: 590px;
            height: 178px
        }
    }

    .home-education-list {

        .list {
            width: 1210px;
            margin: 0 auto;
            height: auto;
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;

            @media screen and (max-width: 618px) {
                justify-content: space-around;
                // width: 100%;
                // margin: 0 10px 10px;
                width: 98%;
                // margin: 0 20px;
                margin: auto;
            }

            // @media screen and (max-width: 839px){
            //     justify-content: center;
            // }
        }

        .listCard {
            width: calc(33% - 11px);

        }

        .left,
        .center {
            border: 1px solid #d1c9c9;
            border-radius: 3px;
        }

        .center {
            @media screen and (max-width: 618px) {
                margin-right: 0 !important;

            }
        }

        .left,
        .center {
            // width: 380px;
            // width: 33%;

            padding: 15px;

            @media screen and (max-width: 618px) {
                width: calc(50% - 25px);
                margin-bottom: 20px;

            }
        }

        .img-news {
            margin: 20px 0;
            display: flex;
            gap: 10px;

            >img {
                width: 169px;
                height: 100px;
            }

            .img-news-right {
                width: 158px;

                // height: 100px;
                .top {
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 23px;
                    color: #A88365;
                    font-family: "思源宋体";
                    width: 158px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .bot {
                    margin-top: 10px;
                    font-size: 14px;
                    color: #333333;
                    line-height: 20px;
                    align-content: center;
                    width: 169px;
                    height: 60px;
                    // 字间距
                    letter-spacing: 2px;
                    text-align: left;
                    // height: 65px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                }
            }
        }

        .dashed-line {
            border-bottom: 1px dashed #d1c9c9;
            margin-bottom: 20px;
        }

        .center {
            margin-left: 22px;
            /* 左侧间距 */
            margin-right: 22px;
            /* 右侧间距 */
        }

        .right {

            // width: 390px;
            // width: 33%;
            @media screen and (max-width: 618px) {
                display: flex;
                width: 98%;
                height: auto;
                justify-content: space-between;

            }

            .top {
                border: 1px solid #d1c9c9;
                border-radius: 3px;
                padding: 15px;
                height: 215px;

                @media screen and (max-width: 618px) {
                    width: calc(54% - 4px);
                }

                .column {
                    width: 100%;
                    // padding: 0 10px;
                    margin: 20px 0;

                    >ul {
                        display: flex;
                        flex-wrap: wrap;
                        margin: 0;
                        padding: 0;
                        list-style: none;
                        background: #CBE3EF;
                        color: #333333;
                        font-size: 12px;

                        li {
                            display: flex;
                            align-items: center;
                            width: calc(33.33% - 20px);
                            margin: 10px;
                            box-sizing: border-box;

                            >img {
                                width: 18px;
                                height: 18px;
                                margin-right: 5px;
                            }

                            >a {
                                color: #333333;
                                width: 100%;
                                display: flex;
                            }
                        }
                    }
                }
            }

            .bot {
                margin: 20px 0;
                height: 100px;

                @media screen and (max-width: 618px) {
                    width: calc(46% - 10px);
                    height: auto;
                    margin: 0 !important;
                }

                .img-list {
                    display: flex;
                    gap: 10px;

                    .img-list-item {
                        width: 50%;
                        height: 100px;
                        position: relative;

                        >img {
                            width: 100%;
                            height: 100%;
                            border-radius: 5px;
                        }

                        &::after {
                            content: "";
                            display: block;
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, 0.1);
                            position: absolute;
                            top: 0;
                            left: 0;
                            border-radius: 5px;
                        }

                        .img-list-item-title-left {
                            position: absolute;
                            width: 156px;
                            top: 70%;
                            left: 50%;
                            /* bottom: 50%; */
                            /* right: 50%; */
                            transform: translate(-50%, -50%);
                            color: #fff;
                            font-size: 24px;
                            font-weight: bold;
                            line-height: 20px;
                            letter-spacing: 2px;
                        }

                        .img-list-item-title-right {
                            position: absolute;
                            width: 170px;
                            top: 70%;
                            left: 50%;
                            transform: translate(-44%, -50%);
                            color: #fff;
                            font-size: 14px;
                            font-weight: bold;
                            line-height: 23px;
                            letter-spacing: 1px;
                        }

                    }
                }

                .bot-img {
                    margin: 20px 0;
                    width: 100%;
                    height: 120px;
                    position: relative;

                    >img {
                        width: 100%;
                        height: 100%;
                        border-radius: 5px;
                    }

                    &::after {
                        content: "";
                        display: block;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.2);
                        position: absolute;
                        top: 0;
                        left: 0;
                        border-radius: 5px;
                    }

                    .bot-img-title {
                        width: 316px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        display: flex;
                        gap: 10px;
                        color: rgba(255, 255, 255, 1);
                        font-size: 36px;
                        font-family: "FZHanZhenGuangBiao";
                        line-height: 50px;
                        letter-spacing: 2px;
                        z-index: 999;

                    }
                }
            }

        }

        .left,
        .center {
            .news-list {
                .news-list-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .news-list-item-title {
                        // @media (max-width: 626px) {
                        //     width: 70%;
                        //     min-width: 180px;
                        //     white-space: nowrap;
                        //     overflow: hidden;
                        //     text-overflow: ellipsis;
                        // }
                    }

                    .news-list-item-time {
                        flex-shrink: 0;
                    }
                }
            }
        }
    }

    .bot-swiper {
        @media screen and (max-width: 618px) {
            width: 100%;
            margin: auto;
            // margin-left: 10px;

        }
        .swiper {
            margin: 20px 0;
            width: 100%;
            height: 100%;
        }
        // width: 1210px;
        // margin: 0 auto;
        .swiper-container {
            width: 1210px;
            margin: 0 auto;
            height: auto;
            margin-top: 20px;
            height: 254px;
            border: 1px solid #d1c9c9;
            padding: 20px;

            @media screen and (max-width: 618px) {
                width: 98%;
                // margin: 0 10px;
                margin: auto;
                // margin-left: 5px;

            }
        }


       

        .swiper-slide {
            text-align: center;
            font-size: 18px;
            // background: red;
            // margin: 0 10px;
            width: 214px;
            height: 160px;
            position: relative;


        }

        .swiper-title {
            background: rgba(0, 0, 0, 0.3);
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 40px;
            line-height: 40px;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            padding-left: 10px;

            @media (max-width: 626px) {
                width: 80%;
            }
            @media (max-width: 626px) {
                width: 82%;
            }
            
        }

        .swiper-slide img {
            display: block;
            width: 214px;
            height: 160px;
        }

        .swiper-slide img {
            display: block;
            width: 214px;
            height: 160px;
            object-fit: cover;
            cursor: pointer;

            &:hover {
                border: 5px solid #dd1414;
            }
        }
    }
}
</style>
<style lang="scss">
.my-swiper-container {
    overflow: hidden;

    .swiper-wrapper {
        transition-timing-function: ease-out;
    }

    .swiper-slide {
        // transition: 0.6s all;
        // opacity: 0.5;
        transform: scale(0.9);

        // 
        // 激活态样式
        &-active {
            opacity: 1;
            //   transform: translate3d(-479.2px, 0px, 0px);
            //   transform: scale(1);
            z-index: 2;
        }

        // 相邻幻灯片样式
        // &-next + .swiper-slide,
        // &-prev {
        //   opacity: 0.8;
        //   transform: scale(0.95);
        // }
    }
}
</style>