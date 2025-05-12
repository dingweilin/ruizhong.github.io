import { Navigate, RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from '@/layout/MainLayout';

// 使用React的lazy进行代码分割
const lazyLoad = (Component: React.LazyExoticComponent<any>) => (
  <Suspense fallback={<div>加载中...</div>}>
    <Component />
  </Suspense>
);

// 懒加载组件
const Home = lazy(() => import('@/pages/home/index.tsx'));
const NotFound = lazy(() => import('@/pages/common/NotFound.tsx'));
const CommonDetail = lazy(() => import('@/pages/common/detail/index.tsx'));

// 百年瑞中
const Overview = lazy(() => import('@/pages/century/overview/index.tsx'));
const Logo = lazy(() => import('@/pages/century/logo/index.tsx'));
const Song = lazy(() => import('@/pages/century/song/index.tsx'));
const Vi = lazy(() => import('@/pages/century/vi/index.tsx'));
const History = lazy(() => import('@/pages/century/history/index.tsx'));
const Founder = lazy(() => import('@/pages/century/founder/index.tsx'));
const Principal = lazy(() => import('@/pages/century/principal/index.tsx'));
const Heroes = lazy(() => import('@/pages/century/heroes/index.tsx'));
const Fruitful = lazy(() => import('@/pages/century/fruitful/index.tsx'));
const Exchange = lazy(() => import('@/pages/century/exchange/index.tsx'));

// 视觉瑞中
const Emblem = lazy(() => import('@/pages/visual/emblem/index.tsx'));
const Flag = lazy(() => import('@/pages/visual/flag/index.tsx'));
const Motto = lazy(() => import('@/pages/visual/motto/index.tsx'));
const Anthem = lazy(() => import('@/pages/visual/anthem/index.tsx'));
const Second = lazy(() => import('@/pages/visual/second/index.tsx'));

// 新闻咨询
const CampusNews = lazy(() => import('@/pages/news/campus-news/index.tsx'));
const EduNews = lazy(() => import('@/pages/news/edu-news/index.tsx'));
const EduInfo = lazy(() => import('@/pages/news/edu-info/index.tsx'));
const NewsDetail = lazy(() => import('@/pages/news/detail/index.tsx'));

//教学教研
const TeachingResearch = lazy(() => import('@/pages/education/teaching-research/index.tsx'));
const Faculty = lazy(() => import('@/pages/education/faculty/index.tsx'));
const Achievements = lazy(() => import('@/pages/education/achievements/index.tsx'));
const ContinuingEducation = lazy(() => import('@/pages/education/continuing-education/index.tsx'));
const AcademicInformation = lazy(() => import('@/pages/education/academic-information/index.tsx'));

//课程建设
const Premium = lazy(() => import('@/pages/courses/premium/index.tsx'));
const SchoolBased = lazy(() => import('@/pages/courses/school-based/index.tsx'));
const Structure = lazy(() => import('@/pages/courses/structure/index.tsx'));
const Elective = lazy(() => import('@/pages/courses/elective/index.tsx'));
const Theoretical = lazy(() => import('@/pages/courses/theoretical/index.tsx'));
//校本培训
const OpenClass = lazy(() => import('@/pages/training/open-class/index.tsx'));
const ManagementInnovation = lazy(() => import('@/pages/training/management-innovation/index.tsx'));
const SchoolActivities = lazy(() => import('@/pages/training/school-activities/index.tsx'));
const Teaching = lazy(() => import('@/pages/training/teaching-research/index.tsx'));
const ResearchActivities = lazy(() => import('@/pages/training/research-activities/index.tsx'));
const ProjectManagement = lazy(() => import('@/pages/training/project-management/index.tsx'));
const Demonstration = lazy(() => import('@/pages/training/demonstration/index.tsx'));
//德育时空
const Notice = lazy(() => import('@/pages/moral-space/notice/index.tsx'));
const AntiCult = lazy(() => import('@/pages/moral-space/anti-cult/index.tsx'));
const Campus = lazy(() => import('@/pages/moral-space/campus/index.tsx'));
const Club = lazy(() => import('@/pages/moral-space/club/index.tsx'));
const Class = lazy(() => import('@/pages/moral-space/class/index.tsx'));
const TeacherWork = lazy(() => import('@/pages/moral-space/teacher-work/index.tsx'));
const Committee = lazy(() => import('@/pages/moral-space/committee/index.tsx'));
const PartySchool = lazy(() => import('@/pages/moral-space/party-school/index.tsx'));
const SpecializedEducation = lazy(() => import('@/pages/moral-space/specialized-education/index.tsx'));
const LifeServices = lazy(() => import('@/pages/moral-space/life-services/index.tsx'));
const HomeSchoolContact = lazy(() => import('@/pages/moral-space/home-school-contact/index.tsx'));
//招生升学
const Information = lazy(() => import('@/pages/admission/information/index.tsx'));
const Admission = lazy(() => import('@/pages/admission/admission/index.tsx'));
//瑞中党建
const Curriculum = lazy(() => import('@/pages/building/curriculum/index.tsx'));
const buildingFaculty = lazy(() => import('@/pages/building/faculty/index.tsx'));
const Achievement = lazy(() => import('@/pages/building/achievements/index.tsx'));
const document = lazy(() => import('@/pages/building/document/index.tsx'));
const Knowledge = lazy(() => import('@/pages/building/knowledge/index.tsx'));
const Learning = lazy(() => import('@/pages/building/learning/index.tsx'));
const Organization = lazy(() => import('@/pages/building/organization/index.tsx'));
const Family = lazy(() => import('@/pages/building/family/index.tsx'));
const Line = lazy(() => import('@/pages/building/line/index.tsx'));
const Studies = lazy(() => import('@/pages/building/studies/index.tsx'));
//校园服务
const Pages = lazy(() => import('@/pages/service/pages/index.tsx'));
const Calendar = lazy(() => import('@/pages/service/calendar/index.tsx'));
const Map = lazy(() => import('@/pages/service/map/index.tsx'));
const Transportation = lazy(() => import('@/pages/service/transportation/index.tsx'));
const Time = lazy(() => import('@/pages/service/time/index.tsx'));
const Health = lazy(() => import('@/pages/service/health/index.tsx'));
const Center = lazy(() => import('@/pages/service/center/index.tsx'));


// 路由表配置
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: lazyLoad(Home),
      },
      {
        path: 'century',
        children: [
          {
            path: '',
            element: <Navigate to="/century/overview" replace />
          },
          {
            path: 'overview',
            element: lazyLoad(Overview),
          },
          {
            path: 'logo',
            element: lazyLoad(Logo),
          },
          {
            path: 'song',
            element: lazyLoad(Song),
          },
          {
            path: 'vi',
            element: lazyLoad(Vi),
          },
          {
            path: 'history',
            element: lazyLoad(History),
          },
          {
            path: 'founder',
            element: lazyLoad(Founder),
          },
          {
            path: 'principal',
            element: lazyLoad(Principal),
          },
          {
            path: 'heroes',
            element: lazyLoad(Heroes),
          },
          {
            path: 'fruitful',
            element: lazyLoad(Fruitful),
          },
          {
            path: 'exchange',
            element: lazyLoad(Exchange),
          },
        ]
      },
      {
        path: 'visual',
        children: [
          {
            path: '',
            element: <Navigate to="/visual/emblem" replace />
          },
          {
            path: 'emblem',
            element: lazyLoad(Emblem),
          },
          {
            path: 'flag',
            element: lazyLoad(Flag),
          },
          {
            path: 'motto',
            element: lazyLoad(Motto),
          },
          {
            path: 'anthem',
            element: lazyLoad(Anthem),
          },
          {
            path: 'second',
            element: lazyLoad(Second),
          },
        ]
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            element: <Navigate to="/news/campus-news" replace />
          },
          {
            path: 'campus-news',
            element: lazyLoad(CampusNews),
          },
          {
            path: 'campus-news/detail/:id',
            element: lazyLoad(NewsDetail),
          },
          {
            path: 'edu-news',
            element: lazyLoad(EduNews),
          },
          {
            path: 'edu-news/detail/:id',
            element: lazyLoad(NewsDetail),
          },
          {
            path: 'edu-info',
            element: lazyLoad(EduInfo),
          },
          {
            path: 'edu-info/detail/:id',
            element: lazyLoad(NewsDetail),
          },
        ]
      },
      // 其他模块的路由可以按照同样的方式添加...
      {
        path: 'education',
        children: [
          {
            path: '',
            element: <Navigate to="/education/teaching-research" replace />
          },
          {
            path: 'teaching-research',
            element: lazyLoad(TeachingResearch),
          },

          {
            path: 'faculty',
            element: lazyLoad(Faculty),
          },
          {
            path: 'achievements',
            element: lazyLoad(Achievements),
          },
          {
            path: 'continuing-education',
            element: lazyLoad(ContinuingEducation),
          },
          {
            path: 'academic-information',
            element: lazyLoad(AcademicInformation),
          },

        ]
      },
      //课程建设
      {
        path: 'courses',
        children: [
          {
            path: '',
            element: <Navigate to="/courses/premium" replace />
          },
          {
            path: 'premium',
            element: lazyLoad(Premium),
          },

          {
            path: 'school-based',
            element: lazyLoad(SchoolBased),
          },
          {
            path: 'structure',
            element: lazyLoad(Structure),
          },
          {
            path: 'elective',
            element: lazyLoad(Elective),
          },
          {
            path: 'theoretical',
            element: lazyLoad(Theoretical),
          },

        ]
      },
      // 校本培训
      {
        path: 'training',
        children: [
          {
            path: '',
            element: <Navigate to="/training/open-class" replace />
          },
          {
            path: 'open-class',
            element: lazyLoad(OpenClass),
          },

          {
            path: 'management-innovation',
            element: lazyLoad(ManagementInnovation),
          },
          {
            path: 'school-activities',
            element: lazyLoad(SchoolActivities),
          },
          {
            path: 'teaching-research',
            element: lazyLoad(Teaching),
          },
          {
            path: 'research-activities',
            element: lazyLoad(ResearchActivities),
          },
          {
            path: 'project-management',
            element: lazyLoad(ProjectManagement),
          },
          {
            path: 'demonstration',
            element: lazyLoad(Demonstration),
          },

        ]
      },
      // 德育时空
      {
        path: 'moral-space',
        children: [
          {
            path: '',
            element: <Navigate to="/moral-space/notice" replace />
          },
          {
            path: 'notice',
            element: lazyLoad(Notice),
          },
          {
            path: 'anti-cult',
            element: lazyLoad(AntiCult),
          },

          {
            path: 'campus',
            element: lazyLoad(Campus),
          },
          {
            path: 'club',
            element: lazyLoad(Club),
          },
          {
            path: 'class',
            element: lazyLoad(Class),
          },
          {
            path: 'teacher-work',
            element: lazyLoad(TeacherWork),
          },
          {
            path: 'committee',
            element: lazyLoad(Committee),
          },
          {
            path: 'party-school',
            element: lazyLoad(PartySchool),
          },
          {
            path: 'specialized-education',
            element: lazyLoad(SpecializedEducation),
          },
          {
            path: 'life-services',
            element: lazyLoad(LifeServices),
          },
          {
            path: 'home-school-contact',
            element: lazyLoad(HomeSchoolContact),
          },

        ]
      },
      //招生升学
      {
        path: 'admission',
        children: [
          {
            path: '',
            element: <Navigate to="/admission/information" replace />
          },
          {
            path: 'information',
            element: lazyLoad(Information),
          },

          {
            path: 'admission',
            element: lazyLoad(Admission),
          },
    

        ]
      },
      //瑞中党建
      {
        path: 'building',
        children: [
          {
            path: '',
            element: <Navigate to="/building/curriculum" replace />
          },
          {
            path: 'curriculum',
            element: lazyLoad(Curriculum),
          },

          {
            path: 'faculty',
            element: lazyLoad(buildingFaculty),
          },
          {
            path: 'achievements',
            element: lazyLoad(Achievement),
          },
          {
            path: 'document',
            element: lazyLoad(ContinuingEducation),
          },
          {
            path: 'knowledge',
            element: lazyLoad(Knowledge),
          },
          {
            path: 'learning',
            element: lazyLoad(Learning),
          },
          {
            path: 'organization',
            element: lazyLoad(Organization),
          },
          {
            path: 'family',
            element: lazyLoad(Family),
          },
          {
            path: 'line',
            element: lazyLoad(Line),
          },
          {
            path: 'studies',
            element: lazyLoad(Studies),
          },
    

        ]
      },
      //校园服务
      {
        path: 'service',
        children: [
          {
            path: '',
            element: <Navigate to="/service/pages" replace />
          },
          {
            path: 'pages',
            element: lazyLoad(Pages),
          },

          {
            path: 'calendar',
            element: lazyLoad(Calendar),
          },
          {
            path: 'map',
            element: lazyLoad(Map),
          },
          {
            path: 'transportation',
            element: lazyLoad(Transportation),
          },
          {
            path: 'time',
            element: lazyLoad(Time),
          },
          {
            path: 'health',
            element: lazyLoad(Health),
          },
          {
            path: 'center',
            element: lazyLoad(Center),
          },

        ]
      },
      // 通用路由
      {
        path: 'detail/:id',
        element: lazyLoad(CommonDetail),
      },
      {
        path: '*',
        element: lazyLoad(NotFound),
      },
    ]
  },
];

