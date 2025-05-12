<template>
  <div class="education-info">


    <!-- 内容列表 -->
    <div class="article-list">
      <div class="article-item" v-for="(item, index) in paginatedData" :key="index" @click="viewDetail(item)">
        <div class="article-content">
          <div class="article-title">
            <span class="title-dot"></span>
            <span class="title-text" :title="item.title">{{ item.title }}</span>
          </div>
          <div class="article-date">{{ item.date }}</div>
        </div>
      </div>
    </div>

    <!-- 分页控件 -->
    <div class="pagination">
      <span class="page-btn prev" :class="{ disabled: currentPage === 1 }" @click="prevPage">上一页</span>
      <span class="page-number" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }"
        @click="goToPage(page)">{{ page }}</span>
      <span class="page-btn next" :class="{ disabled: currentPage === totalPages }" @click="nextPage">下一页</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

interface InfoItem {
  id: number;
  title: string;
  date: string;
}

const router = useRouter();
const currentPage = ref(1);
const pageSize = 10;

// 模拟数据
const educationInfos: InfoItem[] = [
  { id: 1, title: '2023学年其他类型转授学分公示', date: '2024-08-30' },
  { id: 2, title: '2023学年第二学期校本培训学分公示', date: '2024-08-27' },
  { id: 3, title: '2023学年第一学期校本培训学分公示', date: '2023-12-08' },
  { id: 4, title: '2022学年其他类型转授学分公示', date: '2023-08-24' },
  { id: 5, title: '2021学年其他类型转授学分公示', date: '2022-09-27' },
  { id: 6, title: '2020学年其他类型转授学分公示', date: '2021-08-30' },
  { id: 7, title: '关于开展中小学教师全员师德考核在线学习的通知', date: '2021-06-17' },
  { id: 8, title: '温州市教育局关于加强中小学骨干教师管理和遴选的若干意见', date: '2021-06-11' },
  { id: 9, title: '关于开展温州市中小学骨干教师2020学年度目标考核的通知', date: '2021-06-11' },
  { id: 10, title: '关于拟定2021年温州市名师工作室（56）学员的通知', date: '2021-06-11' },
  { id: 11, title: '关于公布2020学年校优秀论文评选结果的通知', date: '2021-05-26' },
  { id: 12, title: '温州市教育科学规划领导小组公室关于开展2021年市属直属中小学（幼儿园）教师优秀教学案例评选活动的通知', date: '2021-01-19' },
  { id: 13, title: '关于举行2020年度温州市中小学（幼儿园）"微课"征集与评选活动的通知', date: '2020-10-16' },
  { id: 14, title: '关于组织参加2020年温州市中小学教师继续教育培训的通知', date: '2020-09-05' },
  { id: 15, title: '关于报送2020年度教师培训需求调查的通知', date: '2020-08-15' },
  { id: 16, title: '关于举办2020年瑞安中学教师教学技能比赛的通知', date: '2020-07-10' },
  { id: 17, title: '关于启动2020年瑞安中学"青蓝工程"师徒结对活动的通知', date: '2020-06-20' },
  { id: 18, title: '关于组织开展2020年暑期教师培训工作的通知', date: '2020-06-10' },
  { id: 19, title: '关于组织申报2020年度市级教育科研课题的通知', date: '2020-05-15' },
  { id: 20, title: '关于开展2019学年度教师业务能力考核工作的通知', date: '2020-04-25' },
  { id: 21, title: '关于公布2019年度教师教育教学论文评选结果的通知', date: '2020-03-30' },
  { id: 22, title: '关于组织参加2020年上半年中小学教师远程培训的通知', date: '2020-02-28' },
  { id: 23, title: '关于做好2020年度教师继续教育学分登记工作的通知', date: '2020-01-15' },
  { id: 24, title: '关于表彰2019年度教育教学先进个人的决定', date: '2019-12-30' },
  { id: 25, title: '关于举办2019年瑞安中学青年教师教学基本功比赛的通知', date: '2019-11-20' },
];

// 计算总页数
const totalPages = computed(() => {
  return Math.ceil(educationInfos.length / pageSize);
});

// 获取当前页面数据
const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return educationInfos.slice(startIndex, endIndex);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
    // fetchNewsList();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
    // fetchNewsList();
  }
};

const goToPage = (page: number) => {
  if (page !== currentPage.value) {
    currentPage.value = page;
    // fetchNewsList();
  }
};
// 查看文章详情
const viewDetail = (item: InfoItem) => {
  // console.log('查看文章详情：', item);

  router.push({
    path: `/news/edu-news/detail/${item.id}`,
    // query: { type: 'info' }
  });
};
</script>

<style lang="scss" scoped>
@use "sass:color";

// 色彩变量
$primary-color: #4682B4;
$secondary-color: #AA8B70;
$text-color: #333;
$light-text: #666;
$border-color: #E5E5E5;
$bg-light: #F9F9F9;
$hover-bg: #F0F0F0;

.education-info {
  background-color: #fff;
  border-radius: 4px;
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 20px;

  .page-header {
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid $primary-color;

    .page-title {
      font-size: 22px;
      font-weight: 600;
      color: $primary-color;
      margin: 0;
    }
  }

  .article-list {
      margin-bottom: 40px;
    .article-item {
      padding: 15px 0;
      border-bottom: 1px dashed $border-color;
      cursor: pointer;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        .article-title {
          .title-text {
            color: $primary-color;
          }
        }
      }

      .article-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .article-title {
          flex: 1;
          display: flex;
          align-items: center;
          min-width: 0;

          .title-dot {
            width: 6px;
            height: 6px;
            background-color: $secondary-color;
            border-radius: 50%;
            margin-right: 10px;
            flex-shrink: 0;
          }

          .title-text {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 16px;
            transition: color 0.2s;
            min-width: 0;
            max-width: 100%;
          }
        }

        .article-date {
          color: $light-text;
          font-size: 14px;
          flex-shrink: 0;
          margin-left: 15px;
        }
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page-number,
  .page-btn {
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

  .page-btn:hover,
  .page-number:hover:not(.active) {
    color: #1890ff;
    border-color: #1890ff;
  }

  .page-btn.disabled {
    color: rgba(0, 0, 0, 0.25);
    border-color: #d9d9d9;
    cursor: not-allowed;
  }
}

// 响应式调整
@media (max-width: 768px) {
  .education-info {
    .article-list {
      .article-item {
        .article-content {
          flex-direction: column;
          align-items: flex-start;

          .article-title {
            width: 100%;

            .title-text {
              max-width: calc(100% - 16px);
            }
          }

          .article-date {
            margin-left: 16px;
            margin-top: 5px;
          }
        }
      }
    }

    .pagination {
      .page-numbers {
        .page-number {
          width: 25px;
          height: 25px;
          margin: 0 3px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>