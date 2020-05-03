<style scoped>
   
</style>
<template>
    <div>
        <my-header></my-header>
        this is login page 
        <my-footer></my-footer>
    </div>
</template>
<script>
    import MyHeader from '../components/Header.vue'
    import MyFooter from '../components/Footer.vue'
    export default {
       name: "login_page",
       
       props: {
           
       },
       components: {
           MyHeader,
           MyFooter
       }
    }
</script>

