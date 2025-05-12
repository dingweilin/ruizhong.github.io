import{_,c as a,b as n,e as l,t as i,F as y,d as I,m as p,v as d,x as r,y as v,h as o}from"./index-DrgEKWQT.js";const f={name:"CommonDetail",data(){return{contentId:null,contentType:null,detailData:{},prevItem:null,nextItem:null,loading:!0,backUrl:"/"}},computed:{getTypeLabel(){return{news:"新闻资讯",notice:"通知公告",education:"教育资讯",admission:"招生信息",training:"培训资讯",moral:"德育资讯"}[this.contentType]||"详情"}},created(){this.contentId=this.$route.params.id,this.contentType=this.$route.params.type,this.fetchDetailData(),this.setBackUrl()},methods:{setBackUrl(){const e={news:"/news/campus-news",notice:"/moral-space/notice",education:"/education/teaching-research",admission:"/admission/information",training:"/training/open-class",moral:"/moral-space/specialized-education"};this.backUrl=e[this.contentType]||"/"},fetchDetailData(){setTimeout(()=>{let e,s;switch(this.contentType){case"news":e="瑞安中学举行2023年度教育教学成果展示会",s=`
              <p>12月15日，瑞安中学隆重举行2023年度教育教学成果展示会，全校师生共同参与了此次盛会。</p>
              <p>本次展示会旨在展现我校近一年来在教育教学方面取得的丰硕成果，分享优秀教学经验，促进教师专业成长和学生全面发展。</p>
              <p>展示会上，各学科教师代表分享了创新教学方法和案例，学生们则展示了丰富多彩的研究性学习成果和社团活动成就。</p>
              <p>校长在致辞中强调了学校坚持"以学生为中心"的教育理念，并对全体师生在过去一年中的辛勤付出表示感谢。</p>
              <p>此次活动不仅是对过去工作的总结，也为学校未来的教育教学工作指明了方向。</p>
            `;break;case"notice":e="关于开展2023学年第二学期期末考试的通知",s=`
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
            `;break;case"education":e='瑞安中学教研组开展"双减"背景下的教学策略研讨',s=`
              <p>为深入落实"双减"政策，提高课堂教学质量，瑞安中学各教研组于上周开展了"双减背景下的教学策略研讨"活动。</p>
              <p>本次研讨活动以"提质增效，减负提质"为主题，各学科教研组分别就如何优化教学设计、提高课堂效率、科学布置作业等方面进行了深入探讨。</p>
              <p>语文教研组提出了"深度阅读"策略，数学教研组分享了"问题导学"方法，英语教研组展示了"任务型教学"模式。各学科结合自身特点，形成了一系列切实可行的教学改进措施。</p>
              <p>学校教务处表示，将继续支持各教研组开展类似活动，不断优化教学方法，真正实现减负提质的目标。</p>
            `;break;default:e=`${this.contentType}类型内容 #${this.contentId}`,s=`<p>这是${this.contentType}类型的详细内容，ID为${this.contentId}。</p>
                      <p>实际项目中，将根据内容类型和ID从服务器获取相应数据。</p>`}this.detailData={id:this.contentId,title:e,date:"2023-12-15",source:"瑞安中学",views:Math.floor(Math.random()*2e3)+100,content:s,attachments:[{name:"相关附件1.zip",url:"#"},{name:"相关附件2.pdf",url:"#"}]},this.prevItem={id:parseInt(this.contentId)-1,title:`上一篇${this.contentType}内容`},this.nextItem={id:parseInt(this.contentId)+1,title:`下一篇${this.contentType}内容`},this.loading=!1},500)}},watch:{"$route.params":{handler:function(e){(e.id!==this.contentId||e.type!==this.contentType)&&(this.contentId=e.id,this.contentType=e.type,this.loading=!0,this.fetchDetailData(),this.setBackUrl())},deep:!0}}},D={class:"common-detail"},T={class:"container"},k={class:"detail-header"},g={class:"detail-title"},b={class:"detail-meta"},x={class:"detail-date"},w={class:"detail-source"},L={class:"detail-views"},U={class:"detail-type"},B=["innerHTML"],M={key:0,class:"detail-attachments"},C=["href"],N={class:"detail-navigation"},V={key:0,class:"prev-item"},z={key:1,class:"next-item"},F={class:"back-button"};function H(e,s,E,S,t,m){const c=v("router-link");return o(),a("div",D,[n("div",T,[n("div",k,[n("h1",g,i(t.detailData.title||"详情内容"),1),n("div",b,[n("span",x,i(t.detailData.date||"2023-01-01"),1),n("span",w,"来源："+i(t.detailData.source||"瑞安中学"),1),n("span",L,"浏览量："+i(t.detailData.views||0),1),n("span",U,i(m.getTypeLabel),1)])]),n("div",{class:"detail-content",innerHTML:t.detailData.content||"加载中..."},null,8,B),t.detailData.attachments&&t.detailData.attachments.length>0?(o(),a("div",M,[s[0]||(s[0]=n("h3",null,"附件下载",-1)),n("ul",null,[(o(!0),a(y,null,I(t.detailData.attachments,(h,u)=>(o(),a("li",{key:u},[n("a",{href:h.url,target:"_blank"},i(h.name),9,C)]))),128))])])):l("",!0),n("div",N,[t.prevItem?(o(),a("div",V,[p(c,{to:`/detail/${t.contentType}/${t.prevItem.id}`},{default:d(()=>[r(" 上一篇："+i(t.prevItem.title),1)]),_:1},8,["to"])])):l("",!0),t.nextItem?(o(),a("div",z,[p(c,{to:`/detail/${t.contentType}/${t.nextItem.id}`},{default:d(()=>[r(" 下一篇："+i(t.nextItem.title),1)]),_:1},8,["to"])])):l("",!0)]),n("div",F,[p(c,{to:t.backUrl},{default:d(()=>s[1]||(s[1]=[r("返回列表")])),_:1},8,["to"])])])])}const q=_(f,[["render",H],["__scopeId","data-v-17b4ab51"]]);export{q as default};
