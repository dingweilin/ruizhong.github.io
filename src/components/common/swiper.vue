<template>
	<div class="banner">
	 <div class="swiper">
	   <div class="current-swiper swiper-container" ref="mainSwiper">
		 <div class="swiper-wrapper">
		   <div v-for="(image, index) in images" :key="index" class="swiper-slide">
             <img v-lazy="image" alt="轮播图片" class="slide-image" />
           </div>
		 </div>
		 <div class="swiper-pagination"></div>
	   </div>
	   <!-- <div class="swiper-button-prev"></div>
	   <div class="swiper-button-next"></div> -->
	   
	   <!-- 左侧轮播（前一张）-->
	   <div class="nocurrent-swiper left-swiper" ref="leftSwiper">
		 <div class="swiper-slide">
           <img v-lazy="images[leftSlideIndex - 1]" alt="左侧轮播图片" class="slide-image" />
         </div>
	   </div>
	   
	   <!-- 右侧轮播（后一张）-->
	   <div class="nocurrent-swiper right-swiper" ref="rightSwiper">
		 <div class="swiper-slide">
           <img v-lazy="images[rightSlideIndex - 1]" alt="右侧轮播图片" class="slide-image" />
         </div>
	   </div>
	 </div>
   </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
// Swiper 11 的正确导入方式
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 导入默认图片
import img1 from '../../views/home/images/v2_st0362.jpg';
import img2 from '../../views/home/images/v2_st03oo.jpg';
import img3 from '../../views/home/images/8.jpg';

// 使用defineProps代替props选项
const props = defineProps({
  // 接收图片数组作为props
  images: {
    type: Array,
    default: () => [
      // 默认图片，在没有传递时使用
      img1,
      img2,
      img3
    ]
  }
});

// refs
const mainSwiper = ref(null);
const leftSwiper = ref(null);
const rightSwiper = ref(null);

// 跟踪左右侧轮播图展示的幻灯片索引
const leftSlideIndex = ref(3); // 默认显示最后一张
const rightSlideIndex = ref(2); // 默认显示第二张

let mainSwiperInstance = null;
const isSliding = ref(false);

// 根据当前幻灯片索引计算前后幻灯片索引
const calculateAdjacentSlides = (currentIndex) => {
   console.log('当前幻灯片索引：', currentIndex);
   
  // 总幻灯片数量
  const totalSlides = props.images.length;
	 
  // 计算前一张索引
  const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  // 计算后一张索引
  const nextIndex = (currentIndex + 1) % totalSlides;
	 
  // 因为幻灯片类名是从1开始的，所以加1
  leftSlideIndex.value = prevIndex + 1;
  rightSlideIndex.value = nextIndex + 1;
};

// 清理函数
const cleanup = () => {
  if (mainSwiperInstance && mainSwiperInstance.autoplay) {
    mainSwiperInstance.autoplay.stop();
  }
};

// 滑动状态控制
const setSlidingState = (state) => {
  isSliding.value = state;
  if (mainSwiper.value) {
    if (state) {
      mainSwiper.value.classList.add('is-sliding');
    } else {
      mainSwiper.value.classList.remove('is-sliding');
    }
  }
};

const initSwiper =() =>{
   mainSwiperInstance = new Swiper(mainSwiper.value, {
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
      init: function() {
        // 初始化时设置左右两侧幻灯片
        calculateAdjacentSlides(this.realIndex);
      },
      progress: function(swiper, progress) {
        // 只有在真实滑动时才触发
        if (progress > 0 && progress < 1) {
          setSlidingState(true);
        }
      },
      slideChange: function() {
        // 幻灯片变化时更新左右两侧索引
        calculateAdjacentSlides(this.realIndex);
      },
      slideChangeTransitionStart: function() {
        setSlidingState(true);
      },
      slideChangeTransitionEnd: function() {
        setSlidingState(false);
      },
      touchStart: function() {
        setSlidingState(true);
      },
      touchEnd: function() {
        // 手指释放后短暂延迟再关闭滑动状态，以便过渡更自然
        setTimeout(() => {
          setSlidingState(false);
        }, 300);
      }
    }
  });
}

onMounted(() => {
  // 初始化主轮播图
  initSwiper()
});

// 组件卸载前的清理
onBeforeUnmount(cleanup);
</script>

<style lang="scss" scoped>
.banner {
   width: 100%;
   padding-top: 10px;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   overflow: hidden; /* 防止边缘溢出 */
}

.banner .swiper {
   width: 100%;
   margin: 0 auto;
   position: relative;
   margin: 20px 0;
   overflow: hidden; // 添加溢出隐藏
}

.current-swiper {
   max-width: 1210px; // 使用最大宽度而不是固定宽度
   width: 100%; // 添加100%宽度
   height: 460px;
   border-radius: 5px;
   margin: 0 auto;
   position: relative;
   z-index: 99;
   overflow: hidden;
   transition: all 0.3s ease;
   cursor: grab;
 

}

.current-swiper:active {
   cursor: grabbing; /* 鼠标按下时变为抓取中状态 */
}

// .current-swiper:hover {
// 	// box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
// 	// transform: translateY(-5px);
// }

