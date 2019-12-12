<template>
    <div class="out-box">
        <div class="title-box">修改商品信息</div>
        <div class="inner-box">
            <el-radio-group v-model="labelPosition" size="small">
                <el-radio-button label="left">左对齐</el-radio-button>
                <el-radio-button label="right">右对齐</el-radio-button>
                <el-radio-button label="top">顶部对齐</el-radio-button>
            </el-radio-group>
            <div style="margin: 20px;"></div>
            <el-form :label-position="labelPosition" label-width="80px" :model="ProData">
                <el-form-item label="商品名称">
                    <el-input v-model="ProData.pro_name"></el-input>
                </el-form-item>
                <el-form-item label="商品信息">
                    <el-input v-model="ProData.pro_infor"></el-input>
                </el-form-item>
                <el-form-item label="商品价格">
                    <el-input v-model="ProData.pro_price"></el-input>
                </el-form-item>
                <el-form-item label="所属分类">
                    <el-input v-model="ProData.tag_title"></el-input>
                </el-form-item>
                <el-form-item label="商品图片">
                    <div id="filePicker">
                        <span>选择图片</span>
                    </div>
                    <div class="imgShow">
                        <img :src="ProData.pro_img" v-model="ProData.pro_img" alt="">
                    </div>
                </el-form-item>
            </el-form>
            <el-button class="updateButton" @click="UpdatePro">确定修改</el-button>
        </div>
    </div>
</template>

<script>
    import WebUploader from "webuploader"

    export default {
        name: "Update",
        data() {
            return {
                labelPosition: 'left',
                ProData: {},
                imgsrc:''
            }
        },
        methods: {
            UpdatePro() {
                // console.log(this.formLabelData.pro_name)
                this.$http.post(`http://localhost:8888/productUpdate`, {
                        id: this.ProData.id,
                        name: this.ProData.pro_name,
                        infor: this.ProData.pro_infor,
                        price: this.ProData.pro_price,
                        tagname: this.ProData.tag_title,
                        pro_img: this.ProData.pro_img
                    })
                        .then((response) => {
                            alert("修改数据成功！"); 
                            this.$router.push("/productinfor");                          
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
            }
        },
        mounted() {
            let id = localStorage.getItem("id");
            this.$http.get(`http://localhost:8888/queryProByID?id=${id}`)
                .then((response) => {
                    // console.log(response.data);
                    this.ProData = response.data[0];
                })
                .catch(function (error) {
                    console.log(error);
                });

            // 初始化Web Uploader
            let uploader = WebUploader.create({
                // 选完文件后，是否自动上传
                auto: true,
                // swf文件路径
                swf: 'https://cdn.staticfile.org/webuploader/0.1.1/Uploader.swf',
                // 文件接收服务端。
                server: 'http://localhost:8888/upload',
                // 选择文件的按钮。可选
                // 内部根据当前运行是创建，可能是input元素，也可能是flash
                pick: '#filePicker',
                // 只允许选择图片文件
                accept: {
                    title: 'Images',
                    extensions: 'gif,jpg,jpeg,bmp,png',
                    mimeTypes: 'image/*'
                }
            });

            // 文件上传成功，给item添加成功class, 用样式标记上传成功
            uploader.on('uploadSuccess', (file, response) => {
                this.ProData.pro_img = response.upload_file;
            })
        }
    }
</script>

<style scoped>
    .out-box {
        width: 100%;
        height: 100%;
        background-color: #fff;
    }

    .title-box {
        width: 100%;
        line-height: 60px;
        text-align: left;
        border-bottom: 1px solid #ccc;
        padding-left: 20px;
    }

    .inner-box {
        width: 500px;
        height: 500px;
        /* border: 1px solid red; */
        margin: 20px 0 0 80px;
    }

    .updateButton {
        background-color: #009688;
        color: #fff;
    }

    .out-box>>>.webuploader-container {
        position: relative;
        width: 150px;
        height: 100px;
    }

    .out-box>>>.webuploader-element-invisible {
        position: absolute !important;
        clip: rect(1px 1px 1px 1px);
        /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
    }

    .out-box>>>.webuploader-pick {
        position: relative;
        display: inline-block;
        cursor: pointer;
        background: #00b7ee;
        padding: 10px 15px;
        color: #fff;
        text-align: center;
        border-radius: 3px;
        overflow: hidden;
    }

    .out-box>>>.webuploader-pick-hover {
        background: #00a2d4;
    }

    .out-box>>>.webuploader-pick-disable {
        opacity: 0.6;
        pointer-events: none;
    }

    .imgShow {
        width: 150px;
        height: 150px;
        position: absolute;
        top: 0;
        left: 220px;
    }

    .imgShow img {
        width: 120px;
        height: 100px;
    }
</style>