<style scoped>
   
</style>
<template>
    <div>
        <my-header></my-header>
        <h2>this is home page</h2>
        <Button type="primary" :style="{'display':'block','margin':'auto'}" @click="closeDialog">点击弹出对话框</Button>
        <Button type="info" @click="openDrawer" :style="{'display':'block','margin':'auto','margin-top':'10px'}">点击弹出抽屉</Button>
        <middle-dialog ref="childdialog" v-model="isshow"></middle-dialog>
        <my-drawer ref="childdrawer" @changeProgress="changeProgre"></my-drawer>
        <div :style="{'margin-left':'100px','width':'50%'}">
            <my-progress ref="progressValue"></my-progress>
        </div>
        <div :style="{'width':'500px','height':'100px','background-color':'pink','margin':'auto','margin-top':'10px'}">
            <Input style="width: 300px" v-model="inputValue" /><br>
            <label>{{ inputValue }}</label><br>
            <Input style="width: 300px" @input="getValue(inputValue,$event)"/><br>
        </div>
        
        <my-footer></my-footer>
    </div>
</template>
<script>
    import MyHeader from '../components/Header.vue'
    import MyFooter from '../components/Footer.vue'
    import MyProgress from '../components/MyProgress'
    import MiddleDialog from '../components/dialog/MiddleDialog.vue'
    import MyDrawer from '../components/drawer/MyDrawer.vue'

    export default {
       name: "home_page",
       props: {
           
       },
       data(){
           return {
               isshow: true,
               inputValue: "123456"
           }
       },
       components: {
           MyHeader,
           MyFooter,
           MiddleDialog,
           MyDrawer,
           MyProgress
       },
       methods: {
           closeDialog(){
               this.$refs.childdialog.modal10 = true
           },
           openDrawer(){
               this.$refs.childdrawer.value5 = true
           },
           changeProgre(){
               this.$refs.progressValue.per = this.$refs.childdrawer.per
           },
           getValue(a,e){
               var val = e
               console.log(val)
               console.log(a)
           }
       }
    }
</script>

