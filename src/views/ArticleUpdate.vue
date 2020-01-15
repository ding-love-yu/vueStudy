<template>
    <div class="container">
        <h1>修改文章</h1>
        <router-link to="/">&lt;- 返回</router-link>
        <form action="" onsubmit="return false;">
            <div class="form-item">
                <label>标题：</label><br>
                <input type="text" v-model="title" placeholder="请输入标题"/>
            </div>
            <div class="form-item">
                <label>缩略图：</label><br>
                <input type="file" name="thumb" ref="fileInput" @change="uploadFile()" accept="image/*" /><br>
                <img style="width: 300px;" :src="'http://study.mikeding.cn/' + thumb" alt="">
            </div>
            <div class="form-item">
                <label>描述：</label><br>
                <textarea placeholder="请输入描述" v-model="desc" ></textarea>
            </div>
            <div class="form-item">
                <label>内容：</label><br>
                <textarea rows="5" placeholder="请输入内容" v-model="content" ></textarea>
            </div>
            <div class="form-item">
                <input type="submit" value="提交" @click="doSubmit" />
            </div>
        </form>
    </div>
</template>
<script>
    import req from "../plugins/req";
    import axios from 'axios';
    import qs from 'qs';
    import common from "../plugins/common";

    export default {
        data(){
            return {
                id: 0,
                title: '',
                thumb: '',
                desc: '',
                content: ''
            }
        },
        mounted() {
            let id = this.$route.query.id;
            axios.get(req.get_article_by_id + '?id=' + id).then(res => {
                this.id = res.data.data.id;
                this.title = res.data.data.title;
                this.thumb = res.data.data.thumb;
                this.desc = res.data.data.desc;
                this.content = res.data.data.content;
            });
        },
        methods: {
            doSubmit() {
                let data = {
                    id: this.id,
                    title: this.title,
                    thumb: this.thumb,
                    desc: this.desc,
                    content: this.content
                };
                axios.post(req.article_update, qs.stringify(data)).then(res => {
                    if(res.data.code === 0) {
                        alert(res.data.msg);
                        common.router.go2page('/');
                    } else {
                        alert(res.data.msg);
                    }
                });
            },
            uploadFile() {
                if(this.$refs.fileInput.files.length !== 0) {  //有文件上传文件
                    var file = this.$refs.fileInput.files[0];
                    var formData = new FormData();
                    formData.append('thumb', file);
                    axios.post(req.upload, formData).then(res => {
                        if(res.data.code === 0) {
                            this.thumb = res.data.data;
                        }
                    });
                }
            }
        }
    }
</script>
<style>
    .container{
        margin: 10px 0 0 10px;
    }
    .form-item{
        margin-bottom: 10px;
    }
</style>
