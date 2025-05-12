<template>
  <header class="site-header">
    <div class="header-container">
      <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal" :items="menuItems"
        :style="{ backgroundColor: 'transparent', borderBottom: 'none' }" class="main-menu custom-menu"
        @click="clickMenu" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import type { MenuProps } from 'ant-design-vue';
import { useRoute, useRouter } from 'vue-router';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
// 导入路由配置
// @ts-ignore - Ignore the module resolution error since it's a valid path
import { routes } from '@/router/index.ts';


const route = useRoute();
const router = useRouter();
const selectedKeys = ref<string[]>(['home']);
// 用于记录当前活跃的子菜单项
const activeSubmenuKey = ref<string>('');

//定义一个驼峰命名函数
const camelCaseStr = (str: string) => {
  return str
    .split("-") // 按 "-" 分割成数组：["moral", "space"]
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1) // 首字母大写
    )
    .join(""); // 合并数组为字符串
}
// 主菜单项
const menuItems = computed<MenuProps['items']>(() => {
  // 获取主布局下的所有子路由
  const mainRoutes = routes[0]?.children || [];

  // 首页菜单项
  const homeItem = {
    key: 'home',
    label: '首页',
    class: 'menu-item' + (selectedKeys.value.includes('home') ? ' top-menu-active' : '')
  };

  // 过滤出需要在导航栏显示的路由
  const navItems = mainRoutes
    .filter((route: RouteRecordRaw) => {
      // 跳过不需要在导航中显示的路由（例如详情页、404等）
      const path = route.path.substring(1); // 去掉前面的 /
      return (
        path &&
        !path.includes(':') &&
        !path.includes('*') &&
        route.meta?.title &&
        path !== 'home' &&
        route.meta?.hideInMenu !== true // 添加这一行，过滤掉hideInMenu为true的路由
      );
    })
    .map((route: RouteRecordRaw) => {
      // 转换为菜单项格式
      // const pathWithoutSlash = route.path.substring(1); // 去掉前面的 /
      const pathWithoutSlash = camelCaseStr(route.path.substring(1));

      // 检查当前主菜单是否为活跃状态
      const isMainActive = selectedKeys.value.includes(pathWithoutSlash);

      // 检查是否有子路由
      const children = route.children?.filter(childRoute => {
          // 过滤掉详情页路由和带有hideInMenu标记的路由
          return (
            childRoute.meta?.hideInMenu !== true && 
            !childRoute.path.includes('detail') && 
            !childRoute.path.includes(':')
          );
        }).map((childRoute: RouteRecordRaw) => {
        // const childPath = childRoute.path.split('/').pop() || '';
        // console.log(childPath, 'childPath');
        const childPath = camelCaseStr(childRoute.path.split('/').pop() || '');
        // console.log(childPath, 'childPath');

        const itemKey = `${pathWithoutSlash}-${childPath}`;

        // 检查是否为当前活跃的子菜单项
        const isActive = itemKey === activeSubmenuKey.value;

        return {
          key: itemKey,
          label: childRoute.meta?.title || childPath,
          class: `submenu-item ${isActive ? 'active-submenu-item' : ''}`,
          // 需要记录完整路径用于导航
          path: childRoute.path
        };
      });

      return {
        key: pathWithoutSlash,
        label: route.meta?.title || pathWithoutSlash,
        class: `menu-item ${isMainActive ? 'top-menu-active' : ''}`,
        children: children?.length ? children : undefined
      };
    });

  // 将首页菜单项与其他菜单项合并
  return [homeItem, ...navItems];
});
// console.log(menuItems.value, 'menuItems.value');


// 监听路由变化，更新当前选中的菜单项
onMounted(() => {
  updateSelectedMenu(route);
  // 添加全局样式覆盖
  addGlobalStyles();
});

