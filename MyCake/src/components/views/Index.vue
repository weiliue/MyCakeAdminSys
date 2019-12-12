<template>
    <div class="middle-box">
        <!-- 轮播图 -->
        <div class="slide">
            <el-carousel :interval="4000" type="card" height="400px">
                <el-carousel-item v-for="item in slideList" :key="item.id">
                    <img :src="item.imgUrl" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>

        <!-- 中间部分内容 -->
        <div class="content-box">
            <!-- 内容的导航栏 -->
            <div class="content-nav">
                <a href="#1">
                    <img src="../../assets/xinpin.jpg" alt="新品" title="新品">
                </a>
                <a href="#2">
                    <img src="../../assets/shengri.jpg" alt="生日" title="生日">
                </a>
                <a href="#3">
                    <img src="../../assets/ertong.jpg" alt="儿童" title="儿童">
                </a>
                <a href="#4">
                    <img src="../../assets/juhui.jpg" alt="聚会" title="聚会">
                </a>
                <a href="#5">
                    <img src="../../assets/huodong.png" alt="活动专区" title="活动专区">
                </a>
            </div>

            <!-- 每个导航栏里面的内容 -->
            <div v-for="item in contentList" class="content-module" :id="item.id">
                <!-- 导航标题 -->
                <h4 class="content-module-title">{{item.tag_title}}
                    <span>/</span>
                    <span>专区</span>
                </h4>
                <!-- 导航里的图片 -->
                <div class="content-module-img">
                    <div @click="jumpToTagInfor(item.id)">
                        <img :src="item.tag_img" alt="">
                    </div>
                </div>

                <!-- 每个导航模块里面的商品内容 -->
                <div class="product-list">
                    <div v-for="value in item.proInfor" class="product-box" :key="value.id">
                        <div class="myContent-link" @click="jumpToProInfor(value.id,value.pro_name)">
                            <img :src="value.pro_img" alt="">
                        </div>
                        <p class="pro-title">{{value.pro_name}}</p>
                        <p class="pro-infor">{{value.pro_infor}}</p>
                        <div class="tag-list">
                            <ul>
                                <li>
                                    <div class="myContent-link" @click="jumpToTagInfor(item.id)">{{item.tag_title}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="cart-infor">
                            <span class="pro-price">￥{{value.pro_price}}</span>
                            <button class="mybutton cart" @click="addToCart(value.id,value.pro_name)">加入购物车</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="flag" class="cart-success-box">
            <i class="el-icon-success"></i>
            <span>成功添加购物车</span>
            <div class="mybutton cartInfor" @click="jumpToCart">查看购物车</div>
        </div>
    </div>
</template>

<script>
    import silde1 from "@/assets/slide5.jpg"
    import silde2 from "@/assets/slide2.jpg"
    import silde3 from "@/assets/slide3.jpg"
    import silde4 from "@/assets/slide4.jpg"

    export default {
        name: "Index",
        data() {
            return {
                slideList: [
                    { id: 1, imgUrl: silde1 },
                    { id: 2, imgUrl: silde2 },
                    { id: 3, imgUrl: silde3 },
                    { id: 4, imgUrl: silde4 }
                ],
                contentList: [],
                flag: false

            }
        },
        methods: {
            addToCart(produId, proName) {
                // console.log(produId)

                if (localStorage.getItem("isLogin")) {
                    this.flag = true;
                    let that = this;
                    let userId = localStorage.getItem("userID");
                    //发送ajax请求，查看购物车是否存在数据
                    this.$http.get(`http://localhost:8888/queryCartInfor?name=${proName}&&userId=${userId}`)     //查询购物车的商品
                        .then((response) => {
                            let result = response.data;
                            // console.log(result)

                            if (result.msg == 0) {
                                that.$http.get(`http://localhost:8888/insertCartInfor?id=${produId}&&userId=${userId}`)
                                    .then((response) => {
                                        console.log(response.data)
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                            }
                            else if (result.msg == 1) {
                                if (result.cartData[0].name == proName) {
                                    result.cartData[0].count++;
                                    // console.log(result.cartData[0].count)
                                    that.$http.get(`http://localhost:8888/updataCartCount?name=${proName}&&userId=${userId}&&count=${result.cartData[0].count}`)
                                        .then((response) => {
                                            // console.log(response.data)
                                        })
                                        .catch(function (error) {
                                            console.log(error);
                                        });
                                }
                            }
                            else {
                                alert("数据错误");
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
                else {
                    alert("亲，您还没登录哦~~");
                }

            },
            jumpToTagInfor(id) {
                this.$router.push({ path: "/sort", query: { tagid: id } });
            },
            jumpToProInfor(id, name) {
                // console.log(id)
                this.$router.push({ path: "/productinfo", query: { proid: id, proname: name } });
            },
            jumpToCart(){
                this.$router.push( "/shopcart");
            }
        },
        mounted() {
            //发送ajax请求,页面加载时请求数据渲染页面
            this.$http.get("http://localhost:8888/queryProByTagId")//查询商品信息根据分类id
                .then((response) => {
                    this.contentList = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
    .middle-box {
        width: 100%;
        /* background-color: #fff; */
    }

    .slide {
        width: 100%;
        height: 420px;
        border-bottom: 3px solid rgb(241, 212, 212);
        background-color: #fff;
    }

    .el-carousel__item img {
        width: 760px;
        height: 420px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    /* 中间内容 */
    .content-box {
        width: 1200px;
        margin: 0 auto;
        background-color: #fff;
    }

    .content-nav {
        padding: 40px 0;
        background-color: #D3DCBB;
    }

    .content-nav a {
        margin: 6px 12px;
        border-radius: 8px;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.06);
        overflow: hidden;
    }

    .content-module {
        width: 1200px;
        height: 770px;
        /* border: 1px solid red; */
        padding-top: 10px;
    }

    .active-box {
        width: 1200px;
        height: 400px;
        padding-top: 50px;
    }

    .content-module-title {
        width: 1200px;
        line-height: 36px;
        padding: 5px 50px;
        margin: 20px 0;
        font-size: 24px;
        background-color: rgb(252, 233, 235);
        /* color: #724228; */
        color: #F70;
        font-family: "微软雅黑";
        text-align: left;
        font-weight: normal;
    }

    .content-module-title span {
        font-size: 14px;
    }

    .active {
        text-align: left;
        margin-left: 50px;
    }

    .product-list {
        display: flex;
        width: 1116px;
        height: 365px;
        margin: 20px auto;
        /* margin-top: 20px; */
    }

    .product-box {
        width: 280px;
        height: 365px;
        padding: 8px;
        position: relative;
    }

    .product-box:hover {
        transition: all 1s;
        background-color: rgb(253, 234, 237);
    }

    .product-box p {
        text-align: left;
    }

    .pro-title {
        font-size: 16px;
        color: #000;
    }

    .pro-infor {
        font-size: 14px;
        color: #616161;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .myContent-link img {
        width: 263px;
        height: 230px;
        background: rgba(248, 245, 245, 0.5);
        border-radius: 8px;
    }

    .tag-list ul,
    li {
        list-style: none;
        display: flex;
        font-size: 12px;
    }

    .tag-list li {
        border: 1px solid #f89670;
        margin: 8px 3px;
        padding: 0 8px;
        border-radius: 8px;
    }

    .myContent-link {
        text-decoration: none;
        color: #f36d45;
        cursor: pointer;
    }

    .mybutton {
        color: #f36d45;
        border: none;
    }

    .cart {
        width: 100px;
        height: 30px;
        line-height: 30px;
        background: #f36d45;
        color: #fff;
        font-size: 14px;
        padding: 0 10px;
        margin-left: 25px;
    }

    .cart-infor {
        text-align: left;
        border-top: 1px dashed pink;
        padding-top: 10px;
    }

    .pro-price {
        display: inline-block;
        font-size: 14px;
        color: #f00;
        text-align: left;
        width: 130px;
    }

    .cart-success-box {
        width: 275px;
        height: 115px;
        box-shadow: 0 2px 2px 0 rgb(196, 193, 193);
        background-color: #fff;
        position: fixed;
        top: 150px;
        left: 620px;
        z-index: 99;
    }

    .cartInfor {
        width: 110px;
        height: 30px;
        line-height: 30px;
        background: #f36d45;
        color: #fff;
        font-size: 14px;
        margin: 0 auto;
        margin-top: 20px;
        cursor: pointer;
    }

    .el-icon-success {
        color: rgb(12, 211, 12);
        margin-top: 20px;
    }
</style>