<template>
    <div class="container">
        <h1>登录</h1>
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
                <input type="submit" value="提交" @click="doSignIn" />
                <a style="margin-left:10px;" href="javascript:;" @click="toRegister('/reg')">还没账号？立马注册</a>
            </div>
        </form>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import common from "../plugins/common";

    export default {
        data(){
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapActions(['login']),
            doSignIn() {
                const data = new URLSearchParams();
                data.append('username', this.username);
                data.append('password', this.password);
                this.login(data).then((res) => {
                    if(res.code !== 0) {
                        alert(res.msg);
                    } else {
                        this.$store.commit('setUser', res.data);
                        common.router.go2page('/');
                    }
                });
            },
            toRegister(page) {
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
