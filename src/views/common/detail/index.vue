<template>
  <div class="common-detail">
    <div class="container">
      <div class="detail-header">
        <h1 class="detail-title">{{ detailData.title || '详情内容' }}</h1>
        <div class="detail-meta">
          <span class="detail-date">{{ detailData.date || '2023-01-01' }}</span>
          <span class="detail-source">来源：{{ detailData.source || '瑞安中学' }}</span>
          <span class="detail-views">浏览量：{{ detailData.views || 0 }}</span>
          <span class="detail-type">{{ getTypeLabel }}</span>
        </div>
      </div>
      
      <div class="detail-content" v-html="detailData.content || '加载中...'"></div>
      
      <div class="detail-attachments" v-if="detailData.attachments && detailData.attachments.length > 0">
        <h3>附件下载</h3>
        <ul>
          <li v-for="(attachment, index) in detailData.attachments" :key="index">
            <a :href="attachment.url" target="_blank">{{ attachment.name }}</a>
          </li>
        </ul>
      </div>
      
      <div class="detail-navigation">
        <div class="prev-item" v-if="prevItem">
          <router-link :to="`/detail/${contentType}/${prevItem.id}`">
            上一篇：{{ prevItem.title }}
          </router-link>
        </div>
        <div class="next-item" v-if="nextItem">
          <router-link :to="`/detail/${contentType}/${nextItem.id}`">
            下一篇：{{ nextItem.title }}
          </router-link>
        </div>
      </div>
      
      <div class="back-button">
        <router-link :to="backUrl">返回列表</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonDetail',
  data() {
    return {
      contentId: null,
      contentType: null,
      detailData: {},
      prevItem: null,
      nextItem: null,
      loading: true,
      backUrl: '/'
    }
  },
  computed: {
    getTypeLabel() {
      const typeLabels = {
        'news': '新闻资讯',
        'notice': '通知公告',
        'education': '教育资讯',
        'admission': '招生信息',
        'training': '培训资讯',
        'moral': '德育资讯'
      };
      return typeLabels[this.contentType] || '详情';
    }
  },
  created() {
    // 获取路由参数
    this.contentId = this.$route.params.id;
    this.contentType = this.$route.params.type;
    this.fetchDetailData();
    this.setBackUrl();
  },
  methods: {
    setBackUrl() {
      // 根据内容类型设置返回链接
      const typeToUrlMap = {
        'news': '/news/campus-news',
        'notice': '/moral-space/notice',
        'education': '/education/teaching-research',
        'admission': '/admission/information',
        'training': '/training/open-class',
        'moral': '/moral-space/specialized-education'
      };
      this.backUrl = typeToUrlMap[this.contentType] || '/';
    },
    fetchDetailData() {
      // 模拟从API获取数据
      // 实际项目中替换为真实的API调用
      setTimeout(() => {
        // 示例数据 - 根据contentType定制内容
        let title, content;
        
        switch(this.contentType) {
          case 'news':
            title = '瑞安中学举行2023年度教育教学成果展示会';
            content = `
              <p>12月15日，瑞安中学隆重举行2023年度教育教学成果展示会，全校师生共同参与了此次盛会。</p>
              <p>本次展示会旨在展现我校近一年来在教育教学方面取得的丰硕成果，分享优秀教学经验，促进教师专业成长和学生全面发展。</p>
              <p>展示会上，各学科教师代表分享了创新教学方法和案例，学生们则展示了丰富多彩的研究性学习成果和社团活动成就。</p>
              <p>校长在致辞中强调了学校坚持"以学生为中心"的教育理念，并对全体师生在过去一年中的辛勤付出表示感谢。</p>
              <p>此次活动不仅是对过去工作的总结，也为学校未来的教育教学工作指明了方向。</p>
            `;
            break;
          case 'notice':
            title = '关于开展2023学年第二学期期末考试的通知';
            content = `
              <p>各年级、各班级：</p>
              <p>根据学校教学安排，2023学年第二学期期末考试将于2023年7月1日至7月3日进行。现将考试相关事项通知如下：</p>
              <p><strong>一、考试时间</strong></p>
              <p>7月1日：语文、英语</p>
              <p>7月2日：数学、物理/政治</p>
              <p>7月3日：化学/历史、生物/地理</p>
              <p><strong>二、考试要求</strong></p>
              <p>1. 学生须提前15分钟进入考场，考试铃响后不得入场。</p>
              <p>2. 严禁携带手机等电子设备进入考场。</p>
              <p>3. 考试期间应保持考场安静，严格遵守考场纪律。</p>
            `;
            break;
          case 'education':
            title = '瑞安中学教研组开展"双减"背景下的教学策略研讨';
            content = `
              <p>为深入落实"双减"政策，提高课堂教学质量，瑞安中学各教研组于上周开展了"双减背景下的教学策略研讨"活动。</p>
              <p>本次研讨活动以"提质增效，减负提质"为主题，各学科教研组分别就如何优化教学设计、提高课堂效率、科学布置作业等方面进行了深入探讨。</p>
              <p>语文教研组提出了"深度阅读"策略，数学教研组分享了"问题导学"方法，英语教研组展示了"任务型教学"模式。各学科结合自身特点，形成了一系列切实可行的教学改进措施。</p>
              <p>学校教务处表示，将继续支持各教研组开展类似活动，不断优化教学方法，真正实现减负提质的目标。</p>
            `;
            break;
          default:
            title = `${this.contentType}类型内容 #${this.contentId}`;
            content = `<p>这是${this.contentType}类型的详细内容，ID为${this.contentId}。</p>
                      <p>实际项目中，将根据内容类型和ID从服务器获取相应数据。</p>`;
        }
        
        this.detailData = {
          id: this.contentId,
          title: title,
          date: '2023-12-15',
          source: '瑞安中学',
          views: Math.floor(Math.random() * 2000) + 100,
          content: content,
          attachments: [
            { name: '相关附件1.zip', url: '#' },
            { name: '相关附件2.pdf', url: '#' }
          ]
        };
        
        this.prevItem = {
          id: parseInt(this.contentId) - 1,
          title: `上一篇${this.contentType}内容`
        };
        
        this.nextItem = {
          id: parseInt(this.contentId) + 1,
          title: `下一篇${this.contentType}内容`
        };
        
        this.loading = false;
      }, 500);
    }
  },
  // 监听路由参数变化，当用户点击上一篇/下一篇时重新获取数据
  watch: {
    '$route.params': {
      handler: function(newParams) {
        if (newParams.id !== this.contentId || newParams.type !== this.contentType) {
          this.contentId = newParams.id;
          this.contentType = newParams.type;
          this.loading = true;
          this.fetchDetailData();
          this.setBackUrl();
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.common-detail {
  padding: 30px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
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

.detail-type {
  background-color: #f0f8ff;
  padding: 2px 8px;
  border-radius: 4px;
  color: #1890ff;
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
  margin-bottom: 20px;
}

.prev-item, .next-item {
  max-width: 45%;
}

.prev-item a, .next-item a {
  color: #666;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.prev-item a:hover, .next-item a:hover {
  color: #1890ff;
}

.back-button {
  text-align: center;
  margin: 30px 0;
}

.back-button a {
  display: inline-block;
  padding: 8px 24px;
  background-color: #1890ff;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.back-button a:hover {
  background-color: #40a9ff;
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
  
  .prev-item, .next-item {
    max-width: 100%;
    margin-bottom: 10px;
  }
}
</style> 