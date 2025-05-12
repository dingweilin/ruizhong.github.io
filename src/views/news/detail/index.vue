<template>
    <div class="news-detail">
      <div class="detail-header">
        <h1 class="detail-title">{{ newsData.title || '文章标题' }}</h1>
        <div class="detail-meta">
          <span class="detail-date">{{ newsData.date || '2023-01-01' }}</span>
          <span class="detail-source">来源：{{ newsData.source || '瑞安中学' }}</span>
          <span class="detail-views">浏览量：{{ newsData.views || 0 }}</span>
        </div>
      </div>
      
      <div class="detail-content" v-html="newsData.content || '加载中...'"></div>
      
      <div class="detail-attachments" v-if="newsData.attachments && newsData.attachments.length > 0">
        <h3>附件下载</h3>
        <ul>
          <li v-for="(attachment, index) in newsData.attachments" :key="index">
            <a :href="attachment.url" target="_blank">{{ attachment.name }}</a>
          </li>
        </ul>
      </div>
      
      <div class="detail-navigation">
        <div class="prev-news" v-if="prevNews">
          <router-link :to="getDetailPath(prevNews.id)">
            上一篇：{{ prevNews.title }}
          </router-link>
        </div>
        <div class="next-news" v-if="nextNews">
          <router-link :to="getDetailPath(nextNews.id)">
            下一篇：{{ nextNews.title }}
          </router-link>
        </div>
      </div>
      
      <div class="back-button">
        <router-link :to="getListPath()">返回列表</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const newsId = ref(route.params.id);
  const newsData = ref({});
  const prevNews = ref(null);
  const nextNews = ref(null);
  const loading = ref(true);
  
  // 根据当前路由获取详情页路径
  const getDetailPath = (id) => {
    // 从完整路径中移除最后的'/detail/数字'部分
    const currentPath = route.path;
    const basePath = currentPath.replace(/\/detail\/\d+$/, '');
    return `${basePath}/detail/${id}`;
  };
  
  // 获取返回列表的路径
  const getListPath = () => {
    const currentPath = route.path;
    console.log(currentPath,'currentPath');
    
    return currentPath.replace(/\/detail\/\d+$/, '');
  };
  
  const fetchNewsDetail = () => {
    // 模拟从API获取数据
    // 实际项目中替换为真实的API调用
    setTimeout(() => {
      // 示例数据
      newsData.value = {
        id: newsId.value,
        title: '瑞安中学举行2023年度教育教学成果展示会',
        date: '2023-12-15',
        source: '瑞安中学',
        views: 1256,
        content: `
          <p>12月15日，瑞安中学隆重举行2023年度教育教学成果展示会，全校师生共同参与了此次盛会。</p>
          <p>本次展示会旨在展现我校近一年来在教育教学方面取得的丰硕成果，分享优秀教学经验，促进教师专业成长和学生全面发展。</p>
          <p>展示会上，各学科教师代表分享了创新教学方法和案例，学生们则展示了丰富多彩的研究性学习成果和社团活动成就。</p>
          <p>校长在致辞中强调了学校坚持"以学生为中心"的教育理念，并对全体师生在过去一年中的辛勤付出表示感谢。</p>
          <p>此次活动不仅是对过去工作的总结，也为学校未来的教育教学工作指明了方向。</p>
        `,
        attachments: [
          { name: '活动照片集锦.zip', url: '#' },
          { name: '教育教学成果汇编.pdf', url: '#' }
        ]
      };
      
      // 更新页面标题
      updatePageTitle(newsData.value.title);
      
      prevNews.value = {
        id: parseInt(newsId.value) - 1,
        title: '瑞安中学2023年高考成绩喜报'
      };
      
      nextNews.value = {
        id: parseInt(newsId.value) + 1,
        title: '瑞安中学举办冬季校园文化艺术节'
      };
      
      loading.value = false;
    }, 500);
  };
  
  // 更新页面标题
  const updatePageTitle = (newsTitle) => {
    // 获取当前路由路径
    const currentPath = route.path;
    
    // 根据路径确定新闻类型
    let newsType = '新闻';
    if (currentPath.includes('/news/campus-news/')) {
      newsType = '校园新闻';
    } else if (currentPath.includes('/news/edu-news/')) {
      newsType = '媒体聚焦';
    } else if (currentPath.includes('/news/edu-info/')) {
      newsType = '校友讯息';
    }
    
    // 设置页面标题，格式：新闻标题 - 新闻类型 - 瑞安中学
    document.title = `${newsTitle} - ${newsType} - 瑞安中学`;
    
    // 更新路由的meta标题（如果需要对面包屑等组件可见）
    if (route.meta) {
      route.meta.dynamicTitle = newsTitle;
    }
  };
  
  // 监听路由参数变化，当用户点击上一篇/下一篇时重新获取数据
  watch(() => route.params.id, (newId) => {
    if (newId !== newsId.value) {
      newsId.value = newId;
      loading.value = true;
      fetchNewsDetail();
    }
  });
  
  // 组件挂载时获取数据
  onMounted(() => {
    fetchNewsDetail();
  });
  </script>
  
  <style scoped>
  .news-detail {
    padding: 20px 0;
  }
  
  .container {
    display: none; /* 隐藏容器元素，因为我们已经在父级布局中 */
  }
  
  .detail-header {
    margin-bottom: 30px;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 20px;
  }
  
  .detail-title {
    font-size: 24px;
    color: #333;
    margin-bottom: 15px;
    line-height: 1.4;
    font-weight: bold;
  }
  
  .detail-meta {
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
  }
  
  .detail-meta span {
    margin-right: 20px;
  }
  
  .detail-content {
    line-height: 1.8;
    color: #333;
    font-size: 16px;
  }
  
  .detail-content p {
    margin-bottom: 20px;
  }
  
  .detail-attachments {
    margin-top: 30px;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 4px;
  }
  
  .detail-attachments h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #333;
  }
  
  .detail-attachments ul {
    list-style: none;
    padding: 0;
  }
  
  .detail-attachments li {
    margin-bottom: 10px;
  }
  
  .detail-attachments a {
    color: #1890ff;
    text-decoration: none;
    display: inline-block;
    padding: 5px 0;
  }
  
  .detail-attachments a:hover {
    color: #40a9ff;
    text-decoration: underline;
  }
  
  .detail-navigation {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #eaeaea;
    padding-top: 20px;
  }
  
  .prev-news, .next-news {
    max-width: 45%;
  }
  
  .prev-news a, .next-news a {
    color: #666;
    text-decoration: none;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  
  .prev-news a:hover, .next-news a:hover {
    color: #1890ff;
  }
  
  @media (max-width: 768px) {
    .detail-title {
      font-size: 20px;
    }
    
    .detail-content {
      font-size: 15px;
    }
    
    .detail-navigation {
      flex-direction: column;
    }
    
    .prev-news, .next-news {
      max-width: 100%;
      margin-bottom: 10px;
    }
  }
  
  .back-button {
    margin-top: 40px;
    text-align: center;
  }
  
  .back-button a {
    color: #1890ff;
    text-decoration: none;
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid #1890ff;
    border-radius: 4px;
  }
  
  .back-button a:hover {
    background-color: #1890ff;
    color: #fff;
  }
  </style> 