.left-swiper, .right-swiper {
   position: absolute;
   top: 0;
   z-index: 9999;
   max-width: 1210px; // 使用最大宽度
   width: 100%; // 添加100%宽度
   height: 460px;
   border-radius: 5px;
   overflow: hidden;
   transition: all 0.3s ease;
   pointer-events: none;
}

.left-swiper {
   right: 52%; // 修改为相对于中心点的右侧定位
   transform: translateX(-50%); // 向左移动自身宽度的50%
   transform-origin: right center;
}

.right-swiper {
   left: 52%; // 修改为相对于中心点的左侧定位
   transform: translateX(50%); // 向右移动自身宽度的50%
   transform-origin: left center;
}

.nocurrent-swiper:before {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(255, 255, 255, 0.75); /* 增加透明度使两侧更明显 */
   z-index: 99;
   backdrop-filter: blur(1px);
   transition: opacity 0.3s ease; /* 添加过渡效果 */
}

/* 主轮播滑动时，减小两侧轮播的模糊效果 */
.is-sliding .nocurrent-swiper:before {
   opacity: 0.5;
}

/* 为左右两侧轮播添加指示性箭头 */
// .left-swiper:after, .right-swiper:after {
// 	content: '';
// 	position: absolute;
// 	top: 50%;
// 	width: 30px;
// 	height: 30px;
// 	background-color: rgba(255, 255, 255, 0.8);
// 	border-radius: 50%;
// 	z-index: 100;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	transform: translateY(-50%);
// 	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
// 	opacity: 0.7;
// 	transition: opacity 0.3s ease;
// }

.left-swiper:after {
   right: 10px;
   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z'/%3E%3C/svg%3E");
   background-repeat: no-repeat;
   background-position: center;
}

.right-swiper:after {
   left: 10px;
   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'/%3E%3C/svg%3E");
   background-repeat: no-repeat;
   background-position: center;
}

.is-sliding .left-swiper:after, .is-sliding .right-swiper:after {
   opacity: 1;
}

.swiper-slide {
   background-color: #fff;
   position: relative;
   height: 100%;
   transition: transform 0.5s ease;
   display: flex;
   align-items: center;
   justify-content: center;
}

.slide-image {
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: center;
   transition: transform 0.5s ease;
}

/* 添加悬停效果 */
.current-swiper .swiper-slide:hover .slide-image {
   transform: scale(1.02); /* 减小缩放效果使其更微妙 */
}

/* 导航按钮样式 */
.swiper-button-prev, .swiper-button-next {
   width: 46px;
   height: 46px;
   z-index: 100;
   border-radius: 50%;
   background-color: rgba(255, 255, 255, 0.7);
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
   transition: all 0.3s ease;
}

.swiper-button-prev {
   left: 30px;
}

.swiper-button-next {
   right: 30px;
}

.swiper-button-prev:hover, .swiper-button-next:hover {
   background-color: rgba(255, 255, 255, 0.95);
   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
   transform: scale(1.05);
}

.swiper-button-prev::after, .swiper-button-next::after {
   font-size: 20px;
   color: #333;
   font-weight: bold;
}

// /* 修改媒体查询，确保响应式布局 */
// @media (max-width: 1440px) {
//    .banner {
//        height: auto; // 高度自适应
//    }
   
//    .banner .swiper {
//        width: 100%;
//        height: 100%;
//        margin: 0 auto;
//    }
   
//    .current-swiper,
//    .left-swiper,
//    .right-swiper {
//        max-width: 1000px;
//        width: 100%;
//        height: 460px;
//    }
// }

@media (max-width: 1024px) {
   .current-swiper,
   .left-swiper,
   .right-swiper {
       height: 400px; // 在较小屏幕上减小高度
   }
}

@media (max-width: 768px) {
   .current-swiper,
   .left-swiper,
   .right-swiper {
       height: 350px; // 在移动设备上进一步减小高度
   }
   
   .left-swiper, .right-swiper {
      //  display: none; // 在移动设备上可以选择隐藏左右轮播，只保留中间轮播
   }
}

@media (max-width: 618px) {
   .banner {
       height: auto; // 高度自适应
   }
   
   .banner .swiper {
       width: 100%;
       height: 100%;
       margin: 0 auto;
   }
   
   .current-swiper,
   .left-swiper,
   .right-swiper {
       max-width: 650px;
       width: 100%;
       height: 460px;
   }
}

/* 分页器样式 */
.swiper-pagination {
   position: absolute;
   bottom: 15px;
   left: 0;
   width: 100%;
   text-align: center;
   z-index: 100;
}

.swiper-pagination-bullet {
   width: 8px;
   height: 8px;
   display: inline-block;
   border-radius: 50%;
   background: rgba(255, 255, 255, 0.5);
   margin: 0 4px;
   opacity: 0.8;
   cursor: pointer;
}

/* 分页器样式 */
.swiper-pagination {
   position: absolute;
   bottom: 15px;
   left: 0;
   width: 100%;
   text-align: center;
   z-index: 100;
}

.swiper-pagination-bullet {
   width: 8px;
   height: 8px;
   display: inline-block;
   border-radius: 50%;
   background: rgba(255, 255, 255, 0.5);
   margin: 0 4px;
   opacity: 0.8;
   cursor: pointer;
}

.swiper-pagination-bullet-active {
   opacity: 1;
   background: #fff;
   width: 10px;
   height: 10px;
}
</style>