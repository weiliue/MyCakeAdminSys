<template>
    <div>
        <el-container class="menu">
            <el-header class="header">
                <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"
                    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <i class="logo">
                        <img src="../assets/logo.png" alt="">
                        <span>后台管理系统</span>
                    </i>
                    <el-menu-item index="1">商品中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3">消息中心</el-menu-item>
                    <el-menu-item index="4" >订单管理</el-menu-item>
                    <el-menu-item index="5" class="admin-item" v-if="isLogin != 'true'" @click="login">请登录</el-menu-item>
                    <el-menu-item v-if="isLogin == 'true'" class="admin-item" index="6">
                        <img src="../assets/touxiang.png" alt="">
                        你好！{{adName}}
                        <div class="personal">
                            <div>个人中心</div>
                            <div>修改资料</div>
                        </div>
                    </el-menu-item>
                    <el-menu-item class="logout-item" index="7" @click="logout">退出登录</el-menu-item>
                </el-menu>
            </el-header>
            <el-container>
                <el-aside>
                    <el-row class="tac">
                        <!--强行加入动画过度隐藏效果-->
                        <transition name="el-fade-in">
                            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router
                                :collapse="isCollapse" :class="{'isCollapseFalseStyle':isCollapse!=true}">
                                <template>
                                    <el-submenu index="8">
                                        <template slot="title">
                                            <span slot="title" class="big-title">商品管理</span>
                                        </template>
                                        <el-menu-item class="small-title" index="/productinfor" key="/productinfor">
                                            商品信息
                                        </el-menu-item>
                                        <el-menu-item class="small-title" index="/bread" key="/bread">
                                            面包信息
                                        </el-menu-item>
                                    </el-submenu>
                                </template>
                            </el-menu>
                        </transition>
                        <transition name="el-fade-in">
                            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router
                                :collapse="isCollapse" :class="{'isCollapseFalseStyle':isCollapse!=true}">
                                <template>
                                    <el-submenu index="9">
                                        <template slot="title">
                                            <span slot="title" class="big-title">订单管理</span>
                                        </template>
                                        <el-menu-item class="small-title" index="/orderinfor" key="/orderinfor">
                                            订单信息
                                        </el-menu-item>
                                    </el-submenu>
                                </template>
                            </el-menu>
                        </transition>
                    </el-row>
                </el-aside>
                <el-main>
                    <router-view v-if="isLogin == 'true'"></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                isCollapse: false,   //false为出现 true为隐藏
                activeIndex2: '1',
                isLogin:localStorage.getItem("isLogin"),
                adName:localStorage.getItem("adName")
            }
        },
        computed: {
            
        },
        methods: {
            changeMenu() {
                if (this.isCollapse) {
                    this.isCollapse = false
                } else {
                    this.isCollapse = true
                }
            },
            logout(){
                localStorage.removeItem("isLogin");
                this.$router.push("/");
            },
            login(){
                this.$router.push("/");
            }
        },
        watch: {
            //监听路由变化，自动缩减左边菜单栏目
            $route() {
                let width = document.body.clientWidth;
                if (width >= 700) {
                    this.isCollapse = false;
                } else {
                    this.isCollapse = true;
                }
            }
        }
         
    }
</script>

<style>
    .menu {
        width: 100%;
        height: 100%;
    }

    .el-header.header {
        padding: 0;
    }

    .el-aside {
        background-color: #d3dce6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
        height: 660px; 
    }

    .el-aside {
        width: auto !important;
    }

    .isCollapseFalseStyle {
        width: 200px !important;
    }

    .el-menu.el-menu-demo {
        padding-left: 200px;
    }

    .logo {
        position: absolute;
        top: 10px;
        left: 50px;
        color: #fff;
    }

    .el-menu-item.admin-item {
        position: absolute;
        right: 110px;
    }

    .el-menu-item.admin-item img {
        padding-right: 10px;
    }

    .el-menu-item.logout-item {
        position: absolute;
        right: 20px;
    }

    .big-title {
        font-weight: bold;
    }

    .small-title {
        background-color: #e9eef3;
    }
    .personal{
        width: 130px;
        height: 70px;
        position: absolute;
        top: 53px;
        right: 20px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(195, 195, 195, 0.50);
        display: none;
        z-index: 99;
    }
    .personal div{
        line-height: 35px;
        cursor: pointer;
        color: black;
    }
    .admin-item:hover .personal{
        display: block;
    }
</style>