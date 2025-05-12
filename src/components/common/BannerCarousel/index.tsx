import React, { useEffect, useRef } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.scss'

interface SwiperItem {
    image: string;
    caption: string;
}

interface BannerCarouselProps {
    images: SwiperItem[];
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ images }) => {
    const swiperContainerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        // 确保DOM已经渲染
        if (!swiperContainerRef.current) return;
        
        // 初始化Swiper
        const swiper = new Swiper(swiperContainerRef.current, {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        
        // 组件卸载时销毁Swiper实例
        return () => {
            swiper.destroy();
        };
    }, []);
    
    return (
        <div className="bannerCarousel swiper-container relative w-full h-full overflow-hidden" ref={swiperContainerRef}>
            <div className="swiper-wrapper h-full">
                {
                    images.map((item, index) => {
                        return (
                            <div className="swiper-slide h-full flex justify-center items-center relative" key={index}>
                                <img className="w-full h-full object-cover object-center 
                                 transition-all duration-300 ease-in-out" src={item.image} />
                                <div className="flex items-center justify-between absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.5)] px-[16px] py-[8px]">
                                    <div className='caption text-[#fff] text-[12px]'>{item.caption}</div>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
            <div className="swiper-pagination  "></div>

        </div>
    )
}

export default BannerCarousel;