// 路由元数据，用于菜单生成和页面标题
export const routeMetadata: Record<string, { title: string, hideInMenu: boolean }> = {
  '/home': { title: '首页', hideInMenu: false },
  '/century': { title: '百年瑞中', hideInMenu: false },
  '/century/overview': { title: '学校概况', hideInMenu: false },
  '/century/logo': { title: '学校标识', hideInMenu: false },
  '/century/song': { title: '学校校歌', hideInMenu: false },
  '/century/vi': { title: '学校VI', hideInMenu: false },
  '/century/history': { title: '历史改革', hideInMenu: false },
  '/century/founder': { title: '校创始人', hideInMenu: false },
  '/century/principal': { title: '历任校长', hideInMenu: false },
  '/century/heroes': { title: '杏坛群英', hideInMenu: false },
  '/century/fruitful': { title: '硕果累累', hideInMenu: false },
  '/century/exchange': { title: '交流合作', hideInMenu: false },
  '/visual': { title: '视觉瑞中', hideInMenu: false },
  '/visual/emblem': { title: '历史寻踪', hideInMenu: false },
  '/visual/flag': { title: '校园风景', hideInMenu: false },
  '/visual/motto': { title: '教学设施', hideInMenu: false },
  '/visual/anthem': { title: '专题图片', hideInMenu: false },
  '/visual/second': { title: '二高视频', hideInMenu: false },
  '/news': { title: '新闻咨询', hideInMenu: false },
  '/news/campus-news': { title: '校园新闻', hideInMenu: false },
  '/news/campus-news/detail/:id': { title: '校园新闻', hideInMenu: true },
  '/news/edu-news': { title: '媒体聚焦', hideInMenu: false },
  '/news/edu-news/detail/:id': { title: '媒体聚焦', hideInMenu: true },
  '/news/edu-info': { title: '校友讯息', hideInMenu: false },
  '/news/edu-info/detail/:id': { title: '校友讯息', hideInMenu: true },
  // 其他路由元数据...
  '/education': { title: '教学教研', hideInMenu: false },
  '/education/teaching-research': { title: '教研信息', hideInMenu: false },
  '/education/faculty': { title: '教研获奖', hideInMenu: false },
  '/education/achievements': { title: '课题研究', hideInMenu: false },
  '/education/continuing-education': { title: '继续教育', hideInMenu: false },
  '/education/academic-information': { title: '教务信息', hideInMenu: false },
  //课程建设
  '/courses': { title: '课程建设', hideInMenu: false },
  '/courses/premium': { title: '精品课程', hideInMenu: false },
  '/courses/school-based': { title: '校本课程', hideInMenu: false },
  '/courses/structure': { title: '课程结构', hideInMenu: false },
  '/courses/elective': { title: '选修课程', hideInMenu: false },
  '/courses/theoretical': { title: '理论学习', hideInMenu: false },
  //校本培训
  '/training': { title: '校本培训', hideInMenu: false },
  '/training/open-class': { title: '公开课信息', hideInMenu: false },
  '/training/management-innovation': { title: '管理创新', hideInMenu: false },
  '/training/school-activities': { title: '校本培训活动', hideInMenu: false },
  '/training/teaching-research': { title: '教研（备课）组活动', hideInMenu: false },
  '/training/research-activities': { title: '多外教研活动', hideInMenu: false },
  '/training/project-management': { title: '项目管理', hideInMenu: false },
  '/training/demonstration': { title: '研训示范', hideInMenu: false },
  //德育时空
  '/moral-space': { title: '德育时空', hideInMenu: false },
  '/moral-space/notice': { title: '通知公告', hideInMenu: false },
  '/moral-space/anti-cult': { title: '反邪教', hideInMenu: false },
  '/moral-space/campus': { title: '校园文化', hideInMenu: false },
  '/moral-space/club': { title: '社团文化', hideInMenu: false },
  '/moral-space/class': { title: '班级文化', hideInMenu: false },
  '/moral-space/teacher-work': { title: '班主任工作', hideInMenu: false },
  '/moral-space/committee': { title: '团委学生会', hideInMenu: false },
  '/moral-space/party-school': { title: '学生党校', hideInMenu: false },
  '/moral-space/specialized-education': { title: '专题教育', hideInMenu: false },
  '/moral-space/life-services': { title: '生活服务', hideInMenu: false },
  '/moral-space/home-school-contact': { title: '家校联系', hideInMenu: false },

  //招生升学
  '/admission': { title: '招生升学', hideInMenu: false },
  '/admission/admission': { title: '招生信息', hideInMenu: false },
  '/admission/information': { title: '升学信息', hideInMenu: false },
  //瑞中党建
  '/building': { title: '瑞中党建', hideInMenu: false },
  '/building/curriculum': { title: '党建动态', hideInMenu: false },
  '/building/faculty': { title: '党员风采', hideInMenu: false },
  '/building/achievements': { title: '业余党校', hideInMenu: false },
  '/building/document': { title: '政策文件', hideInMenu: false },
  '/building/knowledge': { title: '党建知识', hideInMenu: false },
  '/building/learning': { title: '理论学习', hideInMenu: false },
  '/building/organization': { title: '组织机构', hideInMenu: false },
  '/building/family': { title: '教工之家', hideInMenu: false },
  '/building/line': { title: '群众路线', hideInMenu: false },
  '/building/studies': { title: '两学一做', hideInMenu: false },
  //校园服务
  '/service': { title: '校园服务', hideInMenu: false },
  '/service/pages': { title: '二高黄页', hideInMenu: false },
  '/service/calendar': { title: '二高校历', hideInMenu: false },
  '/service/map': { title: '校园地图', hideInMenu: false },
  '/service/transportation': { title: '二高交通', hideInMenu: false },
  '/service/time': { title: '作息时间', hideInMenu: false },
  '/service/health': { title: '卫生保健', hideInMenu: false },
  '/service/center': { title: '校园卡中心', hideInMenu: false },



  //瑞中党建
};

// 设置页面标题的函数
export const setDocumentTitle = (pathname: string) => {
  const route = Object.keys(routeMetadata).find(path => {
    // 处理动态路由
    if (path.includes(':id')) {
      const regex = new RegExp(path.replace(':id', '[^/]+'));
      return regex.test(pathname);
    }
    return pathname === path;
  });

  if (route && routeMetadata[route].title) {
    document.title = `瑞中官网 - ${routeMetadata[route].title}`;
  } else {
    document.title = '瑞中官网';
  }
};

export default routes;