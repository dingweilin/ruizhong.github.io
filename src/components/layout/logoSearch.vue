<template>
  <div class="logo-search container">
    <div class="logo-area">
      <img src="../../assets/images/logo.png" alt="瑞安中学Logo">
    </div>
    <div class="search-area">
      <div class="search-box">
        <input type="text" placeholder="请输入搜索内容..." v-model="searchText" @keyup.enter="handleSearch">
        <button class="search-btn" @click="handleSearch">
          <i class="search-icon"></i>
          <span>搜索</span>
        </button>
      </div>
      <!-- <div class="hot-keywords" v-if="hotKeywords.length > 0">
        <span>热门搜索：</span>
        <a v-for="(keyword, index) in hotKeywords" 
           :key="index" 
           href="javascript:;" 
           @click="setSearchKeyword(keyword)">{{ keyword }}</a>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchText = ref('');
const hotKeywords = ref(['招生简章', '校园活动', '教师招聘', '联系我们']);

const handleSearch = () => {
  if (!searchText.value.trim()) {
    return;
  }
  
  // 搜索功能实现 - 这里可以根据实际需求跳转到搜索结果页或者在当前页面展示结果
  router.push({
    path: '/search',
    query: { keyword: searchText.value.trim() }
  });
};

const setSearchKeyword = (keyword: string) => {
  searchText.value = keyword;
  handleSearch();
};
</script>

<style lang="scss" scoped>
@use "sass:color";

$primary-color: #4682B4;
$hover-color: #3A6D9A;
$border-color: #E0E0E0;
$text-color: #333;
$placeholder-color: #999;

.logo-search {
  width: 100%;
  padding: 15px 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .logo-area {
    display: flex;
    align-items: center;
    
    img {
      width: 418px;
      height: 134px;
      object-fit: contain;
    }
  }
  
  .search-area {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20px;
    
    .search-box {
      display: flex;
      width: 400px;
      height: 42px;
      border: 1px solid $border-color;
      border-radius: 4px;
      overflow: hidden;
      transition: box-shadow 0.3s ease;
      
      &:hover, &:focus-within {
        box-shadow: 0 0 0 2px rgba(70, 130, 180, 0.1);
        border-color: $primary-color;
      }
      
      input {
        flex: 1;
        height: 100%;
        padding: 0 15px;
        border: none;
        outline: none;
        font-size: 14px;
        color: $text-color;
        
        &::placeholder {
          color: $placeholder-color;
        }
      }
      
      .search-btn {
        width: 80px;
        height: 100%;
        border: none;
        background-color: $primary-color;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;
        
        &:hover {
          background-color: $hover-color;
        }
        
        .search-icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-right: 5px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-size: contain;
        }
      }
    }
    
    .hot-keywords {
      margin-top: 10px;
      font-size: 12px;
      color: #666;
      
      span {
        margin-right: 5px;
      }
      
      a {
        color: #666;
        margin-right: 10px;
        text-decoration: none;
        transition: color 0.2s ease;
        
        &:hover {
          color: $primary-color;
          text-decoration: underline;
        }
        
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

// 响应式适配
// @media (max-width: 992px) {
//   .logo-search {
//     flex-direction: column;
//     align-items: center;
    
//     .logo-area {
//       margin-bottom: 15px;
//     }
    
//     .search-area {
//       margin-right: 0;
//       align-items: center;
//     }
//   }
// }

// @media (max-width: 576px) {
//   .logo-search {
//     .search-area {
//       .search-box {
//         width: 300px;
//       }
//     }
  // }
// }
</style>