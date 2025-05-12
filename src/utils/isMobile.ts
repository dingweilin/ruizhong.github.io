// utils/deviceUtils.js
import { ref, onMounted, onUnmounted } from 'vue';

export function useDeviceType() {
  const isMobile = ref(false);

  // 检查设备类型
  function checkDeviceType() {
    const screenWidth = window.innerWidth;

    // 优先通过屏幕尺寸判断
    if (screenWidth < 768) {
      isMobile.value = true;
      return;
    }

    // 再通过 User-Agent 判断
    const userAgent = navigator.userAgent;
    const isMobileByUserAgent =
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    isMobile.value = isMobileByUserAgent;
  }

  // 页面加载时初始化
  onMounted(() => {
    checkDeviceType(); // 初始化时检查一次
    window.addEventListener('resize', checkDeviceType); // 监听窗口大小变化
  });

  // 清理事件监听器
  onUnmounted(() => {
    window.removeEventListener('resize', checkDeviceType);
  });

  return {
    isMobile,
  };
}