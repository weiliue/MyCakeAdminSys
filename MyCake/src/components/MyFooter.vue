<template>
    <div class="foot">
        <!-- <img class="footer-logo" :src="logo" alt=""> -->
        <div class="footer-nav">
            <a href="#">联系我们</a>
            <span>|</span>
            <a href="#">订购帮助</a>
            <span>|</span>
            <a href="#">企业合作</a>
            <span>|</span>
            <a href="#">生产经营资质</a>
            <span>|</span>
            <a href="#">公告专区</a>
        </div>
        <div class="footer-icon">
            <a href="#">
                <div class="weibo-icon">
                    <img src="//static.21cake.com/themes/site/img/footericon-01.png" alt="">
                </div>
            </a>
            <a href="#">
                <div class="weixi-icon">
                    <img src="//static.21cake.com/themes/site/img/footericon-02.png" alt="">
                </div>
            </a>
            <a href="#">
                <div class="app-icon">APP</div>
            </a>
        </div>
        <div class="footer-text">
            <span>订购专线：400 820 2222（服务时间 08:00–22:00），企业团购热线：021-37788946</span>
            <span>客服电话：021-2388732（全国），kefu@163.com（邮箱）</span>
            <span>成都/广州：提前5小时预订；北京：提前6小时预订；上海：提前5.5-6小时预订；天津/苏州/无锡/深圳：提前8小时预订（部分偏远地区除外，当日22点以后订单，于次日8点开始审核） </span>
            <span>当日蛋糕配送截止下单时间：北京/上海：16:30；成都/广州：14:00；天津：10:30；苏州/无锡/深圳：11:00</span>
            <span>网站注册公司名称: 北京廿一客食品有限公司 地址: 北京市北京经济技术开发区兴海二街5号院3号楼 </span>
        </div>
        <hr size="1">
    </div>
</template>

<script>
    import logo from "@/assets/logo.jpg"

    export default {
        name: 'MyFooter',
        data () {
            return {
                logo,
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .foot {
        width: 100%;
        height: 290px;
        margin: 0 auto;
        background-color: #333;
    }

    .footer-logo {
        width: 100px;
        height: 40px;
        margin-top: 50px;
    }

    .footer-nav {
        color: #fff;
        font-size: 12px;
        padding: 30px 0;
    }

    .footer-nav a {
        text-decoration: none;
        color: #fff;
        width: 48px;
        margin: 0 50px;
    }

    .footer-icon {
        display: flex;
        justify-content: center;
    }

    .footer-icon a {
        text-decoration: none;
        color: #fff;
    }

    .footer-icon img {
        width: 30px;
        height: 30px;
        margin-top: 10px;
    }

    .weibo-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #494949;
        margin: 0 25px;
    }

    .weixi-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #494949;
        margin: 0 25px;
    }

    .app-icon {
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 50%;
        background-color: #494949;
        margin: 0 25px;
    }

    .footer-text {
        color: #9a9a9a;
        text-align: center;
        margin: 25px 0;
        line-height: 18px;
        font-size: 10px;
    }
    .footer-text span{
        display: block;
    }
</style>