<style scoped>
.header {
    width:100%;
    height:48px;
    background:#49B4EA

}

.daohang li{
    display: inline;
    margin: 10px;
}
.daohang a {
    color: pink;
}
   
</style>
<template>
    <div>
        <div class="header">
            <ul class="daohang">
                <li><a v-bind:href="'http://' + host + ':' + port + '/'">根目录</a></li>
                <li><a v-bind:href="'http://' + host + ':' + port + '/login'">登录</a></li>
                <li><a v-bind:href="'http://' + host + ':' + port + '/home'">home</a></li>
                <li><a v-bind:href="'http://' + host + ':' + port + '/admin'">admin</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    const hostname = document.location.hostname
    export default {
       name: "my-header",
       props: {
           
       },
       data(){
           return {
               host: hostname,
               port: 8080
           }
       }
    }
</script>

