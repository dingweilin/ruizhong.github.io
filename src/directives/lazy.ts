import type { Directive, DirectiveBinding } from 'vue';

interface LazyElement extends HTMLImageElement {
    _src?: string;
    _observer?: IntersectionObserver;
}

export const lazy:Directive={
    //保存原始src
    mounted(el:LazyElement,binding:DirectiveBinding){
        // 保存原始src到_src属性
        el._src = binding.value;//直接赋值

        //设置站位图片
        el.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjwvc3ZnPg==';
        //创建观察者
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    //元素进入可视区域，加载图片
                    if (el._src) { 
                        const img = new Image();
                        img.src = el._src;
                        img.onload = () =>{
                            el.src = el._src || '';
                        }
                        img.onerror = () => {
                            console.error('图片加载失败:', el._src);
                        }
                    }

                    //停止观察
                    observer.unobserve(el)
                }
            })
            
        })
       // 开始观察
        observer.observe(el)
        el._observer = observer
    },
    updated(el:LazyElement, binding:DirectiveBinding){
        // 更新src
        if (binding.value !== binding.oldValue) {
            el._src = binding.value;
            // 如果观察者已经停止，需要重新开始观察
            if (el._observer) {
                el._observer.observe(el);
            }
        }
    },
    
    unmounted(el: LazyElement) {
        // 清理观察者
        if (el._observer) {
            el._observer.disconnect();
        }
    }
}