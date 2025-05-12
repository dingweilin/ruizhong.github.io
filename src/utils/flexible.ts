// flexible.ts - REM适配解决方案

/**
 * rem 适配方案
 * 1. 设置基准值（设计稿宽度）
 * 2. 计算缩放比例
 * 3. 设置根元素字体大小
 * 4. 监听窗口大小变化，动态调整
 */

// 设计稿的宽度（以像素为单位）
const DESIGN_WIDTH = 1920;

// 基准字体大小（1rem等于多少像素）
const BASE_FONT_SIZE = 75;

// 最大的缩放比例，防止在大屏上字体过大
const MAX_SCALE = 1.5;

// 最小的缩放比例，防止在小屏上字体过小
const MIN_SCALE = 0.5;

// 设置 rem 基准字体大小
function setRem() {
  // 获取当前视窗宽度
  const currentWidth = document.documentElement.clientWidth || window.innerWidth;
  
  // 计算缩放比例
  let scale = currentWidth / DESIGN_WIDTH;
  
  // 限制最大和最小缩放
  scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));
  
  // 设置 html 根元素字体大小，基准值 * 缩放比例
  const fontSize = BASE_FONT_SIZE * scale;
  document.documentElement.style.fontSize = `${fontSize}px`;
} 

// 初始化
export function initFlexible() {
  // 初始化时设置一次
  setRem();
  
  // 监听窗口大小变化，重新设置 rem
  window.addEventListener('resize', setRem);
  
  // 监听页面显示（从其他标签页切换回来）时重新计算
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      setRem();
    }
  });
}

export default initFlexible; 