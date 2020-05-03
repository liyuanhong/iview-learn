<style scoped>
.content {
    width:84%;
    height:800px;
    background: pink;
    float: left;
    margin-bottom: 100px;
}
   
</style>
<template>
    <div>
        <my-header></my-header>
        <top-nav></top-nav>
        <left-nav></left-nav>
        <div class="content">

        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
    import MyHeader from '../components/Header.vue'
    import MyFooter from '../components/Footer.vue'
    import TopNav from '../components/admin/TopNav.vue'
    import LeftNav from '../components/admin/LeftNav.vue'
    export default {
       name: "admin_page",
       props: {
           
       },
       data(){
           return {}
       },
       components: {
           MyHeader,
           MyFooter,
           TopNav,
           LeftNav
       }
    }
</script>

