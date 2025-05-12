import React from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from "@/components/Layout/Header"
import LogoSearch from "@/components/Layout/logoSearch"
import Swiper from '@/components/common/swiper';
import PageContainer from '../components/Layout/pageContainer';
import Breadcrumb from '@/components/common/breadcrumb';
import SideNavigation from '@/components/Layout/SideNavigation';
import Footer from '../components/Layout/footer';
const MainLayout: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  return (
    <div className='min-h-[100vh] overflow-hidden'>
      {/* 固定头部区域 不随路由变化 */}
      <div className='sticky top-0 z-1000 bg-white w-full'>
        <LogoSearch />
        <Header />
      </div>
      {/* 轮播组件 随路由变化 */}
      {isHomePage && (<Swiper />)}
      {/* 主题内容 随路由变化 */}
      <main className='flex-1 p-[15px] pb-[30px] relative'>
      <PageContainer 
          showSidebar={!isHomePage}
          sidebar={!isHomePage ? (
            <SideNavigation />
          ) : undefined}
        >
          <div>
            {!isHomePage && (
             <div>
                <Breadcrumb />
             </div>
            )}
          </div>
           {/* 内容区域 - 包含router-view */}
           <div className='router-view-container bg-[#fff] rounded-[4px] flex-1'>
              <Outlet />
           </div>
        </PageContainer>
      </main>
            <Footer />
    </div>

  );
};

export default MainLayout;