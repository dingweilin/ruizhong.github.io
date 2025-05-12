<template>
    <div class="carousel">
        <!-- 轮播内容 -->
        <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div class="slide" v-for="(item, index) in slides" :key="index">
                <img v-lazy="item.image" :alt="`轮播图 ${index + 1}`" />
            </div>
        </div>
        <!-- 圆点导航 -->
        <div class="bottom-bar" :class="{ 'no-bg': !showCaption }">
            <p v-if="showCaption" class="caption">{{ slides[currentSlide].caption }}</p>
            <div class="dots" :class="{ 'center-dots': !showCaption }">
                <span v-for="(item, index) in slides" :key="index" class="dot"
                    :class="{ active: currentSlide === index }" @click="goToSlide(index)"></span>
            </div>
        </div>
    </div>
  </template>
  <script setup>
  import { ref, onMounted, onBeforeUnmount, nextTick ,defineProps} from 'vue';
  const props = defineProps({
    slides: {
        type: Array,
        default: []
    },
    showDots: {
        type: Boolean,
        default: false
    },
    showCaption: {
        type: Boolean,
        default: false
    }
  })
 
  
  const currentSlide = ref(0);
  let intervalId = null; // 定时器ID
  const transitionStyle = ref("transform 0.7s ease-in-out");
  
  // 下一张轮播图
  const nextSlide = () => {
    if (currentSlide.value === props.slides.length - 1) {
        currentSlide.value = 0;
    } else {
        currentSlide.value = (currentSlide.value + 1) % props.slides.length;
    }
  };
  
  // 上一张轮播图
  const prevSlide = () => {
    if (currentSlide.value === 0) {
        currentSlide.value = props.slides.length - 1;
    } else {
        currentSlide.value = (currentSlide.value - 1 + props.slides.length) % props.slides.length;
    }
  };
  
  // 切换到指定轮播图
  const goToSlide = (index) => {
    // 关闭过渡动画
    transitionStyle.value = "none";
    currentSlide.value = index;
  
    // 延迟重新启用过渡动画
    nextTick(() => {
        setTimeout(() => {
            transitionStyle.value = "transform 0.7s ease-in-out";
        }, 50); // 50ms的延迟后恢复过渡
    });
  };
  
  // 启动自动切换
  const startAutoPlay = () => {
    intervalId = setInterval(nextSlide, 3000); // 每3秒切换到下一张
  };
  
  // 停止自动切换
  const stopAutoPlay = () => {
    if (intervalId) clearInterval(intervalId);
  };
  
  // 组件挂载时启动自动切换，销毁时清除定时器
  onMounted(() => {
    // startAutoPlay();
  });
  
  onBeforeUnmount(() => {
    // stopAutoPlay();
  });
  </script>
  
  
  
  <style lang="scss" scoped>
  .carousel {
    position: relative;
    width: 100%;
    /* max-width: 500px; */
    overflow: hidden;
    margin: 0 auto;
    height: 100%;
  }
  
  .slides {
    display: flex;
    transition: transform 0.7s ease-in-out;
    height: 100%;
  }
  
  .slide {
    min-width: 100%;
    box-sizing: border-box;
    /* text-align: center; */
  }
  
  img {
    width: 100%;
    height: 100%;
    // position: absolute;
    object-fit: fill;
  }
  
  /* 底部区域样式 */
  .bottom-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 10px;
    background-color: rgb(20 20 20 / 50%)
  }
  
  .no-bg {
    background-color: transparent;
  }
  
  /* 文字描述样式 */
  .caption {
    font-size: 12px;
    color: #fff;
    font-weight: 500;
    margin: 0;
    white-space: nowrap;
  }
  
  /* 圆点导航样式 */
  .dots {
    position: absolute;
    right: 10px;
    display: flex;
    gap: 8px;
  }
  
  .center-dots {
    right: 50%;
    transform: translateX(50%);
  }
  
  .dot {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .dot.active {
    background-color: #333;
  }
  </style>
  
  