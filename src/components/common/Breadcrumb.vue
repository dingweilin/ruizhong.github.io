<template>
  <div class="breadcrumb-container">
    <!-- 左侧当前页面标题 -->
    <div class="current-page-title">
      {{ currentPageTitle }}
    </div>
    
    <!-- 右侧导航路径 -->
    <div class="breadcrumb-path">
      <!-- 首页链接 -->
      <router-link to="/" class="breadcrumb-item">首页</router-link>
      
      <!-- 一级导航和二级导航 - 确保层级顺序正确 -->
      <template v-for="(item, index) in breadcrumbItems" :key="index">
        <span class="separator">&gt;</span>
        <router-link 
          v-if="item.path && index < breadcrumbItems.length - 1" 
          :to="item.path" 
          class="breadcrumb-item"
        >
          {{ item.title }}
        </router-link>
        <span 
          v-else 
          class="breadcrumb-item current"
        >
          {{ item.title }}
        </span>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { routes } from '@/router/index';

const route = useRoute();
const router = useRouter();

// 根据路由表生成映射表
const pathTitleMap = computed(() => {
  const map = {};
  
  // 递归处理路由表并构建映射
  const processRoutes = (routes) => {
    if (!routes) return;
    
    routes.forEach(routeItem => {
      // 处理普通路径
      if (routeItem.path && routeItem.meta?.title) {
        // 提取路径的最后一段作为键
        const pathSegment = routeItem.path.split('/').filter(Boolean).pop();
        if (pathSegment) {
          map[pathSegment] = routeItem.meta.title;
        }
      }
      
      // 递归处理子路由
      if (routeItem.children && routeItem.children.length > 0) {
        processRoutes(routeItem.children);
      }
    });
  };
  
  // 处理路由表
  processRoutes(routes);
  
  // 添加一些常见的额外映射，以防路由表中没有
  const additionalMappings = {
    'home': '首页',
    'detail': '详情',
    'list': '列表'
  };
  
  return { ...additionalMappings, ...map };
});

// 计算当前页面标题
const currentPageTitle = computed(() => {
  const pathSegments = route.path.split('/').filter(Boolean);
  
  // 如果是首页
  if (pathSegments.length === 0 || (pathSegments.length === 1 && pathSegments[0] === 'home')) {
    return '首页';
  }
  
  // 获取最后一个路径段作为当前页面
  const lastSegment = pathSegments[pathSegments.length - 1];
  
  // 尝试从matched数组获取标题
  if (route.matched.length > 0) {
    const lastMatched = route.matched[route.matched.length - 1];
    if (lastMatched.meta && lastMatched.meta.title) {
      return lastMatched.meta.title;
    }
  }
  
  // 尝试从路由映射表获取标题
  if (pathTitleMap.value[lastSegment]) {
    return pathTitleMap.value[lastSegment];
  }
  
  // 检查是否为ID参数
  const isIdParam = /^\d+$/.test(lastSegment) || /^[0-9a-f-]{36}$/i.test(lastSegment);
  if (isIdParam) {
    // 如果是ID参数，检查前一个路径段以提供更有上下文的标题
    if (pathSegments.length > 1) {
      const parentSegment = pathSegments[pathSegments.length - 2];
      if (pathTitleMap.value[parentSegment]) {
        return `${pathTitleMap.value[parentSegment]}详情`;
      }
    }
    return '详情页';
  }
  
  // 回退到路径名（转换首字母为大写）
  return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
});

// 根据当前路由计算面包屑路径
const breadcrumbItems = computed(() => {
  const currentPath = route.path;
  const pathSegments = currentPath.split('/').filter(Boolean);
  
  if (pathSegments.length === 0) {
    return [];
  }
  
  const breadcrumbs = [];
  let cumulativePath = '';
  
  // 先添加一级导航
  if (pathSegments.length > 0) {
    const segment = pathSegments[0];
    cumulativePath = `/${segment}`;
    
    let title = '';
    // 尝试从路由元数据获取标题
    const matched = route.matched.find(r => r.path === cumulativePath);
    if (matched?.meta?.title) {
      title = matched.meta.title;
    } 
    // 尝试从映射表获取标题
    else if (pathTitleMap.value[segment]) {
      title = pathTitleMap.value[segment];
    }
    else {
      // 将英文路径转换为更友好的中文显示
      title = segment.charAt(0).toUpperCase() + segment.slice(1);
    }
    
    breadcrumbs.push({
      title: title,
      path: pathSegments.length > 1 ? cumulativePath : undefined
    });
  }
  
  // 再添加二级导航（如果存在）
  if (pathSegments.length > 1) {
    const segment = pathSegments[1];
    cumulativePath = `/${pathSegments[0]}/${segment}`;
    
    let title = '';
    // 尝试从路由元数据获取标题
    const matched = route.matched.find(r => r.path === cumulativePath || r.path.endsWith(`/${segment}`));
    if (matched?.meta?.title) {
      title = matched.meta.title;
    } 
    // 尝试从映射表获取标题
    else if (pathTitleMap.value[segment]) {
      title = pathTitleMap.value[segment];
    }
    else {
      // 将英文路径转换为更友好的中文显示
      title = segment.charAt(0).toUpperCase() + segment.slice(1);
    }
    
    breadcrumbs.push({
      title: title,
      path: undefined
    });
  }
  
  return breadcrumbs;
});

// 组件挂载时打印调试信息
onMounted(() => {
  console.log('面包屑组件已挂载');
  console.log('当前路由:', route.path);
  console.log('路由映射表:', pathTitleMap.value);
  console.log('面包屑项:', breadcrumbItems.value);
});
</script>

<style lang="scss" scoped>
@use "sass:color";

$primary-color: #4682B4;
$text-color: #666;
$lighter-text: #999;
$border-color: #E5E5E5;
$hover-color: color.adjust($primary-color, $lightness: -10%);

.breadcrumb-container {
  background-color: #fff;
  padding: 15px 20px;
  // margin-bottom: 15px;
  border-bottom: 1px solid $border-color;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  // 当前页面标题样式
  .current-page-title {
    font-size: 18px;
    font-weight: 600;
    color: $primary-color;
    position: relative;
    padding-left: 15px;
    
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 4px;
      height: 18px;
      background-color: $primary-color;
      border-radius: 2px;
    }
  }
  
  // 面包屑路径样式
  .breadcrumb-path {
    font-size: 14px;
    color: $text-color;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    
    .breadcrumb-item {
      color: $primary-color;
      text-decoration: none;
      transition: color 0.2s;
      
      &:hover {
        color: $hover-color;
        text-decoration: underline;
      }
      
      &.current {
        color: $lighter-text;
        cursor: default;
      }
    }
    
    .separator {
      margin: 0 8px;
      color: $lighter-text;
    }
  }
}

// // 响应式适配
// @media (max-width: 768px) {
//   .breadcrumb-container {
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 10px;
//     padding: 12px 15px;
    
//     .current-page-title {
//       font-size: 16px;
//     }
    
//     .breadcrumb-path {
//       font-size: 12px;
      
//       .separator {
//         margin: 0 5px;
//       }
//     }
//   }
// }
</style> 