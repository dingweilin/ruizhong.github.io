<template>
  <div class="empty-page">
    <div class="empty-container">
      <div class="empty-icon">
        <i class="fa fa-file-o"></i>
      </div>
      <h2 class="empty-title">页面正在开发中</h2>
      <p class="empty-message">抱歉，您访问的页面内容尚未完成，我们正在全力开发中...</p>
      <div class="empty-actions">
        <button class="btn" @click="goBack">返回上一页</button>
        <button class="btn primary" @click="goHome">返回首页</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

// 返回上一页
const goBack = () => {
  router.back();
};

// 跳转到首页
const goHome = () => {
  router.push('/');
};
</script>

<style lang="scss" scoped>
@use "sass:color";

$primary-color: #4682B4;
$text-color: #333;
$light-gray: #ddd;

.empty-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  padding: 40px 20px;
  
  .empty-container {
    max-width: 500px;
    text-align: center;
    padding: 30px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    
    .empty-icon {
      font-size: 64px;
      color: $light-gray;
      margin-bottom: 20px;
      
      i {
        display: inline-block;
      }
    }
    
    .empty-title {
      font-size: 24px;
      font-weight: 600;
      color: $text-color;
      margin-bottom: 15px;
    }
    
    .empty-message {
      color: #666;
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 25px;
    }
    
    .empty-actions {
      display: flex;
      justify-content: center;
      gap: 15px;
      
      .btn {
        padding: 10px 20px;
        border: 1px solid $light-gray;
        background-color: white;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.2s;
        
        &:hover {
          background-color: #f5f5f5;
        }
        
        &.primary {
          background-color: $primary-color;
          border-color: $primary-color;
          color: white;
          
          &:hover {
            background-color: color.adjust($primary-color, $lightness: -5%);
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .empty-page {
    min-height: 400px;
    
    .empty-container {
      padding: 20px;
      
      .empty-icon {
        font-size: 48px;
      }
      
      .empty-title {
        font-size: 20px;
      }
      
      .empty-actions {
        flex-direction: column;
        gap: 10px;
        
        .btn {
          width: 100%;
        }
      }
    }
  }
}
</style> 