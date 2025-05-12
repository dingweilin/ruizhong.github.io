<template>
    <div class="sidebar">
        <div class="el-tabs__nav-wrap">
            <div class="el-tabs__nav-scroll">
                <div class="el-tabs__nav">
                    <div class="el-tabs__item is-active" ref="activeTab">{{title}}</div>
                    <div class="el-tabs__active-bar" :style="activeBarStyle"></div>
                </div>
                <div v-if="showMore" class="more">浏览更多 >>></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed, nextTick, onUnmounted } from 'vue';

const props=defineProps({
    showMore: {
        type: Boolean,
        default: true
    },
    title:{
        type: String,
        default: '新闻资讯'
    }
});

const activeTab = ref<HTMLElement | null>(null);
const tabWidth = ref(0);
const updateTabWidth = () => {
    if (activeTab.value) {
        tabWidth.value = activeTab.value.offsetWidth;
    }
}

// const activeBarStyle = computed(() => {
//     if (!activeTab.value) return { width: '0px' };
//     const width = activeTab.value.offsetWidth + 'px';
//     return {
//         width: width,
//         transform: 'translateX(0px)'
//     };
// });

const activeBarStyle = computed(() => {
    if (tabWidth.value===0) return { width: '0px' };
    // const width = activeTab.value.offsetWidth + 'px';
    return {
        width: `${tabWidth.value}px`,
        transform: 'translateX(0px)'
    };
});
// 窗口大小变化处理函数
const handleResize = () => {
    // 使用nextTick确保DOM更新后再获取新宽度
    nextTick(() => {
        updateTabWidth();
    });
};

// 使用防抖函数减少resize事件触发频率
const debounce = (fn: Function, delay: number) => {
    let timer: number | null = null;
    return function() {
        if (timer) window.clearTimeout(timer);
        timer = window.setTimeout(() => {
            fn();
        }, delay);
    };
}
// 创建防抖版本的resize处理函数
const debouncedResize = debounce(handleResize, 100);
onMounted(() => {
    // 初始更新宽度
    updateTabWidth();
    
    // 添加resize事件监听
    window.addEventListener('resize', debouncedResize);
    
    // 在字体加载完成后可能需要再次更新
    document.fonts.ready.then(() => {
        updateTabWidth();
    });
});
onUnmounted(() => {
    // 清理事件监听
    window.removeEventListener('resize', debouncedResize);
});
</script>
<style lang="scss" scoped>
.sidebar {
    display: flex;
    align-items: center;
    justify-content: space-between; // 让内容和"更多"按钮分别位于两端

    .el-tabs__nav-wrap {
        overflow: hidden;
        margin-bottom: -1px;
        position: relative;
        flex: 1 auto;
    }

    .el-tabs__nav-scroll {
        overflow: hidden;
    }

    .el-tabs__nav {
        display: flex;
        white-space: nowrap;
        position: relative;
        float: left;
        z-index: 2;
    }

    .el-tabs__active-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        background-color: #254E7A; 
        z-index: 1;
        transition: transform 0.3s ease, width 0.3s ease;
        list-style: none;
    }

    .el-tabs__item {
        // padding: 0 20px;
        margin-right: 20px;
        height: 40px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        font-size: 24px;
        line-height: 16px;
        font-weight: 600;
        color: #303133;
        position: relative;
        cursor: pointer;
    }
    
    .el-tabs__item.is-active {
        color: #254E7A;
    }

    .el-tabs__nav-wrap:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #e4e7ed;
        z-index: var(--el-index-normal);
    }

    .more {
        text-align: right;
        padding: 5px 10px;
        font-size: 18px;
        color: #AA8B70;
        cursor: pointer;
     
    }
}
</style>