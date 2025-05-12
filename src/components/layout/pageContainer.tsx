import React from 'react';
import './pageContainer.scss'; // 假设我们将样式移到单独的SCSS文件中

interface PageContainerProps {
  showSidebar?: boolean;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ 
  showSidebar = true, 
  children, 
  sidebar 
}) => {
  return (
    <div className={`page-container ${showSidebar ? 'with-sidebar' : ''}`}>
      {showSidebar && (
        <div className="sidebar-container">
          {sidebar}
        </div>
      )}
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;