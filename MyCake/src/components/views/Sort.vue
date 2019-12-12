<template>
    <div class="out-box">

        <!-- 图片 -->
        <div class="tag-imgbox">
            <img :src="tagList[0].tag_img" alt="">
        </div>
        <div class="inner-box">
            <!-- 标题 -->
            <div class="tag-titlebox">
                <h2>{{tagList[0].tag_title}}</h2>
            </div>

            <!-- 内容 -->
            <div class="content-box">
                <div class="content-list">
                    <ul>
                        <li v-for="item in sortList" :key="item.id">
                            <div class="pro-list">
                                <div class="mylink" @click="jumpToProInfor(item.id,item.pro_name)">
                                    <img :src="item.pro_img" alt="">
                                    <p>{{item.pro_name}}</p>
                                    <span>￥{{item.pro_price}}</span>
                                </div>
                                <div class="tag-list">
                                    <router-link class="mylink " to="">{{tagList[0].tag_title}}</router-link>
                                </div>
                                <button @click="addToCart(item.id,item.pro_name)">加入购物车</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sort",
        data() {
            return {
                tagId: this.$route.query.tagid,
                sortList: [],
                tagList: []
            }
        },
        methods: {
            jumpToProInfor(id, name) {
                // console.log(id)
                this.$router.push({ path: "/productinfo", query: { proid: id, proname: name } });
            },
            addToCart(produId, proName) {
                // console.log(produId)

                if (localStorage.getItem("isLogin")) {
                    // this.flag = true;
                    let that = this;
                    let userId = localStorage.getItem("userID");
                    //发送ajax请求，查看购物车是否存在数据
                    this.$http.get(`http://localhost:8888/queryCartInfor?name=${proName}`)     //查询购物车的商品
                        .then((response) => {
                            let result = response.data;
                            console.log(result)

                            if (result.msg == 0) {
                                that.$http.get(`http://localhost:8888/insertCartInfor?id=${produId}&&userId=${userId}`)
                                    .then((response) => {
                                        console.log(response.data)
                                    })
                                    .cath(function (error) {
                                        console.log(error);
                                    });
                            }
                            else if (result.msg == 1) {
                                if (result.cartData[0].name == proName) {
                                    result.cartData[0].count++;
                                    console.log(result.cartData[0].count)
                                    that.$http.get(`http://localhost:8888/updataCartCount?name=${proName}&&userId=${userId}&&count=${result.cartData[0].count}`)
                                        .then((response) => {
                                            // console.log(response.data)
                                        })
                                        .cath(function (error) {
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

            }
        },
        mounted() {
            //发送ajax请求,页面加载时请求数据渲染页面
            this.$http.get(`http://localhost:8888/querySortProByTagId?id=${this.tagId}`)//查询商品信息根据分类id
                .then((response) => {
                    // console.log(response.data)
                    this.sortList = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });

            //请求分类（tag表）的信息
            this.$http.get(`http://localhost:8888/queryTagInfor?id=${this.tagId}`)//查询商品信息根据分类id
                .then((response) => {
                    console.log(response.data)
                    this.tagList = response.data;
                    console.log(this.tagList)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
    .out-box {
        width: 100%;
    }

    .inner-box {
        width: 1200px;
        margin: 0 auto;
        background-color: #fff;
    }

    .tag-imgbox {
        width: 100%;
        background-color: #fff;
    }

    .tag-imgbox img {
        width: 79%;
    }

    .tag-titlebox h2 {
        font-size: 24px;
        text-align: center;
        padding: 50px 0;
    }

    /* 中间内容 */
    .content-box {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .content-list ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }

    .content-list li {
        padding: 10px 30px;
    }

    .content-list li:hover {
        transition: all 1s;
        background-color: rgb(253, 234, 237);
    }

    .pro-list img {
        width: 228px;
        height: 246px;
    }

    .pro-list {
        width: 240px;
        text-align: center;
        height: 400px;
        /* position: relative; */
    }

    .mylink {
        text-decoration: none;
    }

    .mylink p {
        font-size: 16px;
        color: #000;
        margin-bottom: 10px;
    }

    .mylink span {
        font-size: 14px;
        color: #616161;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .tag-list {
        margin: 10px 0;
    }

    .tag-list .mylink {
        border: 1px solid #f89670;
        margin: 8px 3px;
        padding: 0 8px;
        border-radius: 8px;
        color: #f5865a;
        font-size: 12px;
        margin: 10px 0;
    }

    .pro-list button {
        border: none;
        background-color: #f36d45;
        color: #fff;
        width: 150px;
        height: 40px;
        font-size: 16px;
    }
</style>