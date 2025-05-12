<template>
    <div class="main-layout" :class="{ 'home-page': isHomePage, 'sub-page': !isHomePage }">
        <!-- 固定头部区域 不随路由变化-->
        <div class="fixed-header">
            <logo-search />
            <Header />
        </div>

        <!-- 轮播组件 - 只在首页显示 -->
        <div v-if="isHomePage" class="banner-container">
            <swiper :images="bannerImages" />
        </div>

        <!-- 主题内容 - 随路由变化 -->
        <main class="main-content">
            <page-container :show-sidebar="!isHomePage && hasSubNavigation">
                <!-- 左侧二级导航 - 非首页显示 -->
                <template #sidebar>
                    <side-navigation v-if="!isHomePage && hasSubNavigation" :nav-title="currentMenuTitle"
                        :nav-items="currentSubMenuItems" :active-key="currentSubMenuKey" @select="handleSubMenuSelect">
                    </side-navigation>
                </template>
                <!-- 右侧内容区域 -->
                <div class="right-content">
                    <!-- 面包屑导航 - 非首页显示 -->
                    <div v-if="!isHomePage" class="breadcrumb-wrapper">
                        <Breadcrumb />
                    </div>

                    <!-- 内容区域 - 包含router-view -->
                    <div class="router-view-container" :class="{ 'home-page-padding': isHomePage, 'sub-page-padding': !isHomePage }">
                        <router-view v-slot="{ Component }">
                            <transition name="fade" mode="out-in">
                                <keep-alive>
                                    <component :is="Component" />
                                </keep-alive>
                            </transition>
                        </router-view>
                    </div>
                </div>
            </page-container>
        </main>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { routes } from '@/router/index';


// 子导航路由结构映射
interface NavItem {
    key: string;
    label: string;
    path?: string;
    hideInMenu?: boolean;
}
// 获取当前路由信息
const route = useRoute();
const router = useRouter();
const bannerImages = ref([
     '/src/views/home/images/v2_st0362.jpg',
     '/src/views/home/images/v2_st03oo.jpg',
     '/src/views/home/images/8.jpg'
   ]);
// 计算当前是否为首页
const isHomePage = computed(() => {
    return route.path === '/' || route.path === '/home';
});


// 获取路由的第一段作为主菜单，第二段作为子菜单
const currentMainSection = computed(() => {
    const path = route.path.substring(1); // 去掉前面的 /
    console.log(path,'path');
    
    const segments = path.split('/').filter(Boolean);
    return segments.length > 0 ? segments[0] : '';
})
const currentSubSection = computed(() => {
    const path = route.path;
    const segments = path.split('/').filter(Boolean);
    return segments.length > 1 ? segments[1] : '';
});


// 根据路由配置计算子导航
const subNavigationItems = computed(() => {
    // 获取主布局下的所有子路由
    const mainRoutes = routes[0]?.children || [];

    // 创建子导航映射
    const subNavMap: Record<string, { title: string, items: NavItem[] }> = {};

    mainRoutes.forEach(route => {
        const mainPath = route.path.substring(1); // 去掉前面的 /
        // 跳过不需要处理的路由
        if (!mainPath ||
            mainPath === 'home' ||
            !route.meta?.title ||
            !route.children ||
            route.children.length === 0) {
            return;
        }

        // 创建该主菜单的子导航配置
        const menuConfig = {
            title: route.meta.title as string,
            items: route.children.map(childRoute => {
                // 提取子路由路径的最后一段作为key
                const childPath = childRoute.path.split('/').pop() || '';
                return {
                    key: childPath,
                    label: childRoute.meta?.title as string || childPath,
                    path: childRoute.path,
                    hideInMenu: !childRoute.meta?.hideInMenu as boolean 
                };
            })
        };

        // 将子导航配置添加到映射中
        subNavMap[mainPath] = menuConfig;
    });

    return subNavMap;
});

// 计算当前是否有子导航
const hasSubNavigation = computed(() => {
    return !!subNavigationItems.value[currentMainSection.value];
});

// 获取当前主菜单标题
const currentMenuTitle = computed(() => {
    return hasSubNavigation.value ? subNavigationItems.value[currentMainSection.value].title : '';
});

// 获取当前子菜单项
const currentSubMenuItems = computed(() => {
    return hasSubNavigation.value ? subNavigationItems.value[currentMainSection.value].items : [];
});

// 当前选中的子菜单项
const currentSubMenuKey = computed(() => {
    if (currentSubSection.value) {
        return currentSubSection.value;
    }

    // 如果没有子路径，使用该菜单下的第一个子项
    return hasSubNavigation.value && currentSubMenuItems.value.length > 0
        ? currentSubMenuItems.value[0].key
        : '';
});

// 处理子菜单点击
const handleSubMenuSelect = (item: NavItem) => {
    console.log('子菜单点击:', item);
    
    if (item.path) {
        console.log(11111);
        
        router.push(item.path);
    } else {
        console.log(2222);
        
        // 如果没有指定path，使用key构建路径
        router.push(`/${currentMainSection.value}/${item.key}`);
    }
};

// 监听路由变化
watch(() => route.path, (newPath) => {
    // 当路由变化时，滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('路由变化:', newPath);
});
</script>

<style lang="scss" scoped>
.main-layout {
    // display: flex;
    // flex-direction: column;
    min-height: 100vh;
    // min-width: 1210px;
    overflow: hidden;
    &.home-page {
        background-color: #fff;
    }
    
    &.sub-page {
        background-color: #e6e8ed;
    }
    // 固定头部样式
    .fixed-header {
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 1000;
        background-color: #fff;
        // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }
  // 主内容区域样式
  .main-content {
        flex: 1;
        padding: 15px 0 30px;
        position: relative;
        // background: #e6e8ed;
        
        // 左右布局内容区域
        :deep(.page-container) {
            &.with-sidebar {
                display: flex;
                background: #e6e8ed;

                
                // 侧边栏容器
                .sidebar-container {
                    background-color: transparent;
                }
                
                // 内容容器
                .content-container {
                    background-color: transparent;
                }
            }
            
            // 右侧内容区域
            .right-content {
                display: flex;
                flex-direction: column;
                width: 100%;
                
                // 面包屑容器样式
                .breadcrumb-wrapper {
                    margin-bottom: 15px;
                    background-color: #fff;
                    border-radius: 4px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                    padding: 0;
                }
            }
        }

        // 路由视图容器
        .router-view-container {
            background-color: #fff;
            border-radius: 4px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            // padding: 20px;
            flex: 1;
        }
        .home-page-padding {
            padding: 0 ;
        }
        .sub-page-padding {
            padding: 20px;
        }
    }

}
// 页面过渡效果
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>