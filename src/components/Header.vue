<template>
    <div class="header oh">
        <div class="info fl">欢迎您管理员: {{username}}</div>
        <div class="logout-container fl"><button type="button" @click="doLogout">登出</button></div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "Header",
        computed: {
            username() {
                return this.$store.state.user.username
            }
        },
        methods: {
            ...mapActions(['logout']),
            doLogout(){
                this.logout();
            }
        }
    }
</script>

<style scoped>
    .info{
        font-size: 20px;
        font-weight: bold;
        margin-right: 10px;
    }
</style>