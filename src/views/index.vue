<style scoped>
   
</style>
<template>
    <div>
        <my-header></my-header>
        <user-list></user-list>
        <my-footer></my-footer>
    </div>
</template>
<script>
    import MyHeader from '../components/Header.vue'
    import MyFooter from '../components/Footer.vue'
    import UserList from '../components/UserList.vue'
    export default {
       name: "index_page",
       props: {
           
       },
       data(){
           return {
               host: "localhost",
               port: 8080
           }
       },
       components: {
           MyHeader,
           MyFooter,
           UserList
       }
    }
</script>

