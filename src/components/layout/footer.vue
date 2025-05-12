<template>
    <div class="site-footer">
        <div class="footer-container">
            <div class="left-img">
                <img src="../../assets/images/v2_stifhs.gif">
            </div>
            <div class="right-content">
                <div class="l">
                    <strong>学校咨询热线</strong>
                    <span>校办：88751622</span>
                    <span>教务处：88773576 88773575</span>
                    <span>文化活动中心：88775266</span>
                    <span>校警室：88773581</span>
                    <span>毕业年段办公室：88752923</span>
                    <span>基础年段办公室：88753913</span>
                    <span class="address">学校地址：浙江省温州市黄龙住宅区盛锦路2号     邮编：325007</span>
                </div>
                <div class="r">
                    <strong>关于我们</strong>
                    <p>
                        <span>浙江省瑞安中学</span> @2024
                        <br>
                        <span>技术支持：温州宇恒</span>
                        <br>
                        <span>浙ICP备19005308号-1</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped lang="scss">
.site-footer {
    height: 226px;
    background-color: #f5f5f5;
    font-size: 14px;
    @media (max-width: 626px) {
        height: auto;
            }
    .footer-container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        // align-items: center;
        height: 100%;
        @media (max-width: 626px) {
            width: 100%;
        display: flex;
        flex-direction: column;
        /* margin: 0.26667rem auto; */
        align-items: center;
            }
        .left-img {
            display: flex;
            align-items: center;
            margin-right: 100px;
            @media (max-width: 626px) {
                margin:10px 0 
            }
            img {
                width: 500px;
                height: 130px;
                @media (max-width: 626px) {
                    width: 540px;
            }
            }
        }

        .right-content {
            display: flex;
            align-items: center;
            font-size: 12px;
            line-height: 24px;
            @media (max-width: 626px) {
                margin:10px 0 10px 60px
            }
           .l{
            float: left;
            width: 400px;
            height: 124px;
            strong{
                width: 390px;
                color: #254E7A;
                font-size: 28px;
                margin-bottom: 10px;
                float: left;
                // margin-bottom: 4px;
            }
            span{
                float: left;
                width: 190px;
            }
            .address{
                width: 360px;
            }
           }
           .r{
            float: right;
            width: 215px;
            height: 124px;
            strong{
                color: #254E7A;
                font-size: 28px;
                margin-bottom: 10px;
                float:left ;
                width: 390px;

            }

           }
        }
        span{
            font-size: 12px;
            color: #666666;
        }
    }
}
</style>