import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./index.scss"
const BotSwiper = () => {
    const mainSwiper = useRef<HTMLDivElement>(null);
    const botSlidesImgList = [
        { image: 'src/pages/home/images/v2_rfywdq.jpg', caption: '艺术楼1' },
        { image: "src/pages/home/images/v2_rfywdq.jpg", caption: '艺术楼2' },
        { image: 'src/pages/home/images/v2_rfywdq.jpg', caption: '艺术楼3' },
        { image: "src/pages/home/images/v2_rfywdq.jpg", caption: '艺术楼4' },
        { image: 'src/pages/home/images/v2_rfywdq.jpg', caption: '艺术楼5' },
        { image: "src/pages/home/images/v2_rfywdq.jpg", caption: '艺术楼6' },
        { image: 'src/pages/home/images/v2_rfywdq.jpg', caption: '艺术楼7' },
    ];

    useEffect(() => {
        if (!mainSwiper.current) return;
        const swiper = new Swiper(mainSwiper.current, {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 5,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            allowTouchMove: false, // 禁用触摸滑动
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
        })

        // 组件卸载时销毁Swiper实例
        return () => {
            swiper.destroy();
        };
    }, []);
    return (
        <div className="swiper my-[20px] mx-0 h-full w-full">
            <div className="my-swiper-container  overflow-hidden"
                ref={mainSwiper}>
                    <div className='swiper-wrapper'>
                    {
                    botSlidesImgList.map((item, index) => {
                        return (
                            <div key={index} className="swiper-slide slide1 text-center text-[18px] w-[214px] h-[160px] relative">
                                <img src={item.image} className='block w-[214px] h-[160px] object-cover cursor-pointer' />
                                <div style={{ background: 'rgba(0, 0, 0, 0.3)' }} className="swiper-title absolute bottom-0 left-0 
                            w-full h-[40px] leading-[40px] text-[#fff] text-[16px] font-bold pl-[10px]">{item.caption}</div>
                            </div>
                        )
                    })
                }
                    </div>
               

            </div>
            <div className="swiper-pagination"></div>
        </div>
    );
}
export default BotSwiper;