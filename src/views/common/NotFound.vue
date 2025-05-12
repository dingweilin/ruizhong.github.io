<template>
  <div class="not-found-page">
    <div class="not-found-container">
      <div class="error-code">404</div>
      <h1 class="title">页面未找到</h1>
      <p class="message">抱歉，您访问的页面不存在或已被移除。</p>
      <div class="suggestions">
        <p>您可以：</p>
        <ul>
          <li>检查输入的URL是否正确</li>
          <li>返回<router-link to="/">首页</router-link></li>
          <li>尝试使用<span class="link" @click="openSearch">搜索功能</span>查找所需内容</li>
        </ul>
      </div>
      <div class="actions">
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

// 打开搜索
const openSearch = () => {
  router.push('/search');
};
</script>

<style lang="scss" scoped>
@use "sass:color";

$primary-color: #4682B4;
$text-color: #333;
$light-gray: #eee;

.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  padding: 40px 20px;
  background-color: $light-gray;
  
  .not-found-container {
    max-width: 600px;
    width: 100%;
    text-align: center;
    padding: 40px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    
    .error-code {
      font-size: 120px;
      font-weight: 700;
      color: $primary-color;
      line-height: 1;
      margin-bottom: 10px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .title {
      font-size: 32px;
      font-weight: 600;
      color: $text-color;
      margin-bottom: 15px;
    }
    
    .message {
      color: #666;
      font-size: 18px;
      line-height: 1.6;
      margin-bottom: 25px;
    }
    
    .suggestions {
      text-align: left;
      background-color: $light-gray;
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 25px;
      
      p {
        font-weight: 600;
        margin-bottom: 10px;
      }
      
      ul {
        padding-left: 20px;
        
        li {
          margin-bottom: 8px;
          
          a, .link {
            color: $primary-color;
            text-decoration: none;
            cursor: pointer;
            
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    
    .actions {
      display: flex;
      justify-content: center;
      gap: 15px;
      
      .btn {
        padding: 12px 25px;
        border: 1px solid #ddd;
        background-color: white;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.2s;
        
        &:hover {
          background-color: #f9f9f9;
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
  .not-found-page {
    min-height: 500px;
    
    .not-found-container {
      padding: 30px 20px;
      
      .error-code {
        font-size: 100px;
      }
      
      .title {
        font-size: 28px;
      }
      
      .message {
        font-size: 16px;
      }
      
      .actions {
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