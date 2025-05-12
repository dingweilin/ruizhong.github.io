import { createWebHistory, createRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'
/* Layout */
import MainLayout from '@/layout/MainLayout.vue';

// 将公共详情页路由移到主路由层级，而不是放在某个子模块下
export const routes: RouteRecordRaw[] = [
{
    path: '',
    component: MainLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/home.vue'),
        meta: { title: '首页', hideInMenu: false }
      },
      {
        path: '/century',
        name: 'Century',
        redirect: '/century/overview',
        meta: { title: '百年瑞中', hideInMenu: false },
        children:[
          {
            path: '/century/overview',
            name: 'Overview',
            component:() => import('@/views/century/overview/index.vue'),
            meta: { title: '学校概况', hideInMenu: false }
          },
          {
            path: '/century/logo',
            name: 'Logo',
            component:() => import('@/views/century/logo/index.vue'),
            meta: { title: '学校标识', hideInMenu: false }
          },
          {
            path: '/century/song',
            name: 'Song',
            component:() => import('@/views/century/song/index.vue'),
            meta: { title: '学校校歌', hideInMenu: false }
          },
          {
            path: '/century/vi',
            name: 'Vi',
            component:() => import('@/views/century/vi/index.vue'),
            meta: { title: '学校VI', hideInMenu: false }
          },
          {
            path: '/century/history',
            name: 'History',
            component:() => import('@/views/century/history/index.vue'),
            meta: { title: '历史改革', hideInMenu: false }
          },
          {
            path: '/century/founder',
            name: 'founder',
            component:() => import('@/views/century/founder/index.vue'),
            meta: { title: '校创始人' , hideInMenu: false}
          },
          {
            path: '/century/principal',
            name: 'principal',
           component:() => import('@/views/century/principal/index.vue'),
            meta: { title: '历任校长', hideInMenu: false }
          },
          {
            path: '/century/heroes',
            name: "heroes",
           component:() => import('@/views/century/heroes/index.vue'),
            meta: { title: '杏坛群英', hideInMenu: false }
          },
          {
            path: '/century/fruitful',
            name: 'fruitful',
           component:() => import('@/views/century/fruitful/index.vue'),
            meta: { title: '硕果累累' , hideInMenu: false}
          },
          {
            path: '/century/exchange',
            name: 'exchange',
           component:() => import('@/views/century/exchange/index.vue'),
            meta: { title: '交流合作', hideInMenu: false }
          },
        ]
      },
      {
        path: '/visual',
        name: 'Visual',
        redirect: '/visual/emblem',
        meta: { title: '视觉瑞中', hideInMenu: false },
        children:[
          {
            path: '/visual/emblem',
            name: 'emblem',
           component:  () => import('@/views/visual/emblem/index.vue'),
            meta: { title: '历史寻踪', hideInMenu: false }
          },
          {
            path: '/visual/flag',
            name: 'flag',
           component:  () => import('@/views/visual/flag/index.vue'),
            meta: { title: '校园风景', hideInMenu: false }
          },
          {
            path: '/visual/motto',
            name: 'motto',
           component:  () => import('@/views/visual/motto/index.vue'),
            meta: { title: '教学设施' , hideInMenu: false}
          },
          {
            path: '/visual/anthem',
            name: 'anthem',
           component:  () => import('@/views/visual/anthem/index.vue'),
            meta: { title: '专题图片' , hideInMenu: false}
          },
          {
            path: '/visual/second',
            name: 'Second ',
           component:  () => import('@/views/visual/second/index.vue'),
            meta: { title: '二高视频' , hideInMenu: false}
          },
        
        ]
      },
      {
        path: '/news',
        name: 'News',
        redirect: '/news/campus-news',
        meta: { title: '新闻咨询', hideInMenu: false },
        children:[
          {
            path: '/news/campus-news',
            name: 'campusNews',
            component:  () => import('@/views/news/campus-news/index.vue'),
            meta: { title: '校园新闻', hideInMenu: false }
          },
          {
            path: '/news/campus-news/detail/:id',
            name: 'campusNewsDetail',
            component: () => import('@/views/news/detail/index.vue'),
            meta: { title: '校园新闻', hideInMenu: true }
          },
          {
            path: '/news/edu-news',
            name: 'eduNews',
            component:  () => import('@/views/news/edu-news/index.vue'),
            meta: { title: '媒体聚焦', hideInMenu: false }
          },
          {
            path: '/news/edu-news/detail/:id',
            name: 'eduNewsDetail',
            component: () => import('@/views/news/detail/index.vue'),
            meta: { title: '媒体聚焦', hideInMenu: true }
          },
          {
            path: '/news/edu-info',
            name: 'eduInfo',
            component:  () => import('@/views/news/edu-info/index.vue'),
            meta: { title: '校友讯息', hideInMenu: false }
          },
          {
            path: '/news/edu-info/detail/:id',
            name: 'eduInfoDetail',
            component: () => import('@/views/news/detail/index.vue'),
            meta: { title: '校友讯息', hideInMenu: true }
          },
        ]
      },
      {
        path: '/education',
        name: 'Education',
        redirect: '/education/teaching-research',
        meta: { title: '教学教研' , hideInMenu: false},
        children:[
          {
            path:'/education/teaching-research',
            name: 'teachingResearch',
           component:  () => import('@/views/education/teaching-research/index.vue'),
            meta: { title: '教研信息' , hideInMenu: false}
          },
          {
            path: '/education/faculty',
            name: 'Faculty',
           component:  () => import('@/views/education/faculty/index.vue'),
            meta: { title: '教研获奖' , hideInMenu: false}
          },
          {
            path: '/education/achievements',
            name: 'Achievements',
           component:  () => import('@/views/education/achievements/index.vue'),
            meta: { title: '课题研究' , hideInMenu: false}
          },
          {
            path: '/education/continuing-education',
            name: 'continuing-education',
           component:  () => import('@/views/education/continuing-education/index.vue'),
            meta: { title: '继续教育' , hideInMenu: false}
          },
          {
            path: '/education/academic-information',
            name: 'academic-information',
           component:  () => import('@/views/education/academic-information/index.vue'),
            meta: { title: '教务信息' , hideInMenu: false}
          },
        ]
      },
      {
        path: '/courses',
        name: 'Courses',
        redirect: '/courses/premium',
        meta: { title: '课程建设' , hideInMenu: false},
        children:[
          {
            path: '/courses/premium',
            name: 'premium',
           component:  () => import('@/views/courses/premium/index.vue'),
            meta: { title: '精品课程', hideInMenu: false }
          },
          {
            path: '/courses/school-based',
            name: 'school-based',
           component:  () => import('@/views/courses/school-based/index.vue'),
            meta: { title: '校本课程', hideInMenu: false }
          },
          {
            path: '/courses/structure',
            name: 'structure',
           component:  () => import('@/views/courses/structure/index.vue'),
            meta: { title: '课程结构', hideInMenu: false }
          },
          {
            path: '/courses/elective',
            name: 'elective',
           component:  () => import('@/views/courses/elective/index.vue'),
            meta: { title: '选修课程', hideInMenu: false }
          },
          {
            path: '/courses/theoretical',
            name: 'theoretical',
           component:  () => import('@/views/courses/theoretical/index.vue'),
            meta: { title: '理论学习', hideInMenu: false }
          },
        ]
      },
      {
        path: '/training',
        name: 'Training',
        redirect: '/training/open-class',
        meta: { title: '校本培训', hideInMenu: false },
        children:[
          {
            path: '/training/open-class',
            name: 'open-class',
           component:  () => import('@/views/training/open-class/index.vue'),
            meta: { title: '公开课信息', hideInMenu: false }
          },
          {
            path: '/training/management-innovation',
            name: 'management-innovation',
           component:  () => import('@/views/training/management-innovation/index.vue'),
            meta: { title: '管理与创新' , hideInMenu: false}
          },
          {
            path: '/training/school-activities',
            name: 'school-activities',
           component:  () => import('@/views/training/school-activities/index.vue'),
            meta: { title: '校本培训活动', hideInMenu: false }
          },
          {
            path: '/training/teaching-research',
            name: 'teaching-research',
           component:  () => import('@/views/training/teaching-research/index.vue'),
            meta: { title: '教研（备课）组活动' , hideInMenu: false}
          },
          {
            path: '/training/research-activities',
            name: 'research-activities',
           component:  () => import('@/views/training/research-activities/index.vue'),
            meta: { title: '多外教研活动', hideInMenu: false }
          },
          {
            path: '/training/project-management',
            name: 'project-management',
           component:  () => import('@/views/training/project-management/index.vue'),
            meta: { title: '项目管理', hideInMenu: false }
          },
          {
            path: '/training/demonstration',
            name: 'demonstration',
           component:  () => import('@/views/training/demonstration/index.vue'),
            meta: { title: '研训示范' , hideInMenu: false}
          },
        ]
      },
      {
        path: '/moral-space',
        name: 'MoralSpace',
        redirect: '/moral-space/notice',
        meta: { title: '德育时空' , hideInMenu: false},
        children:[
          {
            path: '/moral-space/notice',
            name: 'Notice',
           component:  () => import('@/views/moral-space/notice/index.vue'),
            meta: { title: '通知公告', hideInMenu: false }
          },
          {
            path: '/moral-space/anti-cult',
            name: 'anti-cult',
           component:  () => import('@/views/moral-space/anti-cult/index.vue'),
            meta: { title: '反邪教', hideInMenu: false }
          },
          {
            path: '/moral-space/campus',
            name: 'campus',
           component:  () => import('@/views/moral-space/campus/index.vue'),
            meta: { title: '校园文化', hideInMenu: false }
          },
          {
            path: '/moral-space/club',
            name: 'club',
           component:  () => import('@/views/moral-space/club/index.vue'),
            meta: { title: '社团文化', hideInMenu: false }
          },
          {
            path: '/moral-space/class',
            name: 'class',
           component:  () => import('@/views/moral-space/class/index.vue'),
            meta: { title: '班级文化', hideInMenu: false }
          },
          {
            path: '/moral-space/teacher-work',
            name: 'teacher-work',
           component:  () => import('@/views/moral-space/teacher-work/index.vue'),
            meta: { title: '班主任工作' , hideInMenu: false}
          },
          {
            path: '/moral-space/committee',
            name: 'committee',
           component:  () => import('@/views/moral-space/committee/index.vue'),
            meta: { title: '团委学生会' , hideInMenu: false}
          },
          {
            path: '/moral-space/party-school',
            name: 'party-school',
           component:  () => import('@/views/moral-space/party-school/index.vue'),
            meta: { title: '学生党校', hideInMenu: false }
          },
          {
            path: '/moral-space/specialized-education',
            name: 'specialized-education',
           component:  () => import('@/views/moral-space/specialized-education/index.vue'),
            meta: { title: '专题教育', hideInMenu: false }
          },
          {
            path: '/moral-space/life-services',
            name: 'life-services',
           component:  () => import('@/views/moral-space/life-services/index.vue'),
            meta: { title: '生活服务', hideInMenu: false }
          },
          {
            path: '/moral-space/home-school-contact',
            name: 'home-school-contact',
           component:  () => import('@/views/moral-space/home-school-contact/index.vue'),
            meta: { title: '家校联系' , hideInMenu: false}
          },
        ]
      },
      {
        path: '/admission',
        name: 'Admission',
        redirect: '/admission/information',
        meta: { title: '招生升学' , hideInMenu: false},
        children:[
          {
            path: '/admission/information',
            name: 'information',
           component:  () => import('@/views/admission/information/index.vue'),
            meta: { title: '招生信息' , hideInMenu: false}
          },
          {
            path: '/admission/admission',
            name: 'Information',
           component:  () => import('@/views/admission/admission/index.vue'),
            meta: { title: '升学信息' , hideInMenu: false}
          },
          
        ]
      },
      {
        path: '/building',
        name: 'Building',
        redirect: '/building/curriculum',
        meta: { title: '瑞中党建', hideInMenu: false },
        children:[
          {
            path: '/building/curriculum',
            name: 'curriculum',
           component:  () => import('@/views/building/curriculum/index.vue'),
            meta: { title: '党建动态', hideInMenu: false }
          },
          {
            path: '/building/faculty',
            name: 'faculty',
           component:  () => import('@/views/building/faculty/index.vue'),
            meta: { title: '党员风采' , hideInMenu: false}
          },
          {
            path: '/building/achievements',
            name: 'achievements',
           component:  () => import('@/views/building/achievements/index.vue'),
            meta: { title: '业余党校', hideInMenu: false }
          },
          {
            path: '/building/document',
            name: 'document',
           component:  () => import('@/views/building/document/index.vue'),
            meta: { title: '政策文件', hideInMenu: false }
          },
          {
            path: '/building/knowledge',
            name: 'knowledge',
           component:  () => import('@/views/building/knowledge/index.vue'),
            meta: { title: '党建知识', hideInMenu: false }
          },
          {
            path: '/building/learning',
            name: 'learning',
           component:  () => import('@/views/building/learning/index.vue'),
            meta: { title: '理论学习', hideInMenu: false }
          },
          {
            path: '/building/organization',
            name: 'organization',
           component:  () => import('@/views/building/organization/index.vue'),
            meta: { title: '组织机构' , hideInMenu: false}
          },
          {
            path: '/building/family',
            name: 'family',
           component:  () => import('@/views/building/family/index.vue'),
            meta: { title: '教工之家' , hideInMenu: false}
          },
          {
            path: '/building/line',
            name: 'line',
           component:  () => import('@/views/building/line/index.vue'),
            meta: { title: '群众路线', hideInMenu: false }
          },
          {
            path: '/building/studies',
            name: 'studies',
           component:  () => import('@/views/building/studies/index.vue'),
            meta: { title: '两学一做', hideInMenu: false }
          },
        ]
      },
      {
        path: '/service',
        name: 'Service',
        redirect: '/service/pages',
        meta: { title: '校园服务' , hideInMenu: false},
        children:[
          {
            path: '/service/pages',
            name: 'Pages',
           component:  () => import('@/views/service/pages/index.vue'),
            meta: { title: '二高黄页', hideInMenu: false }
          },
          {
            path: '/service/calendar',
            name: 'Calendar',
           component:  () => import('@/views/service/calendar/index.vue'),
            meta: { title: '二高校历', hideInMenu: false }
          },
           {
            path: '/service/map',
            name: 'Map',
           component:  () => import('@/views/service/map/index.vue'),
            meta: { title: '校园地图' , hideInMenu: false}
          },
          {
            path: '/service/transportation',
            name: 'Transportation',
           component:  () => import('@/views/service/transportation/index.vue'),
            meta: { title: '二高交通', hideInMenu: false }
          },
          {
            path: '/service/time',
            name: 'Time',
           component:  () => import('@/views/service/time/index.vue'),
            meta: { title: '作息时间', hideInMenu: false }
          },
          {
            path: '/service/health',
            name: 'Health',
           component:  () => import('@/views/service/health/index.vue'),
            meta: { title: '卫生保健' , hideInMenu: false}
          },
          {
            path: '/service/center',
            name: 'Center',
           component:  () => import('@/views/service/center/index.vue'),
            meta: { title: '校园卡中心', hideInMenu: false }
          },
          
          
        ]
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/common/NotFound.vue'),
        meta: { title: '页面未找到', hideInMenu: true }
      },
      {
        path: '/detail/:id',
        name: 'CommonDetail',
        component: () => import('@/views/common/detail/index.vue'),
        meta: { title: '详情页', hideInMenu: true }
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/common/NotFound.vue'),
        meta: { title: '页面未找到', hideInMenu: true }
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 添加路由前置守卫设置页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `瑞中官网 - ${to.meta.title}`;
  }
  next();
});

export default router;