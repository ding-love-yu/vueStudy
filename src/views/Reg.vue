<template>
    <div class="container">
        <h1>注册</h1>
        <form action="" onsubmit="return false;">
            <div class="form-item">
                <label>账号：</label>
                <input type="text" v-model="username" placeholder="请输入账号"/>
            </div>
            <div class="form-item">
                <label>密码：</label>
                <input type="password" v-model="password" placeholder="请输入密码"/>
            </div>
            <div class="form-item">
                <label>确认密码：</label>
                <input type="password" v-model="repassword" placeholder="请再次输入密码"/>
            </div>
            <div class="form-item">
                <input type="submit" value="注册" @click="doSubmit" />
                <a style="margin-left:10px;" href="javascript:;" @click="toLogin('/login')">返回</a>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';
    import req from '@/plugins/req';
    import common from "../plugins/common";

    export default {
        data(){
            return {
                username: '',
                password: '',
                repassword: ''
            }
        },
        methods: {
            doSubmit() {
                const data = new URLSearchParams();
                data.append('username', this.username);
                data.append('password', this.password);
                data.append('repassword', this.repassword);
                axios.post(req.register, data).then(res=>{
                    if(res.data.code !== 0) {
                        alert(res.data.msg)
                    } else {
                        alert('注册成功');
                        common.router.go2page('/login');
                    }
                })
            },
            toLogin(page) {
                common.router.go2page(page);
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
