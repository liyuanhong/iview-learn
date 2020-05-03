<style scoped>
.my-table {
    
}

.my-table td {
    width:200px;
    border-style: solid;
    border-width: 1px;
    display: inline-block;
}


</style>

<template>
    <div :style='{"_background":"red"}'>
        <table class="my-table" :style='{"margin":"auto"}'>
            <th>
                <td>用户名</td><td>密码</td><td>年龄</td><td>性别</td>
            </th>
            <tr v-for="item in userinfo" :key="item.id">
                <td>{{ item.username }}</td><td>{{ item.password }}</td><td>{{ item.age }}</td><td>{{ item.sex}}</td>
            </tr>
        </table>
        <button @click="axiostest">加载数据</button>
    </div>
</template>


<script>
export default {
    name: "user-list",
    data(){
        return {
            userinfo: []
        }
    },
    methods: {
        axiostest: function(){
            this.$http.get('/mock/aaa.json').then((response)=>{
                this.userinfo = response.data.data
                console.log(this.userinfo)
            })
        }
    }
}
</script>