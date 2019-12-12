<template>
    <div class="header-box">
        <div class="header">
            <div class="header-nav">
                <a href="/" class="header-logo">
                    <img :src="logo" alt="">
                </a>
                <!-- 导航 -->
                <!-- 左边的导航 -->
                <ul class="nav-left">
                    <li v-for="item in navLeft" :key="item.id">
                        <router-link class="mylink" :to="item.toUrl">{{item.title}}</router-link>
                    </li>
                </ul>
                <!-- 右边的导航 -->
                <div class="nav-right">
                    <ul>
                        <li>
                            <div class="mylink app-code">APP下载
                                <div class="two-code">
                                    <img src="../assets/twocode.png" alt="">
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="mylink address">成都
                                <div class="addr-select">
                                    <div>上海</div>
                                    <div>天津</div>
                                    <div>杭州</div>
                                    <div>无锡</div>
                                    <div>苏州</div>
                                    <div>广州</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="mylink infor">消息
                                <div class="infor-select">
                                    <div>通知</div>
                                    <div>物流</div>
                                </div>
                            </div>
                        </li>
                        <!-- 登录注册 -->
                        <li class="login-register">
                            <router-link v-if="isLogin != 'true'" class="mylink" to="/login">登录{{isLogin}}</router-link>
                            <span v-if="isLogin != 'true'">/</span>
                            <router-link v-if="isLogin != 'true'" class="mylink" to="/register">注册</router-link>
                            <img src="../assets/touxiang.png" alt="" v-if="isLogin == 'true'">
                            <span v-if="isLogin == 'true'">{{userName}}</span>
                            <div class="logout" v-if="isLogin == 'true'" @click="clearStroage()">退出登录</div>
                        </li>
                        <!-- 购物车 -->
                        <li>
                            <router-link class="mylink" to="/shopcart" arget="_blank">购物车</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import logo from "@/assets/logo.jpg"

    export default {
        name: 'MyHeader',
        data() {
            return {
                logo,
                navLeft: [
                    { id: 1, title: "首页", toUrl: "/index" },
                    { id: 2, title: "蛋糕", toUrl: "/cake" },
                    { id: 3, title: "面包", toUrl: "/bread" },
                    { id: 4, title: "冰淇淋", toUrl: "/icecream" },
                    { id: 5, title: "咖啡下午茶", toUrl: "/coffee" },
                    { id: 6, title: "全国送", toUrl: "/countrysend" },
                    { id: 7, title: "企业专区", toUrl: "/enterprisezones" }
                ],
                isLogin:localStorage.getItem("isLogin"),
                userID:localStorage.getItem("userID"),
                userName:localStorage.getItem("userName")
                 
            }
        },
        methods:{
			clearStroage(){
				localStorage.removeItem("userID");
				localStorage.removeItem("isLogin");
				// this.$store.commit("change");
				location.reload(true);
            } 
		}
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .header-box {
        height: 80px;
        line-height: 80px;
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000000;
        width: 100%;
        height: 80px;
        background: #FFF;
        box-shadow: 0 2px 2px 0 rgba(195, 195, 195, 0.50);
    }
    /* 头部导航 */
    .header-nav {
        margin: 0 auto;
        max-width: 1200px;
        min-width: 760px;
        height: 80px;
        cursor: pointer;
    }

    .header-logo {
        display: block;
        float: left;
        width: 120px;
        height: 44px;
        margin-top: 18px;
    }

    .header-logo img {
        width: 120px;
        /* height: 44px; */
    }

    .nav-left {
        position: relative;
        float: left;
        height: 80px;
        line-height: 80px;
        margin-left: 30px;
    }

    .nav-right {
        position: relative;
        float: right;
        height: 80px;
    }

    ul{
        list-style: none;
        height: 80px;
        display: flex;
    }

    li {
        /* display: block; */
        margin: 0 15px;
    }

    .logout{
        width: 100px;
        line-height: 30px;
        position: absolute;
        top: 50px;
        right: 64px;
        color: #ff6700;
        font-size: 14px;
        display: none;
        box-shadow: 0 2px 2px 0 rgba(195, 195, 195, 0.50);
    }
    .login-register:hover .logout{
        display: block;
        transition: all 1s;
    }

    .mylink:hover {
        color: #ff6700;
    }

    .mylink {
        color: #383737;
        font-size: 14px;
        text-decoration: none;
    }

    /* 地址下拉选框 */
    .addr-select {
        position: absolute;
        top: 65px;
        left: 70px;
        height: 220px;        
        text-align: center;
        background: #fff;
        border: 1px solid #EDEDED;
        box-shadow: 0px 2px 4px 0px #ededed;
        display: none;
        /* transition: all 0.5s; */
    }

    .addr-select div {
        width: 100px;
        height: 30px;
    }

    /* 鼠标滑过地址时的操做 */
    .address:hover .addr-select {
        display: block;
        color: #383737;
    }

    /* 二维码框 */
    .two-code {
        width: 120px;
        height: 120px;
        display: none;
        background-color: #fff;
        position: absolute;
        top: 65px;
        left: -18px;
        border: 1px solid #EDEDED;
        box-shadow: 0px 2px 4px 0px #ededed;
    }

    .two-code img {
        width: 100px;
        height: 100px;
        margin-top: 10px;
    }

     /* 鼠标滑过APP时的操做 */
    .app-code:hover .two-code {
        display: block;
    }

    /* 消息框 */
    .infor-select{
        position: absolute;
        top: 65px;
        left: 135px;
        height: 100px;
        text-align: center;
        background: #fff;
        border: 1px solid #EDEDED;
        box-shadow: 0px 2px 4px 0px #ededed;
        display: none;
    }
    .infor-select div{
        width: 80px;
        height: 30px;
    }
    .infor:hover .infor-select{
        display: block;
        color: #383737;
    }
</style>