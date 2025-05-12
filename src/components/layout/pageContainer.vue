<template>
  <div class="page-container" :class="{ 'with-sidebar': showSidebar }">
    <div v-if="showSidebar" class="sidebar-container">
      <slot name="sidebar"></slot>
    </div>
    <div class="content-container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 页面容器组件，提供统一的内容区域宽度和间距
// 支持左侧边栏导航和右侧内容的两列布局

defineProps<{
  showSidebar?: boolean
}>();
</script>
<style lang="scss" scoped>
.page-container {
  // width: 100%;
  // max-width: 1210px;
  // margin: 0 auto;

  // padding: 0 1rem;
  &.with-sidebar {
    max-width: 1210px;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    padding: 0 15px;
    min-height: 650px; // 确保足够的内容高度
  }

  .sidebar-container {
    width: 240px;
    flex-shrink: 0; // 防止侧边栏宽度被压缩
    margin-right: 5px; // 在侧边栏和内容区之间添加一些间距
    height: auto; // 高度自适应
    position: sticky; // 侧边栏保持固定
    top: 100px; // 距离顶部的距离
  }

  .content-container {
    flex: 1; // 内容区占据剩余空间
    min-width: 0; // 防止内容溢出
    display: flex; // 添加flex布局，使子元素可以填充
    background-color: transparent;
  }
}
</style>