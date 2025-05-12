<template>
    <div class="article-detail container">
     
      
      <!-- 文章内容 -->
      <div class="article-container">
        <h1 class="article-title">{{ article.title  }}</h1>
        <div class="article-meta">
          <span class="publish-date">发布时间：{{ article.date }}</span>
          <span class="article-source" v-if="article.source">来源：{{ article.source }}</span>
          <span class="view-count">浏览次数：{{ article.views || 0 }}</span>
        </div>
        
        <div class="article-content" v-html="article.content"></div>
        
        <!-- 附件区域 -->
        <div class="attachments" v-if="article.attachments && article.attachments.length > 0">
          <h3>附件：</h3>
          <ul class="attachment-list">
            <li v-for="(attachment, index) in article.attachments" :key="index" class="attachment-item">
              <i class="attachment-icon"></i>
              <a :href="attachment.url" target="_blank">{{ attachment.name }}</a>
              <span class="attachment-size">{{ attachment.size }}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- 相关推荐 -->
      <div class="related-articles" v-if="relatedArticles.length > 0">
        <h3>相关阅读</h3>
        <ul class="related-list">
          <li v-for="(item, index) in relatedArticles" :key="index" class="related-item" @click="viewRelated(item)">
            <span class="dot"></span>
            <span class="related-title">{{ item.title }}</span>
            <span class="related-date">{{ item.date }}</span>
          </li>
        </ul>
      </div>
      
      <!-- 翻页按钮 -->
      <div class="article-navigation">
        <div class="prev-article" v-if="prevArticle" @click="viewArticle(prevArticle)">
          <span class="nav-label">上一篇：</span>
          <span class="nav-title">{{ prevArticle.title }}</span>
        </div>
        <div class="next-article" v-if="nextArticle" @click="viewArticle(nextArticle)">
          <span class="nav-label">下一篇：</span>
          <span class="nav-title">{{ nextArticle.title }}</span>
        </div>
      </div>
      
      <!-- 返回按钮 -->
      <div class="action-buttons">
        <button class="back-btn" @click="goBack">返回列表</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  // 定义接口
  interface Attachment {
    name: string;
    url: string;
    size: string;
  }
  
  interface Article {
    id: number;
    title: string;
    date: string;
    source?: string;
    views?: number;
    content: string;
    attachments?: Attachment[];
  }
  
  interface RelatedArticle {
    id: number;
    title: string;
    date: string;
    type: string;
  }
  
  interface NavigationArticle {
    id: number;
    title: string;
    type: string;
  }
  
  const route = useRoute();
  const router = useRouter();
  const articleId = computed(() => Number(route.params.id));
  const articleType = computed(() => route.query.type as string || 'info');
  
  // 模拟文章数据
  const article = ref<Article>({
    id: 0,
    title: '',
    date: '',
    source: '瑞安中学',
    views: 0,
    content: '',
    attachments: []
  });
  
  // 相关文章
  const relatedArticles = ref<RelatedArticle[]>([]);
  const prevArticle = ref<NavigationArticle | null>(null);
  const nextArticle = ref<NavigationArticle | null>(null);
  
  // 根据文章类型获取分类名称
  const categoryName = computed(() => {
    switch (articleType.value) {
      case 'info':
        return '教研信息';
      case 'awards':
        return '教研获奖';
      case 'research':
        return '课题研究';
      case 'continuing':
        return '继续教育';
      case 'teaching-info':
        return '教务信息';
      default:
        return '教研信息';
    }
  });
  
  // 获取文章数据
  const fetchArticleData = () => {
    // 模拟API请求
    setTimeout(() => {
      // 这里是示例数据，实际应用中应该从API获取
      article.value = {
        id: articleId.value,
        title: getExampleTitle(articleId.value),
        date: '2023-10-15',
        source: '瑞安中学教务处',
        views: 156,
        content: `<p>尊敬的各位老师：</p>
        <p>为了进一步提高我校教育教学质量，促进教师专业发展，根据《瑞安中学教师继续教育实施方案》的相关规定，现将2023学年教师培训学分公示如下：</p>
        <h3>一、培训要求</h3>
        <p>1. 所有在职教师每学年必须完成不少于72学时的继续教育培训，其中教育教学能力提升培训不少于36学时。</p>
        <p>2. 培训内容包括：教育理论学习、学科专业知识更新、教育教学能力提升、信息技术应用能力提升等。</p>
        <h3>二、学分认定标准</h3>
        <p>1. 参加市级及以上教育行政部门组织的培训，按实际培训学时计算。</p>
        <p>2. 参加校本培训活动，按实际参与课时计算。</p>
        <p>3. 开展公开课、示范课、参与教研活动等，按相关标准折算学时。</p>
        <h3>三、公示内容</h3>
        <p>现将各位教师本学年度继续教育学时统计结果予以公示，详见附件。公示期为5个工作日，如有异议，请于公示期内向教务处反映。</p>
        <p>特此公示。</p>
        <p style="text-align: right;">瑞安中学教务处<br>2023年10月15日</p>`,
        attachments: [
          { name: '2023学年教师培训学分明细表.xlsx', url: '#', size: '156KB' },
          { name: '继续教育学分认定办法（修订版）.pdf', url: '#', size: '420KB' }
        ]
      };
      
      // 获取相关文章
      fetchRelatedArticles();
      
      // 获取前后文章
      fetchPrevNextArticles();
    }, 300);
  };
  
  // 获取示例文章标题
  const getExampleTitle = (id: number): string => {
    // 示例标题库
    const titles: Record<number, string> = {
      // 教研信息
      1: '2023学年其他类型转授学分公示',
      2: '2023学年第二学期校本培训学分公示',
      3: '2023学年第一学期校本培训学分公示',
      // 教研获奖
      101: '2023年教师教学能力大赛获奖名单公示',
      102: '2023年瑞安中学优秀教学成果奖获奖名单',
      103: '瑞安中学教师在省教学设计大赛中荣获佳绩',
      // 课题研究
      201: '2023年校级课题立项公示',
      202: '2023年市级课题中期检查评估结果公示',
      203: '我校"高中物理分层教学模式研究"课题顺利结题',
      // 继续教育
      301: '2023年教师继续教育学分公示',
      302: '关于组织教师参加2023年下半年远程培训的通知',
      303: '2023年教师继续教育学习系统使用指南',
      // 教务信息
      401: '2023-2024学年第二学期期末考试安排',
      402: '关于做好2024届高三二模考试工作的通知',
      403: '2023-2024学年第二学期期中考试安排'
    };
    
    return titles[id] || `文章标题 ${id}`;
  };
  
  // 获取相关文章
  const fetchRelatedArticles = () => {
    // 模拟API请求获取相关文章
    relatedArticles.value = [
      { id: 5, title: '2022年瑞安中学教师培训总结大会', date: '2022-12-20', type: articleType.value },
      { id: 6, title: '我校3名教师获评市级教学能手', date: '2022-11-15', type: articleType.value },
      { id: 7, title: '关于开展2023年度教师全员培训的通知', date: '2023-01-10', type: articleType.value }
    ];
  };
  
  // 获取前后文章
  const fetchPrevNextArticles = () => {
    // 模拟获取前后文章
    prevArticle.value = {
      id: articleId.value - 1,
      title: `${categoryName.value}上一篇文章示例`,
      type: articleType.value
    };
    
    nextArticle.value = {
      id: articleId.value + 1,
      title: `${categoryName.value}下一篇文章示例`,
      type: articleType.value
    };
  };
  
  // 返回列表页
  const goBack = () => {
    router.push('/education');
  };
  
  // 查看相关文章
  const viewRelated = (item: RelatedArticle) => {
    router.push({
      path: `/education/detail/${item.id}`,
      query: { type: item.type || articleType.value }
    });
  };
  
  // 查看前后文章
  const viewArticle = (item: NavigationArticle) => {
    router.push({
      path: `/education/detail/${item.id}`,
      query: { type: item.type || articleType.value }
    });
  };
  
  // 组件挂载时获取数据
  onMounted(() => {
    fetchArticleData();
  });
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
  
  .article-detail {
    padding: 30px 0;
    
    .breadcrumb {
      padding: 10px 0;
      margin-bottom: 20px;
      color: $light-text;
      font-size: 14px;
      
      a {
        color: $primary-color;
        text-decoration: none;
        cursor: pointer;
        
        &:hover {
          text-decoration: underline;
        }
      }
      
      span {
        color: $light-text;
      }
    }
    
    .article-container {
      background-color: #fff;
      padding: 30px;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      margin-bottom: 30px;
      
      .article-title {
        font-size: 24px;
        font-weight: 600;
        color: $text-color;
        margin: 0 0 20px 0;
        text-align: center;
      }
      
      .article-meta {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 1px dashed $border-color;
        font-size: 14px;
        color: $light-text;
      }
      
      .article-content {
        line-height: 1.8;
        color: $text-color;
        
        :deep(h3) {
          font-size: 18px;
          color: $text-color;
          margin: 25px 0 15px;
        }
        
        :deep(p) {
          margin: 0 0 15px 0;
        }
      }
      
      .attachments {
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px dashed $border-color;
        
        h3 {
          font-size: 16px;
          margin: 0 0 15px 0;
        }
        
        .attachment-list {
          padding: 0;
          
          .attachment-item {
            display: flex;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid $border-color;
            
            &:last-child {
              border-bottom: none;
            }
            
            .attachment-icon {
              width: 16px;
              height: 16px;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234682B4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'%3E%3C/path%3E%3Cpolyline points='14 2 14 8 20 8'%3E%3C/polyline%3E%3Cline x1='16' y1='13' x2='8' y2='13'%3E%3C/line%3E%3Cline x1='16' y1='17' x2='8' y2='17'%3E%3C/line%3E%3Cpolyline points='10 9 9 9 8 9'%3E%3C/polyline%3E%3C/svg%3E");
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              margin-right: 10px;
            }
            
            a {
              flex: 1;
              color: $primary-color;
              text-decoration: none;
              
              &:hover {
                text-decoration: underline;
              }
            }
            
            .attachment-size {
              color: $light-text;
              font-size: 12px;
              margin-left: 10px;
            }
          }
        }
      }
    }
    
    .related-articles {
      background-color: #fff;
      padding: 20px;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      margin-bottom: 30px;
      
      h3 {
        font-size: 18px;
        margin: 0 0 15px 0;
        padding-bottom: 10px;
        border-bottom: 1px solid $border-color;
      }
      
      .related-list {
        padding: 0;
        
        .related-item {
          display: flex;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px dashed $border-color;
          cursor: pointer;
          
          &:last-child {
            border-bottom: none;
          }
          
          &:hover .related-title {
            color: $primary-color;
          }
          
          .dot {
            width: 6px;
            height: 6px;
            background-color: $secondary-color;
            border-radius: 50%;
            margin-right: 10px;
            flex-shrink: 0;
          }
          
          .related-title {
            flex: 1;
            transition: color 0.2s;
          }
          
          .related-date {
            color: $light-text;
            font-size: 14px;
            margin-left: 10px;
          }
        }
      }
    }
    
    .article-navigation {
      margin-bottom: 30px;
      
      .prev-article, .next-article {
        padding: 15px;
        background-color: #fff;
        border-radius: 4px;
        margin-bottom: 10px;
        cursor: pointer;
        transition: background-color 0.2s;
        
        &:hover {
          background-color: $bg-light;
          
          .nav-title {
            color: $primary-color;
          }
        }
        
        .nav-label {
          color: $text-color;
          font-weight: 500;
        }
        
        .nav-title {
          transition: color 0.2s;
        }
      }
    }
    
    .action-buttons {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      
      .back-btn {
        padding: 10px 25px;
        background-color: $primary-color;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;
        
        &:hover {
          background-color: color.adjust($primary-color, $lightness: -10%);
        }
      }
    }
  }
  
  // 响应式调整
  @media (max-width: 768px) {
    .article-detail {
      .article-container {
        padding: 20px;
        
        .article-title {
          font-size: 20px;
        }
        
        .article-meta {
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
      }
    }
  }
  </style> 