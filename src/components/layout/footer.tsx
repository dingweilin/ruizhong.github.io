const Footer = () => {
    const image = "src/assets/images/v2_stifhs.gif"
    return (
        <div className="site-footer h-[226px] bg-[#f5f5f5] text-[14px]">
            <div className="footer-container w-[1210px] mx-auto  h-auto  flex flex-row items-center">
                <div className="left-img flex-1 ">
                    <img src={image} alt="stifhs" className="w-[500px] " />
                </div>
                <div className="right-content flex-1 flex justify-center">
                    <div className="l flex-1">
                        <div className="text-[#254E7A] text-[28px] font-bold mt-[10px]">学校咨询热线</div>
                        <div className="flex flex-row  items-center">
                            <div>校办：88751622</div>
                            <div>教务处：88773576 88773575</div>
                        </div>
                        <div className="flex flex-row  items-center">
                            <div>文化活动中心：88775266</div>
                            <div>校警室：88773581</div>
                        </div>
                        <div className="flex flex-row  items-center">
                            <div>毕业年段办公室：88752923</div>
                            <div>基础年段办公室：88753913</div>
                        </div>

                        <div className="address">学校地址：浙江省温州市黄龙住宅区盛锦路2号     邮编：325007</div>
                    </div>
                    <div className="r ">
                        <div className="text-[#254E7A] text-[28px] font-bold mt-[10px]">关于我们</div>
                        <div>浙江省瑞安中学</div>
                        <div>技术支持：温州宇恒</div>
                        <div>浙ICP备19005308号-1</div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;