import React, { useEffect, useMemo, useRef, useState } from "react";

interface SidebarProps {
    showMore: boolean;
    title: string;
}
const Sidebar: React.FC<SidebarProps> = ({ showMore, title }) => {
    const activeTab = useRef<HTMLDivElement>(null);
    const [tabWidth, setTabWidth] = useState(0);

    const updateTabWidth = () => {
        if (activeTab.current) {
            setTabWidth(activeTab.current.offsetWidth);
        }
    };

    // 计算activeBar的样式
    const activeBarStyle = useMemo(() => {
        if (tabWidth === 0) return { width: '0px' };
        return {
            width: `${tabWidth}px`,
            transform: 'translateX(0px)'
        };
    }, [tabWidth]);


    // 防抖函数
    const debounce = (fn: Function, delay: number) => {
        let timer: NodeJS.Timeout | null = null;
        return function () {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                fn();
            }, delay);
        };
    };

    // 窗口大小变化处理函数
    const handleResize = () => {
        // 使用setTimeout模拟Vue的nextTick
        setTimeout(() => {
            updateTabWidth();
        }, 0);
    };

    // 创建防抖版本的resize处理函数
    const debouncedResize = React.useCallback(
        debounce(handleResize, 100),
        []
    );

    useEffect(() => {
        // 初始更新宽度
        updateTabWidth();

        // 添加resize事件监听
        window.addEventListener('resize', debouncedResize);

        // 在字体加载完成后可能需要再次更新
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => {
                updateTabWidth();
            });
        }

        // 清理事件监听
        return () => {
            window.removeEventListener('resize', debouncedResize);
        };
    }, [debouncedResize]);

    return (
        <div className="sidebar flex items-center justify-between">
            <div className="el-tabs__nav-wrap overflow-hidden mb-[-1px] relative flex-1">
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#e4e7ed]"/>
                <div className="el-tabs__nav-scroll overflow-hidden">
                    <div className="el-tabs__nav flex whitespace-nowrap relative float-left z-2">
                        <div ref={activeTab} className="el-tabs__item is-active mr-[10px] h-[40px] box-border flex items-center justify-center
                        list-none text-[24px] leading-[16px] font-semibold relative cursor-pointer  text-[#254E7A]">{title}</div>
                        <div className="el-tabs__active-bar absolute bottom-0 left-0 h-[2px] bg-[#254E7A] z-[1] list-none 
                        " style={activeBarStyle}></div>
                    </div>
                    {
                        showMore && (
                            <div className="text-right px-[5px]  text-[18px] text-[#AA8B70] cursor-pointer "> 浏览更多{'>>>'}</div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Sidebar;