// 添加全局样式来确保高亮效果
const addGlobalStyles = () => {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    /* 主菜单黄色底部条 */
    .site-header .ant-menu-horizontal > .ant-menu-item-selected::before,
    .site-header .ant-menu-horizontal > .ant-menu-submenu-selected::before,
    .site-header .ant-menu-horizontal > .top-menu-active::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background-color: #FFEB3B !important;
      opacity: 1 !important;
      transform: scaleX(1) !important;
    }
    
    /* 确保顶部导航菜单背景透明 */
    .site-header .ant-menu-horizontal {
      border-bottom: none !important;
      background-color: transparent !important;
    }
    
    /* 移除水平线 */
    .site-header .ant-menu-horizontal::after {
      display: none !important;
    }
    
    /* 移除菜单项的边框 */
    .site-header .ant-menu-horizontal > .ant-menu-item::after,
    .site-header .ant-menu-horizontal > .ant-menu-submenu::after {
      display: none !important;
      border-bottom: none !important;
    }
    
    /* 菜单项选中状态 */
    .site-header .ant-menu-horizontal > .ant-menu-item-selected,
    .site-header .ant-menu-horizontal > .ant-menu-submenu-selected,
    .site-header .ant-menu-horizontal > .top-menu-active,
    .site-header .ant-menu-horizontal > .ant-menu-submenu-open {
      color: #fff !important;
      font-weight: 600 !important;
      background-color: rgba(255, 255, 255, 0.15) !important;
    }
    
    /* 菜单项悬停效果 */
    .site-header .ant-menu-item:hover,
    .site-header .ant-menu-submenu:hover {
      color: #fff !important;
      background-color: rgba(255, 255, 255, 0.15) !important;
    }
    
    /* 子菜单高亮样式 */
    .ant-menu-submenu-popup .ant-menu-item.active-submenu-item,
    .ant-menu-submenu-popup .ant-menu-item-selected,
    .ant-menu-submenu-popup .ant-menu-item[class*='active'] {
      color: #4682B4 !important;
      background-color: rgba(70, 130, 180, 0.1) !important;
      font-weight: 500 !important;
    }
    
    /* 子菜单左侧指示条 */
    .ant-menu-submenu-popup .ant-menu-item.active-submenu-item::after,
    .ant-menu-submenu-popup .ant-menu-item-selected::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 3px;
      background-color: #4682B4 !important;
      transform: scaleY(1) !important;
      opacity: 1 !important;
    }
    
    /* 修复子菜单点击时背景颜色问题 */
    .ant-menu-submenu-selected .ant-menu-submenu-title {
      color: #fff !important;
      background-color: rgba(255, 255, 255, 0.15) !important;
    }
    
    /* 确保子菜单打开时父菜单高亮 */
    .ant-menu-submenu-active, 
    .ant-menu-submenu-open {
      background-color: rgba(255, 255, 255, 0.15) !important;
    }
  `;
  document.head.appendChild(styleElement);
};

// 监听路由变化
watch(() => route.path, () => {
  updateSelectedMenu(route);
});

// 更新选中的菜单
const updateSelectedMenu = (currentRoute: RouteLocationNormalizedLoaded) => {
  const path = currentRoute.path;

  // 如果路径是 / 或 /home，则选中 home
  if (path === '/' || path === '/home') {
    selectedKeys.value = ['home'];
    activeSubmenuKey.value = '';
    return;
  }

  // 提取当前路径的第一段作为主菜单，第二段作为子菜单（如果存在）
  const segments = path.split('/').filter(Boolean);
  // console.log(segments, 'segments');

  if (segments.length > 0) {
    // 这里更改为使用驼峰命名函数处理主菜单key
    const mainSection = camelCaseStr(segments[0]);
    // console.log(mainSection, 'mainSection');

    // 强制设置一级菜单高亮
    selectedKeys.value = [mainSection];

    // 如果有子路径，也使用驼峰命名处理子菜单key
    if (segments.length > 1) {
      const subSection = camelCaseStr(segments[1]);
      const combinedKey = `${mainSection}-${subSection}`;

      // 设置子菜单项的高亮状态
      activeSubmenuKey.value = combinedKey;
    } else {
      activeSubmenuKey.value = '';
    }
  } else {
    selectedKeys.value = ['home'];
    activeSubmenuKey.value = '';
  }
};

// 点击菜单项处理
const clickMenu: MenuProps['onClick'] = (info) => {
  const key = String(info.key);

  // 如果点击的是首页
  if (key === 'home') {
    selectedKeys.value = ['home'];
    activeSubmenuKey.value = '';
    router.push('/home');
    return;
  }

  // 检查是否是主菜单项（不含连字符的为主菜单项）
  if (!key.includes('-')) {
    // 从路由配置中找到对应的主路由
    const mainRouteConfig = routes[0]?.children?.find(
      (r: RouteRecordRaw) => r.path.substring(1) === key
    );

    if (mainRouteConfig) {
      // 设置主菜单为选中状态
      selectedKeys.value = [key];

      // 1. 首先检查是否有重定向设置
      if (mainRouteConfig.redirect) {

        // 处理不同类型的重定向
        let redirectPath: string;
        if (typeof mainRouteConfig.redirect === 'string') {
          redirectPath = mainRouteConfig.redirect;
        } else if (typeof mainRouteConfig.redirect === 'object' && 'path' in mainRouteConfig.redirect) {
          redirectPath = mainRouteConfig.redirect.path as string;
        } else {
          // 对于函数类型的重定向，我们回退到查找子路由
          redirectPath = '';
        }

        if (redirectPath) {
          router.push(redirectPath);

          // 设置子菜单高亮（如果重定向到子路由）
          const segments = redirectPath.split('/').filter(Boolean);
          if (segments.length > 1) {
            activeSubmenuKey.value = `${segments[0]}-${segments[1]}`;
          }

          return;
        }
      }

      // 2. 如果没有有效的重定向，则查找子路由
      const childRoutes = mainRouteConfig.children || [];

      if (childRoutes.length > 0) {
        // 尝试找到第一个有效的子路由
        const firstChildRoute = childRoutes.find(route => !route.meta?.hideInMenu) || childRoutes[0];
        if (firstChildRoute) {

          // 如果子路由有明确的path，使用它构建完整路径
          let targetPath: string;
          if (firstChildRoute.path) {
            // 检查是否是绝对路径
            if (firstChildRoute.path.startsWith('/')) {
              targetPath = firstChildRoute.path;
            } else {
              // 否则拼接父路径
              targetPath = `/${key}/${firstChildRoute.path.replace(/^\//, '')}`;
            }
          } else {
            // 回退到使用路由名称
            targetPath = `/${key}/${firstChildRoute.name?.toString().toLowerCase() || ''}`;
          }
          router.push(targetPath);

          // 设置子菜单高亮
          activeSubmenuKey.value = `${key}-${firstChildRoute.path?.replace(/^\//, '') || firstChildRoute.name?.toString().toLowerCase() || ''}`;
          return;
        }
      }

      // 3. 如果没有重定向也没有子路由，导航到主路由本身
      router.push(`/${key}`);
    }
  } else {
    // 处理子菜单项的点击
    const parts = key.split('-');
    const parentKey = parts[0];
    const childKey = parts[1];

    // 设置父菜单为选中状态
    selectedKeys.value = [parentKey];
    // 设置子菜单高亮
    activeSubmenuKey.value = key;

    // 首先尝试从路由配置中找到确切的路径
    const mainRouteConfig = routes[0]?.children?.find(
      (r: RouteRecordRaw) => r.path.substring(1) === parentKey
    );

    if (mainRouteConfig && mainRouteConfig.children) {
      const childRoute = mainRouteConfig.children.find(
        (r: RouteRecordRaw) => r.path.split('/').pop() === childKey
      );

      if (childRoute) {
        router.push(childRoute.path);
        return;
      }
    }

    // 如果从路由配置中找不到，尝试从菜单项中获取路径
    let targetPath: string | undefined;
    menuItems.value?.forEach(item => {
      if (item && item.key === parentKey && 'children' in item) {
        const children = (item as any).children;
        if (Array.isArray(children)) {
          const child = children.find((c: any) => c.key === key);
          if (child && child.path) {
            targetPath = child.path;
          }
        }
      }
    });

    // 导航到目标路径
    if (targetPath) {
      router.push(targetPath);
    } else {
      // 最后的备选方案：构造路径
      const constructedPath = `/${parentKey}/${childKey}`;
      router.push(constructedPath);
    }
  }
};
</script>

