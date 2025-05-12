import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.scss'
import img1 from './images/v2_st0362.jpg'; // 替换为实际路径
import img2 from './images/v2_st03oo.jpg'; // 替换为实际路径
import img3 from './images/8.jpg'; // 替换为实际路径
// import { CSSSelector } from 'swiper/types';
interface SwiperProps {
    images?: string[];
}
const SwiperComponent = ({ images = [img1, img2, img3] }: SwiperProps) => {
    // 修改这里，只使用HTMLDivElement类型
    const mainSwiperRef = useRef<HTMLDivElement>(null);
    const leftSwiperRef = useRef<HTMLDivElement>(null);
    const rightSwiperRef = useRef<HTMLDivElement>(null);
    // 存储swiper实例
    const mainSwiperInstanceRef = useRef<Swiper | null>(null);
    // 状态
    const [leftSlideIndex, setLeftSlideIndex] = useState(3); // 默认显示最后一张
    const [rightSlideIndex, setRightSlideIndex] = useState(2); // 默认显示第二张
    const [isSliding, setIsSliding] = useState(false);
    // 计算相邻幻灯片索引
    const calculateAdjacentSlides = (currentIndex: number) => {
  
        const totalSlides = images.length;

        // 计算前一张索引
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        // 计算后一张索引
        const nextIndex = (currentIndex + 1) % totalSlides;

        // 因为幻灯片类名是从1开始的，所以加1
        setLeftSlideIndex(prevIndex + 1);
        setRightSlideIndex(nextIndex + 1);
    };
    // 滑动状态控制
    const setSlidingState = (state: boolean) => {
        setIsSliding(state);
        if (mainSwiperRef.current) {
            if (state) {
                mainSwiperRef.current.classList.add('is-sliding');
            } else {
                mainSwiperRef.current.classList.remove('is-sliding');
            }
        }
    };
    const initSwiper = () => {
        if (mainSwiperRef.current ) {
            mainSwiperInstanceRef.current = new Swiper(mainSwiperRef.current, {
                modules: [Navigation, Pagination, Autoplay],
                loop: true,
                speed: 800,
                simulateTouch: true,
                touchRatio: 1,
                touchAngle: 45,
                grabCursor: true,
                autoplay: {
                    delay: 5000, // 增加轮播间隔
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                  },
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
                on: {
                    init: function (swiper) {
                        // 初始化时设置左右两侧幻灯片
                        calculateAdjacentSlides(swiper.realIndex);
                    },
                    progress: function (swiper, progress) {
                        // 只有在真实滑动时才触发
                        if (progress > 0 && progress < 1) {
                            setSlidingState(true);
                        }
                    },
                    slideChange: function (swiper) {
                        // 幻灯片变化时更新左右两侧索引
    
                        calculateAdjacentSlides(swiper.realIndex);
     
                    },
                    slideChangeTransitionStart: function () {
                        setSlidingState(true);
                    },
                    slideChangeTransitionEnd: function () {
                        setSlidingState(false);
                    },
                    touchStart: function () {
                        setSlidingState(true);
                    },
                    touchEnd: function () {
                        // 手指释放后短暂延迟再关闭滑动状态，以便过渡更自然
                        setTimeout(() => {
                            setSlidingState(false);
                        }, 300);
                    }
                }
            })
        }
    
    }
    useEffect(() => {
        initSwiper();
    },[])
    return (
        <div className='banner w-full pt-[15px] h-full relative flex justify-center items-center overflow-hidden '>
            <div className='swiper w-full mx-auto relative overflow-hidden my-[20px] '>
                <div ref={mainSwiperRef} className=' current-swiper swiper-container max-w-[1210px] w-full 
                h-[460px] mx-auto rounded-[5px] relative z-[99] overflow-hidden
                 transition-all duration-300
                  ease-in-out cursor-grab 
                active:cursor-grabbing'>
                    <div className='swiper-wrapper'>
                        {images.map((image, index) => (
                            <div key={index} className="swiper-slide">
                                <img src={image} alt="轮播图片" className="w-full h-full object-cover object-center 
                                 transition-all duration-300 ease-in-out" />
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                {/* 左侧轮播（前一张） */}
                <div ref={leftSwiperRef} className='left-swiper nocurrent-swiper 
                absolute top-0 right-[52%] z-[9999] max-w-[1210px] w-full h-[460px] overflow-hidden rounded-[5px] 
                 translate-x-[-50%] origin-right-center
                 transition-all duration-300
                  ease-in-out pointer-events-none ' >
                    <div className=' bg-[#fff] relative h-full transition-all duration-300
                  ease-in-out flex justify-center items-center'>
                        <img
                            src={images[(leftSlideIndex - 1) % images.length]}
                            alt="左侧轮播图片"
                            className=" w-full h-full object-cover object-center  transition-all duration-300 ease-in-out"
                        />
                    </div>
                </div>
                {/* 右侧轮播（后一张） */}
                <div ref={rightSwiperRef} className='right-swiper nocurrent-swiper absolute left-[52%] translate-x-[50%] 
                origin-left-center top-0 z-[9999] max-w-[1210px] w-full h-[460px] 
                overflow-hidden rounded-[5px] transition-all duration-300 ease-in-out
                 pointer-events-none ' >
                    <div className='bg-[#fff] relative h-full transition-all duration-300
                  ease-in-out flex justify-center items-center'>
                        <img
                            src={images[(rightSlideIndex - 1) % images.length]}
                            alt="右侧轮播图片"
                            className="w-full h-full object-cover object-center  transition-all duration-300 ease-in-out"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SwiperComponent;