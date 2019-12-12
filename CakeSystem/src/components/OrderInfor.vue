<template>
    <div class="out-box">
        <el-table :data="dataList" style="width: 98%" height="600" max-height="90%">
            <el-table-column prop="cart_img" label="商品图片" width="180">
                <template slot-scope="scope">
                    <img :src="scope.row.cart_img" min-width="100" height="100" />
                </template>
            </el-table-column>
            <el-table-column prop="name" label="商品名称" width="250">
            </el-table-column>
            <el-table-column prop="price" label="商品价格" width="180">
            </el-table-column>
            <el-table-column prop="count" label="商品数量" width="180">
            </el-table-column>
            <el-table-column prop="userName" label="用户" width="180">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button class="Button">订单已完成</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "OrderInfor",
        data() {
            return {
                dataList: []
            }
        },
        mounted() {
            this.$http.get("http://localhost:8888/queryCartPro")
                .then((response) => {
                    // console.log(response.data);
                    this.dataList = response.data;
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
        height: 620px;
        background-color: #fff;
    }
    .Button{
        border: none;
        color: red;
    }
</style>