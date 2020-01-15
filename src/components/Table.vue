<template>
    <div class="table">
        <table>
            <tr>
                <th>序号</th>
                <th>标题</th>
                <th>缩略图</th>
                <th>描述</th>
                <th>操作</th>
            </tr>
            <tr>
                <td>1</td>
                <td>标题1</td>
                <td><img src="" alt=""></td>
                <td>这里是描述哦</td>
                <td><a href="javascript:;">详情</a></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Table",


    }
</script>

<style scoped>
    .mask{
        top:0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.75);
        position: fixed;
        z-index: 1000;
    }
    .pop{
        top:0;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 1002;
        background-color: #fff;
    }
</style>