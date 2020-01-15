<template>
    <div class="home">
        <Header></Header>
        <div>
            <router-link to="/article_add">+ 新增</router-link>
        </div>
        <table v-if="data.length > 0">
            <tr>
                <th>序号</th>
                <th>标题</th>
                <th>缩略图</th>
                <th>描述</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item, key) in data" :key="key">
                <td>{{key+1}}</td>
                <td>{{item.title}}</td>
                <td><a :href="'http://study.mikeding.cn/' + item.thumb" target="_blank"><img style="width: 75px; border-radius: 4px;" :src="'http://study.mikeding.cn/' + item.thumb" alt=""></a></td>
                <td>{{item.desc}}</td>
                <td><a href="javascript:;" @click="editArticle(item.id)">修改</a> | <a href="javascript:;" @click="deleteArticle(item.id)">删除</a></td>
            </tr>
        </table>
        <div v-else>暂无数据</div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue';
    import axios from 'axios';
    import req from '@/plugins/req';

    export default {
        name: 'home',
        components: {
            Header
        },
        data() {
            return {
                data: []
            }
        },
        methods: {
            getData() {
                axios.get(req.article_list).then(res => {
                    this.data = res.data.data;
                })
            },
            editArticle(id) {
                this.$router.push({
                    path: '/article_update',
                    query: {
                        id: id
                    }
                });
            },
            deleteArticle(id) {
                if(confirm('确定删除？')) {
                    axios(req.article_del + '?id=' + id).then(() => {
                        this.getData();
                    });
                }
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>
<style>
    table{
        border-collapse: collapse;
    }
    th, td{
        border:solid 1px #1b648b;
    }
    .home td{
        padding: 10px;
    }
</style>