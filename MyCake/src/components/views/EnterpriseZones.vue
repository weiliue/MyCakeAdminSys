<template>
    <div class="content-box">
        <div class="nav">
            <div class="enterprise-box">
                <div class="table">
                    <div class="nav-box">
                        <a href="#">
                            <img :src="EnterImg1" alt="">
                        </a>
                    </div>
                    <div class="nav-box">
                        <a href="#">
                            <img :src="EnterImg2" alt="">
                        </a>
                    </div>
                    <div class="nav-box">
                        <a href="#">
                            <img :src="EnterImg3" alt="">
                        </a>
                    </div>
                    <div class="nav-box">
                        <a href="#">
                            <img :src="EnterImg4" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-box">
            <h2>如何购买-联系我们</h2>
            <div>
                <p>联系电话：010-65524895</p>
                <p>联系邮箱：qiye@1ducake.com</p>
            </div>
        </div>

        <div class="contact-input-box">
            <h2>留言</h2>
            <div>
                <ul>
                    <li>
                        <select name="" id="">
                            <option value>已选城市：成都</option>
                            <option value="">广州</option>
                            <option value="">昆明</option>
                            <option value="">南宁</option>
                        </select>
                    </li>
                    <li>
                        <input type="text" placeholder="公司名称">
                    </li>
                    <li>
                        <input type="text" placeholder="联系人">
                    </li>
                    <li>
                        <input type="text" placeholder="手机号">
                    </li>
                    <li>
                        <input type="text" placeholder="邮箱">
                    </li>
                    <li>
                        <textarea placeholder="留言" cols="68" rows="3"></textarea>
                    </li>
                    <li>
                        <button>提交</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import EnterImg1 from "@/assets/enterImg1.png"
    import EnterImg2 from "@/assets/enterImg2.png"
    import EnterImg3 from "@/assets/enterImg3.png"
    import EnterImg4 from "@/assets/enterImg4.png"
    export default {
        name: "EnterpriseZones",
        data() {
            return {
                EnterImg1,
                EnterImg2,
                EnterImg3,
                EnterImg4
            }
        }
    }
</script>

<style scoped>
    .content-box {
        width: 100%;
        min-width: 1200px;
    }

    .nav {
        height: 290px;
        background: url(../../assets/enterprise.png) center center no-repeat;
    }

    .enterprise-box {
        width: 880px;
        margin: 0 auto;
        padding-top: 100px;
    }

    .table {
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .nav-box {
        width: 220px;
        height: 95px;
    }

    .nav-box img {
        margin-top: 15px;
    }

    .nav-box a {
        display: inline-block;
        width: 133px;
        height: 95px;
        background: rgba(128, 101, 84, 0.10);
        border-radius: 4px;
    }

    .contact-box {
        width: 1200px;
        height: 250px;
        margin: 0 auto;
        padding: 20px 0;
        background-color: #fff;
    }

    .contact-box h2 {
        width: 200px;
        height: 50px;
        line-height: 50px;
        color: rgb(250, 120, 142);
        border-bottom: 3px solid rgb(243, 163, 176);
        margin: 0 auto;
        margin-bottom: 50px;
    }

    .contact-box p {
        line-height: 30px;
        font-size: 14px;
    }

    .contact-input-box {
        width: 1200px;
        height: 600px;
        margin: 0 auto;
        padding-top: 50px;
        background-color: #fff;
    }
    .contact-input-box h2{
        padding-bottom: 50px;
    }
    .contact-input-box ul,li{
        list-style: none;
        margin: 10px 0;
    }
    .contact-input-box select{
        width: 505px;
        height: 40px;
    }
    .contact-input-box input,button{
        width: 500px;
        height: 40px;
    }
    .contact-input-box button{
        background-color: #f00;
        border: none;
        color: #fff;
        font-size: 18px;
    }
</style>