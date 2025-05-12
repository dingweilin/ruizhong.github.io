<template>
  <div class="campus-news">
    <div class="container">
      
      <div class="news-list">
        <div v-for="(item, index) in newsList" :key="index" class="news-item">
          <div class="news-title">
            <router-link :to="`/news/campus-news/detail/${item.id}`">{{ item.title }}</router-link>
          </div>
          <div class="news-meta">
            <span class="news-date">{{ item.date }}</span>
            <span class="news-views">浏览量: {{ item.views }}</span>
          </div>
          <div class="news-summary">{{ item.summary }}</div>
          <div class="news-more">
            <router-link :to="`/news/campus-news/detail/${item.id}`">查看详情</router-link>
          </div>
        </div>
      </div>

      <!-- 分页控件 -->
      <div class="pagination">
        <span class="page-btn prev" :class="{ disabled: currentPage === 1 }" @click="prevPage">上一页</span>
        <span class="page-number" v-for="page in totalPages" :key="page" 
              :class="{ active: page === currentPage }" 
              @click="goToPage(page)">{{ page }}</span>
        <span class="page-btn next" :class="{ disabled: currentPage === totalPages }" @click="nextPage">下一页</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 响应式状态
const newsList = ref([]);
const currentPage = ref(1);
const totalPages = ref(5);
const pageSize = ref(10);

// 生命周期钩子
onMounted(() => {
  fetchNewsList();
});

// 方法
const fetchNewsList =async () => {

  
  // 模拟从API获取数据
  // 实际项目中替换为真实的API调用
  setTimeout(() => {
    // 生成模拟数据
    newsList.value = Array.from({ length: 10 }, (_, i) => ({
      id: (currentPage.value - 1) * pageSize.value + i + 1,
      title: `瑞安中学举办${2023 - i}年度校园文化节`,
      date: `2023-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`,
      views: Math.floor(Math.random() * 1500) + 500,
      summary: '为丰富校园文化生活，培养学生综合素质，瑞安中学成功举办了年度校园文化节。活动包括文艺表演、学科竞赛、体育比赛等多个环节，全校师生积极参与，展现了瑞中学子的多才多艺和青春风采。'
    }));
  }, 300);
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
    fetchNewsList();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
    fetchNewsList();
  }
};

const goToPage = (page) => {
  if (page !== currentPage.value) {
    currentPage.value = page;
    fetchNewsList();
  }
};
</script>

<style scoped>
.campus-news {
  padding: 30px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.page-title {
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #1890ff;
}

.news-list {
  margin-bottom: 40px;
}

.news-item {
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea;
}

.news-title {
  margin-bottom: 10px;
}

.news-title a {
  font-size: 18px;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  line-height: 1.4;
}

.news-title a:hover {
  color: #1890ff;
}

.news-meta {
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
}

.news-meta span {
  margin-right: 20px;
}

.news-summary {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.news-more a {
  color: #1890ff;
  text-decoration: none;
  font-size: 14px;
}

.news-more a:hover {
  text-decoration: underline;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-number, .page-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  margin: 0 5px;
  padding: 0 8px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
}

.page-number {
  border: 1px solid #d9d9d9;
  color: #666;
}

.page-number.active {
  background-color: #1890ff;
  color: white;
  border-color: #1890ff;
}

.page-btn {
  border: 1px solid #d9d9d9;
  color: #666;
}

.page-btn:hover, .page-number:hover:not(.active) {
  color: #1890ff;
  border-color: #1890ff;
}

.page-btn.disabled {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 24px;
  }
  
  .news-title a {
    font-size: 16px;
  }
  
  .news-summary {
    font-size: 14px;
  }
}
</style>