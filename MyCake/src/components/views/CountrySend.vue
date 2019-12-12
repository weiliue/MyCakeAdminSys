<template>
    <div class="outer-box">
        <div class="img-box">
            <img :src="national" alt="">
        </div>

        <div class="content-box">
            <ul class="pro-list">
                <li v-for="item in 10" :key="item">
                    <router-link class="mylink" to="">
                        <img src="http://static.21cake.com/upload/images/13f039bff90a542ba3486d219dd0215d.jpg" alt="">
                        <h5>巴西挂耳咖啡</h5>
                        <p>￥100.00/份</p>
                    </router-link>
                    <div class="order">订购</div>
                </li>
            </ul>
        </div>

        <div class="order-Infor">
            <h2>订单信息</h2>
            <form action="" method="post">
                <div class="order-Infor-content">
                    <div class="order-Infor-left">
                        <ul>
                            <li>
                                <label for="">收货人：</label>
                                <input type="text" placeholder="收货人姓名">
                            </li>
                            <li>
                                <label for="">联系方式：</label>
                                <input type="text" placeholder="收货人联系方式">
                            </li>
                            <li>
                                <label for="">城市：</label>
                                <select name="province" id="province">
                                    <option value>省</option>
                                    <option value="四川">四川</option>
                                    <option value="上海">上海</option>
                                    <option value="广东">广东</option>
                                    <option value="广西">广西</option>
                                    <option value="云南">云南</option>
                                    <option value="贵州">贵州</option>
                                    <option value="湖南">湖南</option>
                                </select>
                                <select name="city" id="city">
                                    <option value>市</option>
                                </select>
                                <select name="city" id="city">
                                    <option value>区/县</option>
                                </select>
                            </li>
                            <li>
                                <label for="">详细地址：</label>
                                <textarea name="address" placeholder="请输入详细地址"></textarea>
                            </li>
                        </ul>
                    </div>
                    <div class="order-Infor-right">
                        <p>
                            商品金额：￥
                            <span>0.00</span>
                        </p>
                        <p>
                            配送费：￥
                            <span>0.00</span>
                        </p>
                        <div class="total-amount">
                            <p>
                                合计：￥
                                <span>0.00</span>
                            </p>
                        </div>
                        <p class="last-p">发货及到货时间参考产品详情页说明</p>
                        <div class="total-button">
                            <input type="submit" value="在线付款">
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import National from "@/assets/national.jpg"
    export default {
        name: "CountrySend",
        data() {
            return {
                national: National
            }
        }
    }
</script>

<style scoped>
    .outer-box {
        width: 100%;
    }

    .img-box img {
        width: 100%;
    }

    .content-box {
        width: 1200px;
        margin: 0 auto;
        /* border: 1px solid red; */
        background-color: #fff;
    }

    .pro-list {
        width: 1200px;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }

    .pro-list li {
        width: 228pxpx;
        height: 355px;
        padding: 0 36px;
        margin-top: 30px;
    }

    .mylink {
        text-decoration: none;
    }

    .mylink img {
        width: 228px;
        height: 251px;
    }

    .mylink h5 {
        font-size: 14px;
        line-height: 20px;
        margin-top: 10px;
        margin-bottom: 4px;
        text-align: center;
        color: #333;
    }

    .mylink p {
        font-size: 12px;
        color: rgb(247, 52, 52);
        text-align: center;
    }

    /* 尾部地址信息 */
    .order {
        width: 136px;
        height: 30px;
        line-height: 30px;
        background-color: #f00;
        color: #fff;
        font-size: 14px;
        margin: 20px 0 0 45px;
    }

    .order-Infor {
        width: 1200px;
        background: #fff;
        margin: 0 auto;
        padding: 50px 0 100px 0;

    }

    .order-Infor h2 {
        height: 44px;
        width: 1160px;
        background: #FAFAFA;
        border: 1px solid #E1E1E1;
        line-height: 44px;
        padding-left: 34px;
        font-size: 13px;
        margin: 0 auto;
        margin-top: 28px;
        text-align: left;
    }

    .order-Infor-content {
        overflow: hidden;
        width: 1122px;
        margin: 0 auto;
        margin-top: 20px;
        border: 1px solid #E1E1E1;
        padding: 14px 55px 32px 17px;
        margin-bottom: 30px;
        height: 500px;
    }

    .order-Infor-left {
        float: left;
        width: 800px;
        text-align: left;
    }

    .order-Infor-left ul {
        list-style: none;
    }

    .order-Infor-left li {
        margin-bottom: 12px;
    }

    .order-Infor-left label {
        display: inline-block;
        width: 75px;
        color: #b3b3b3;
        line-height: 40px;
        vertical-align: top;
        font-size: 13px;
    }

    .order-Infor-left input {
        height: 38px;
        width: 160px;
        padding-left: 8px;
        border: 1px solid #efefef;
        font-size: 13px;
    }

    .order-Infor-left select {
        padding: 0;
        width: 168px;
        height: 38px;
        margin-right: 15px;
        border: 1px solid #efefef;
        outline: none;
        font-size: 13px;
    }

    .order-Infor-left textarea {
        width: 520px;
        height: 70px;
        border: 1px solid #efefef;
        padding: 5px;
        font-size: 13px;
        display: inline-block;
    }

    .order-Infor-right {
        float: right;
        width: 310px;
        margin-top: 50px;
    }

    .order-Infor-right p {
        text-align: right;
        line-height: 18px;
        margin-bottom: 15px;
        font-size: 13px;
    }
    .total-button{
        text-align: right;
    }
    .total-button input{
        width: 230px;
        height: 35px;
        background: #BFBFBF;
        border: none;
        cursor: pointer;
    }
</style>