import Sidebar from "../../components/common/sidebar";
import BannerCarousel from "../../components/common/BannerCarousel/index";
import { lazy } from "react";
import BotSwiper from "../../components/common/bot-swiper";
const Home = () => {
  const imgList = [
    { image: 'src/pages/home/images/v2_rfywdq.jpg', caption: '赵乐际分别会见印度尼西亚总统普拉博沃1' },
    { image: "src/pages/home/images/v2_rfywgj.jpg", caption: '赵乐际分别会见印度尼西亚总统普拉博沃2' },
    { image: 'src/pages/home/images/v2_st0362.jpg', caption: '赵乐际分别会见印度尼西亚总统普拉博沃3' },

  ]
  const btnList = [
    { label: '瑞中新闻', value: 'news' },
    { label: "媒体聚焦", value: 'media' },
    { label: '校友讯息', value: 'century' },
  ]
  const newsList = [
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
  ]
  const rightNewsList = [
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
    { title: '赵乐际分别会见印度尼西亚总统普拉博沃11111111', time: '10/04' },
  ]
  const slides3 = [
    { image: 'src/pages/home/images/8.jpg', caption: '校园文化', eng: "CAMPUS CULTURE" },
    { image: "src/pages/home/images/wDxFn_dBEC0.jpg", caption: '杏坛群英', eng: "OUTSTANDING ALUMNI" },
    { image: 'src/pages/home/images/v2_st1v58.jpg', caption: '校长信箱', eng: "PRINCIPAL MAILBOX" },
  ]

  const list = [
    { title: '工作计划不会写？这个超赞工具送给你送给你送给你送给你送给你', time: '10/04' },
    { title: '工作计划不会写？这个超赞工具送给你送给你送给你送给你送给你', time: '10/04' },
    { title: '工作计划不会写？这个超赞工具送给你送给你送给你送给你送给你', time: '10/04' },
    { title: '工作计划不会写？这个超赞工具送给你送给你送给你送给你送给你', time: '10/04' },
    { title: '工作计划不会写？这个超赞工具送给你送给你送给你送给你送给你', time: '10/04' },
  ]
  const image = "src/pages/home/images/v2_st1xmc.jpg"
  const leftImg = "src/pages/home/images/v2_st39fz.png"
  const rightImg = "src/pages/home/images/v2_st0362.jpg"
  const botImg = "src/pages/home/images/v2_st39ht.jpg"
  const list2 = [
    { title: '探索了5种改善移动用户体验的绝佳做法，绝佳做法', time: '10/04' },
    { title: '探索了5种改善移动用户体验的绝佳做法，绝佳做法', time: '10/04' },
    { title: '探索了5种改善移动用户体验的绝佳做法，绝佳做法', time: '10/04' },
    { title: '探索了5种改善移动用户体验的绝佳做法，绝佳做法', time: '10/04' },
    { title: '探索了5种改善移动用户体验的绝佳做法，绝佳做法', time: '10/04' },
    { title: '探索了5种改善移动用户体验的绝佳做法，绝佳做法', time: '10/04' },
    { title: '探索了5种改善移动用户体验的绝佳做法，绝佳做法', time: '10/04' },
    { title: '探索了5种改善移动用户体验的绝佳做法，绝佳做法', time: '10/04' },
  ]
  const columnList = [
    { image: 'src/pages/home/images/pt.png', caption: '省师训平台' },
    { image: 'src/pages/home/images/pt.png', caption: '温州云阅卷' },
    { image: 'src/pages/home/images/pt.png', caption: '智慧教育平台' },
    { image: 'src/pages/home/images/pt.png', caption: '正确云备课' },
    { image: 'src/pages/home/images/pt.png', caption: '橡皮网题库' },
    { image: 'src/pages/home/images/pt.png', caption: '教育智学网' },
    { image: 'src/pages/home/images/pt.png', caption: '校本资源库' },
    { image: 'src/pages/home/images/pt.png', caption: '瑞中校友会' },
    { image: 'src/pages/home/images/pt.png', caption: '优秀传统文化' },
  ]
  return (
    <div className="home-container w-full">
      {/* 新闻列表 */}
      <div className="module_one w-full h-auto mb-[20px]">
        <div className="news-notice w-[1210px] mx-auto flex flex-row justify-between">
          <div className="news pr-[20px] float-left w-[790px] border-[1px] border-[#d1c9c9] bg-[#fff] p-[20px]" >
            <Sidebar showMore={false} title="新闻资讯" />
            <div className="news-swiper-list flex justify-between mt-[20px] ">
              <div className="left-swiper float-left max-w-[380px] h-[288px] mr-[20px]">
                <BannerCarousel images={imgList} />
              </div>
              <div className="right-news w-[360px] float-right">
                <div className="news-btn flex flex-direct-row border-[1px] border-[#254E7A] rounded-[5px] text-[16px] text-[#254E7A] 
                font-['SourceHanSerif'] leading-[20px] not-italic tracking-[0px]">
                  {
                    btnList.map((item, index) => {
                      // 这里可以添加其他逻辑
                      return <div className={`flex-1 py-[10px] px-0 text-center text-[#254E7A] cursor-pointer
                        ${index === 1 ? 'border-l-[1px] border-r-[1px] border-[#254E7A]' : ''}
                        hover:bg-[#254E7A] hover:text-white
                      `}
                        key={index}
                      >
                        {item.label}
                      </div>
                    })
                  }

                </div>
                <div className="news-list text-[14px] leading-[30px] mt-[10px] cursor-pointer">
                  {
                    newsList.map((item, index) => {
                      return <div key={index} className="news-list-item flex justify-between items-center hover:text-[#254E7A]">
                        <div className="news-list-item-title float-left w-[270px] overflow-hidden text-ellipsis whitespace-nowrap">{item.title}</div>
                        <div className="news-list-item-time float-right text-[#999999] shrink-0">{item.time}</div>
                      </div>
                    })
                  }

                </div>
              </div>
            </div>

          </div>
          <div className="notice p-[20px] float-right w-[390px] border-[1px] border-[#d1c9c9]">
            <Sidebar showMore={true} title="通知公告" />
            <div className="news-list text-[14px] leading-[30px] mt-[10px] cursor-pointer">
              {
                rightNewsList.map((item, index) => {
                  return <div key={index} className="news-list-item flex justify-between items-center hover:text-[#254E7A]">
                    <div className="news-list-item-title float-left w-[270px] overflow-hidden text-ellipsis whitespace-nowrap">{item.title}</div>
                    <div className="news-list-item-time float-right text-[#999999] shrink-0">{item.time}</div>
                  </div>
                })
              }

            </div>
          </div>
        </div>
      </div>
      {/* 校园文化 */}
      <div className="image-list flex flex-row justify-between w-[1210px] h-auto mx-auto">
        {
          slides3.map((item, index) => {
            return (
              <div key={index} className="image-list-item w-[390px] h-[91px] relative">
                <div style={{ backgroundColor: 'rgba(245, 245, 245, .2)' }} className="absolute block  w-full h-full top-0 " />
                <img src={item.image} className="w-full h-full object-cover rounded-[5px]" />
                <div className="image-list-item-caption absolute top-[50%] translate-x-[50px] translate-y-[-50%]">
                  <div className="caption text-[#fff] text-[24px] font-bold leading-[35px] tracking-[8px] font-['SourceHanSerif'] ">{item.caption}</div>
                  <div className="eng text-[18px] text-[#fff] font-normal leading-[25px] tracking-[2px] font-['Roboto']">{item.eng}</div>
                </div>
              </div>
            )
          })
        }

      </div>
      {/* 学校章程 */}
      <div className="school-rules-party w-full h-auto mx-auto">
        <div className="rules-list w-[1210px] mx-auto flex justify-between mt-[20px]">
          <div className="rules w-[590px] h-[178px] bg-[#CBE3EF] flex">
            <div className="title w-[64px] h-[177px] font-['SourceHanSansSC'] text-[24px] font-bold not-italic justify-center items-end text-right
            shadow-none writing-[horizontal-tb] text-[#0D0D0D] bg-[#254e7a] leading-[35px] tracking-[20px]  p-0 no-underline flex flex-col 
            rounded-tl-[5px] rounded-bl-[5px] relative">
              <div className="absolute block w-0 h-0 border-t-[15px] border-t-transparent 
              border-l-[15px]  border-l-[#254e7a] border-r-0 border-b-[15px] border-b-transparent top-[50%] right-[-15px] translate-y-[-50%] z-10 " />
              <span className="text-[#ffffff] text-[24px] font-bold leading-[35px] tracking-[18px] font-['SourceHanSerif'] relative">学校章程</span>
            </div>
            <div className="school-rules-party-news-list w-full p-[20px] text-[14px] leading-[30px] text-[#101010] cursor-pointer">
              {
                list.map((item, index) => {
                  return (
                    <div key={index} className="news-list-item flex justify-between items-center hover:text-[#254E7A]">
                      <div className="news-list-item-title float-left w-[270px] overflow-hidden text-ellipsis whitespace-nowrap">{item.title}</div>
                      <div className="news-list-item-time float-right text-[#999999] shrink-0">{item.time}</div>
                    </div>
                  )
                })
              }

            </div>
          </div>
          <div className="rules w-[590px] h-[178px] bg-[#CBE3EF] flex">
            <div className="title w-[64px] h-[177px] font-['SourceHanSansSC'] text-[24px] font-bold not-italic justify-center items-end text-right
            shadow-none writing-[horizontal-tb] text-[#0D0D0D] bg-[#254e7a] leading-[35px] tracking-[20px]  p-0 no-underline flex flex-col 
            rounded-tl-[5px] rounded-bl-[5px] relative">
              <div className="absolute block w-0 h-0 border-t-[15px] border-t-transparent 
              border-l-[15px]  border-l-[#254e7a] border-r-0 border-b-[15px] border-b-transparent top-[50%] right-[-15px] translate-y-[-50%] z-10 " />
              <span className="text-[#ffffff] text-[24px] font-bold leading-[35px] tracking-[18px] font-['SourceHanSerif'] relative">瑞中党建</span>
            </div>
            <div className="school-rules-party-news-list w-full p-[20px] text-[14px] leading-[30px] text-[#101010] cursor-pointer">
              {
                list.map((item, index) => {
                  return (
                    <div key={index} className="news-list-item flex justify-between items-center hover:text-[#254E7A]">
                      <div className="news-list-item-title float-left w-[270px] overflow-hidden text-ellipsis whitespace-nowrap">{item.title}</div>
                      <div className="news-list-item-time float-right text-[#999999] shrink-0">{item.time}</div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>

      </div>
      {/* 教学教研 */}
      <div className="home-education-list">
        <div className="list w-[1210px] h-auto mx-auto mt-[20px] flex flex-wrap">
          <div className="left list-card border-[1px] border-[#d1c9c9] rounded-[3px] p-[15px] w-[calc(33%-11px)] ">
            <Sidebar showMore={true} title={"教学教研"} />
            <div className="img-news my-[20px] flex gap-[10px]">
              <img src={image} className="w-[169px] h-[100px]" />
              <div>
                <div className="img-news-right w-[158px]">
                  <div className="top text-[16px] font-bold leading-[23px] text-[#A88365] font-['思源宋体'] w-[158px] overflow-hidden
                   text-ellipsis whitespace-nowrap">2022年其他类型类型类型</div>
                  <div className="bot text-[14px] text-[#333333] leading-[20px] content-center w-[169px] h-[60px] text-left tracking-[2px] mt-[10px] line-clamp-3">温州二高作为温州校园微电影文化的起源地，已经走过了10个春10个春1已经走过了10个春10个春</div>
                </div>
              </div>
            </div>
            <div className="dashed-line border-b border-dashed border-b-[#d1c9c9] mb-[20px]"></div>
            <div className="news-list text-[14px] leading-[30px] mt-[10px] cursor-pointer">
              {
                list2.map((item, index) => {
                  return (
                    <div key={index} className="news-list-item flex justify-between items-center hover:text-[#254E7A]">
                      <div className="news-list-item-title float-left w-[270px] overflow-hidden text-ellipsis whitespace-nowrap">{item.title}</div>
                      <div className="news-list-item-time float-right text-[#999999] shrink-0">{item.time}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="center p-[15px] border-[1px] border-[#d1c9c9] ml-[22px] mr-[22px] rounded-[3px] list- w-[calc(33%-11px)]">
            <Sidebar showMore={true} title={"德育时空"} />
            <div className="img-news my-[20px] flex gap-[10px]">
              <img src={image} className="w-[169px] h-[100px]" />
              <div>
                <div className="img-news-right w-[158px]">
                  <div className="top text-[16px] font-bold leading-[23px] text-[#A88365] font-['思源宋体'] w-[158px] overflow-hidden
                   text-ellipsis whitespace-nowrap">2022年其他类型类型类型</div>
                  <div className="bot text-[14px] text-[#333333] leading-[20px] content-center w-[169px] h-[60px] text-left tracking-[2px] mt-[10px] line-clamp-3">温州二高作为温州校园微电影文化的起源地，已经走过了10个春10个春1已经走过了10个春10个春</div>
                </div>
              </div>
            </div>
            <div className="dashed-line border-b border-dashed border-b-[#d1c9c9] mb-[20px]"></div>
            <div className="news-list text-[14px] leading-[30px] mt-[10px] cursor-pointer">
              {
                list2.map((item, index) => {
                  return (
                    <div key={index} className="news-list-item flex justify-between items-center hover:text-[#254E7A]">
                      <div className="news-list-item-title float-left w-[270px] overflow-hidden text-ellipsis whitespace-nowrap">{item.title}</div>
                      <div className="news-list-item-time float-right text-[#999999] shrink-0">{item.time}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="right list-card w-[calc(33%-11px)]">
            <div className="top border-[1px] border-solid border-[#d1c9c9] rounded-[3px] p-[15px] h-[215px]">
              <Sidebar showMore={false} title={"快速通道"} />
              <div className="column w-full my-[20px]">
                <ul className="flex flex-wrap m-0 p-0 list-none bg-[#CBE3EF] text-[#333333] text-[12px]">
                  {
                    columnList.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center w-[calc(33.33%-20px)] m-[10px] box-border">
                          <img src={item.image} className="w-[18px] h-[18px] mr-[5px]" />
                          <a href="javascript:;" className="news-btn-item text-[#333333] w-full flex">{item.caption}</a>
                        </li>
                      )
                    })
                  }

                </ul>
              </div>
            </div>
            <div className="bot my-[20px] h-[100px]">
              <div className="img-list flex gap-[10px]">
                <div className="img-list-item w-[50%] h-[100px] relative">
                  <img src={leftImg} className="w-full h-full rounded-[5px]" />
                  <div className="img-list-item-title-left absolute w-[156px] top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] 
                  text-[24px] font-bold
                  leading-[20px] tracking-[2px] ">智慧教育平台</div>
                </div>
                <div className="img-list-item w-[50%] h-[100px] relative">
                  <img src={rightImg} className="w-full h-full rounded-[5px]" />
                  <div className="img-list-item-title-right absolute w-[170px] top-[70%] left-[50%] translate-x-[-44%] translate-y-[-50%] text-[#fff] 
                  text-[14px] font-bold
                  leading-[23px] tracking-[1px]">浙江省瑞安中学招生网</div>
                </div>
              </div>
              <div className="bot-img my-[20px] w-full h-[120px] relative">
                <div className="block absolute w-full h-full top-0 left-0  rounded-[5px] bg-[#00000033]" />
                <img src={botImg} className="w-full h-full rounded-[5px]" />
                <div className="bot-img-title w-[316px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex gap-[10px] text-[36px]
                 font-['FZHanZhenGuangBiao'] text-[#ffffff] leading-[50px] tracking-[2px] z-999">
                  <div>百年瑞中</div>
                  <div>专题网站</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 视觉瑞中轮播图 */}
      <div className="bot-swiper">
        <div className="swiper-container w-[1210px]  mx-auto  mt-[20px]
         h-[254px] border-[1px] border-solid border-[#e5e5e5] p-[20px]">
            <Sidebar showMore={false} title={"视觉瑞中"} />
          <BotSwiper />
        </div>
      </div>
    </div>

  )
}

export default Home;