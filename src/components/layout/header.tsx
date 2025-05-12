import { Menu } from 'antd';
import routes from '../../router';
import {useLocation, useNavigate } from 'react-router-dom';
import { routeMetadata, setDocumentTitle } from '../../router';// 从路由表生成菜单项的函数
import { useEffect } from 'react';
import  "./header.scss"
interface MenuItem {
  key: string;
  label: string;
  children?: MenuItem[]; // 修改为可选属性
}
const generateMenuItems = () => {
  const menuItems: MenuItem[] = [];
  const mainRoutes = routes[0]?.children || [];

  mainRoutes.forEach(route => {
    if (!route.path || route.path === '*' || route.path.includes('detail') || 
        routeMetadata[`/${route.path}`]?.hideInMenu) {
      return;
    }
    const routePath = `/${route.path}`;
    const menuItem: MenuItem = {
      key: routePath,
      label: routeMetadata[routePath]?.title || route.path,
    };

    // 处理子路由
    if (route.children) {
      const children = route.children
        .filter(child => {
          const childPath = `${routePath}/${child.path}`;
          return child.path && !child.path.includes('detail') && 
                 !routeMetadata[childPath]?.hideInMenu;
        })
        .map(child => {
          const childPath = `${routePath}/${child.path}`;
          return {
            key: childPath,
            label: routeMetadata[childPath]?.title || child.path || '未命名',
          };
        });

      if (children.length > 0) {
        menuItem.children = children;
      }
    }

    menuItems.push(menuItem);
  });

  return menuItems;
};
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const menuItems = generateMenuItems();

  // 设置页面标题
  useEffect(() => {
    setDocumentTitle(location.pathname);
  }, [location.pathname]);
  
  // 处理菜单点击
  const handleMenuClick = ({ key }: { key: string }) => {
    console.log('Menu clicked with key:', key);
    console.log('Current location:', location.pathname);
    
    navigate(key);
    
    // 添加延迟检查，看看导航后路径是否改变
    setTimeout(() => {
      console.log('After navigation, location:', window.location.pathname);
    }, 100);
  };
  
  // 获取当前选中的菜单项
  const getSelectedKeys = () => {
    const { pathname } = location;
    return [pathname];
  };
  return (
    <header className="w-full bg-[#4682B4] h-[60px] relative z-1000 " style={{color: "#fff !important"}}>
      <div className='h-full w-full flex justify-center items-center mx-auto '>
        <Menu
          mode="horizontal"
          selectedKeys={getSelectedKeys()}
          onClick={handleMenuClick}
          items={menuItems}
          className='main-menu custom-menu'
          style={{color: "#fff !important"}}
        />
      </div>
    </header>
  )
}

export default Header