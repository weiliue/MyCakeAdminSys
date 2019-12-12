<template>
    <div class="out-box">
        <div class="add-button">
            <el-button class="addButton" @click="addProduct">添加商品</el-button>

            <div class="search-box">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
                <el-button class="search-button" @click="Search">搜索</el-button>
            </div>
        </div>

        <el-table :data="dataList" style="width: 98%" height="600" max-height="90%">
            <el-table-column fixed prop="pro_img" label="图片" width="200">
                <template slot-scope="scope">
                    <img :src="scope.row.pro_img" min-width="100" height="100" />
                </template>
            </el-table-column>
            <el-table-column prop="pro_name" label="商品名称" width="200">
            </el-table-column>
            <el-table-column prop="pro_infor" label="商品信息" width="350">
            </el-table-column>
            <el-table-column prop="pro_price" label="商品价格" width="200">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button class="delButton" @click="delProduct(scope.row.id)">删除</el-button>
                    <el-button class="updateButton" @click="updateProduct(scope.row.id)">修改</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div v-if="isDelete" class="del-box">
            <i class="el-icon-success"></i>
            删除成功
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                dataList: [],
                isDelete: false,
                input: ''
            }
        },
        methods: {
            delProduct(id) {
                // console.log(id)

                this.$http.get(`http://localhost:8888/deleteProByID?id=${id}`)
                    .then((response) => {
                        // console.log(response.data);
                        this.isDelete = true;
                        location.reload();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            updateProduct(id) {
                localStorage.setItem("id", id);
                this.$router.push("/update");
            },
            addProduct() {
                this.$router.push("/add");
            },
            Search() {
                localStorage.setItem("name", this.input);
                this.$router.push("/search");
            }
        },
        mounted() {
            this.$http.get(`http://localhost:8888/searchProByName?name=${localStorage.getItem("name")}`)
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

    .el-table {
        overflow: auto;
    }

    .el-button.delButton {
        background-color: rgba(255, 0, 0, 0.7);
        color: #fff;
    }

    .el-button.updateButton {
        background-color: #009688;
        color: #fff;
    }

    .del-box {
        width: 150px;
        line-height: 60px;
        background-color: #fff;
        position: absolute;
        top: 125px;
        right: 300px;
        z-index: 99;
        background-color: rgba(224, 221, 221, 0.7);
        border-radius: 4px;
    }

    .el-icon-success {
        color: rgb(54, 150, 54);
    }

    .add-button {
        width: 100%;
        line-height: 60px;
        text-align: left;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
    }

    .el-button.addButton {
        background-color: #009688;
        color: #fff;
    }

    .search-box {
        float: right;
        line-height: 60px;
        margin-right: 150px;
    }

    .search-button {
        position: absolute;
        top: 90px;
        right: 100px;
        background-color: #009688;
        color: #fff;
    }
</style>