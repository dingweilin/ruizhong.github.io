<template>
  <div class="side-navigation">
    <div class="nav-title">
      <span class="title-text">{{ navTitle }}</span>
    </div>
    <ul class="nav-menu">
      <li 
        v-for="item in filteredNavItems" 
        :key="item.key" 
        class="nav-item"
        :class="{ active: activeKey === item.key }"
        @click="handleSelect(item)"
      >
        <span class="nav-indicator"></span>
        <span class="nav-icon">{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface NavItem {
  key: string;
  label: string;
  path?: string;
  hideInMenu?: boolean;
}

const props = withDefaults(defineProps<{
  navTitle: string;
  navItems: NavItem[];
  activeKey?: string;
}>(), {
  activeKey: ''
});

const emit = defineEmits<{
  (e: 'select', item: NavItem): void;
}>();

// 过滤掉hideInMenu为true的导航项
const filteredNavItems = computed(() => {
  return props.navItems.filter(item => item.hideInMenu !== false);
});
console.log(filteredNavItems.value,'filteredNavItems');

const handleSelect = (item: NavItem) => {
  emit('select', item);
};
</script>

<style lang="scss" scoped>
@use "sass:color";

$primary-color: #4682B4;
$secondary-color: #AA8B70;
$hover-bg-color: rgba(70, 130, 180, 0.05);
$active-color: #4682B4;
$border-color: #e8e8e8;
$text-color: #333;

.side-navigation {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  
  .nav-title {
    padding: 18px 20px;
    background-color: $primary-color;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 2;
    
    .title-text {
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      position: relative;
      padding-left: 12px;
      display: block;
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 18px;
        background-color: $secondary-color;
        border-radius: 2px;
      }
    }
  }
  
  .nav-menu {
    list-style: none;
    padding: 10px 0;
    margin: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 3px;
    }
    
    .nav-item {
      position: relative;
      padding: 14px 20px;
      font-size: 15px;
      color: $text-color;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
      display: flex;
      align-items: center;
      
      .nav-indicator {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background-color: transparent;
        transition: background-color 0.3s;
      }
      
      .nav-label {
        position: relative;
        z-index: 1;
        transition: transform 0.2s, color 0.3s;
      }
      
      &:hover {
        color: $active-color;
        background-color: $hover-bg-color;
        
        .nav-label {
          transform: translateX(3px);
        }
      }
      
      &.active {
        color: $active-color;
        background-color: $hover-bg-color;
        font-weight: 500;
        
        .nav-indicator {
          background-color: $primary-color;
        }
        
        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background-color: rgba($primary-color, 0.2);
        }
      }
    }
  }
}

// 响应式适配
@media (max-width: 768px) {
  .side-navigation {
    border-radius: 6px;
    
    .nav-title {
      padding: 15px;
      
      .title-text {
        font-size: 16px;
      }
    }
    
    .nav-menu .nav-item {
      padding: 12px 15px;
      font-size: 14px;
    }
  }
}
</style>