<style lang="scss" scoped>
@use "sass:color";

$spacing-md: 15px;
$primary-color: #4682B4;
$hover-bg-color: rgba(255, 255, 255, 0.15);
$active-color: #fff;
$active-indicator: #FFEB3B; // 使用醒目的黄色作为激活指示器

.site-header {
  background-color: $primary-color;
  color: #fff !important;
  height: 60px;
  position: relative;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  .header-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    // max-width: 1600px;
    margin: 0 auto;

    // 内联强制覆盖
    :deep(.main-menu) {
      border-bottom: none !important;
      background-color: transparent !important;
      display: flex;
      justify-content: center;
      width: 90%;
      line-height: 58px;
    }
  }
}

// 简化全局样式规则
.custom-menu {

  // 基础菜单样式
  :deep(.ant-menu-item),
  :deep(.ant-menu-submenu) {
    color: rgba(255, 255, 255, 0.9) !important;
    font-size: 16px;
    font-family: "思源黑体", sans-serif;
    padding: 0 18px;
    margin: 0 2px;
    border-bottom: none !important;

    &::after {
      display: none !important;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background-color: rgba(255, 241, 59, 0.3);
      transform: scaleX(0);
      opacity: 0;
      transition: transform 0.3s, opacity 0.3s;
    }

    &:hover {
      color: #fff !important;
      background-color: $hover-bg-color !important;
    }
  }

  // 选中态
  :deep(.ant-menu-item-selected),
  :deep(.ant-menu-submenu-selected),
  :deep(.top-menu-active) {
    color: #fff !important;
    font-weight: 600 !important;
    background-color: $hover-bg-color !important;

    &::before {
      background-color: $active-indicator !important;
      transform: scaleX(1) !important;
      opacity: 1 !important;
    }
  }
}

// 添加子菜单高亮样式
:deep(.active-submenu-item) {
  color: $primary-color !important;
  background-color: rgba(70, 130, 180, 0.1) !important;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 3px;
    background-color: $primary-color !important;
    transform: scaleY(1) !important;
    opacity: 1 !important;
  }
}

// 确保一级菜单高亮的自定义类
:deep(.top-menu-active) {
  color: #fff !important;
  font-weight: 600 !important;
  background-color: $hover-bg-color !important;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: $active-indicator !important;
    transform: scaleX(1) !important;
    opacity: 1 !important;
  }
}
</style>