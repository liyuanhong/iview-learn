<style scoped>
.myclass {
    background:hotpink;
}
   
</style>
<template>
    <div>
        <my-header></my-header>
        <h2>this is home page</h2>
        <Button type="primary" :style="{'display':'block','margin':'auto'}" @click="closeDialog">点击弹出对话框</Button>
        <Button type="info" @click="openDrawer" :style="{'display':'block','margin':'auto','margin-top':'10px'}">点击弹出抽屉</Button>
        <middle-dialog ref="childdialog" v-model="isshow"></middle-dialog>
        <!-- 通过ref 父组件改变子组件的值 -->
        <my-drawer ref="childdrawer" @changeProgress="changeProgre"></my-drawer>   <!-- 通过$emit 出发事件，通过子组件改变父组件值  -->
        <div :style="{'margin-left':'100px','width':'50%'}">
            <my-progress ref="progressValue"></my-progress>
        </div>
        <!-- 数据双向绑定测试 v-model -->
        <div :style="{'width':'500px','height':'100px','background-color':'pink','margin':'auto','margin-top':'10px','border-radius':'10px'}">
            <Input style="width: 300px" v-model="inputValue" :style="{'margin-top':'5px'}"/><br>
            <label>{{ inputValue }}</label><br>
            <Input style="width: 300px" @input="getValue(inputValue,$event)"/><br>   <!-- 通过事件获取input值  -->
        </div>
        <!-- class绑定测试 -->
        <div :style="{'width':'500px','height':'50px','margin':'auto','margin-top':'10px','border-radius':'10px'}" :class="[{myclass:isclass}]">
            <Button :style="{'margin-top':'10px'}" type="success" @click="changeClass">点击添加一个class属性</Button>
        </div>
        <!-- 计算属性测试 -->
        <div :style="{'width':'500px','height':'60px','margin':'auto','margin-top':'10px','border-radius':'10px','background':'antiquewhite'}" :class="[{myclass:isclass}]">
            <Input style="width: 300px" v-model="inputValue1" :style="{'margin-top':'5px'}"/><br>
            <label>{{ reversedVal }}</label>
        </div>
        <!-- 过滤器使用 -->
        <div :style="{'width':'500px','height':'60px','margin':'auto','margin-top':'10px','border-radius':'10px','background':'#5cadff'}" :class="[{myclass:isclass}]">
            <Input style="width: 300px" v-model="inputValue2" :style="{'margin-top':'5px'}"/><br>
            <label>{{ inputValue2 | myfilter }}</label>
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
               inputValue: "123456",
               inputValue1: "",
               inputValue2: "",
               isclass: false
           }
       },
       computed: {
           reversedVal: function () {
             return this.inputValue1.split('').reverse().join('')
            }
       },
       filters: {
           myfilter: function(value){
               if(value == ""){
                   return ""
               }else{
                   return "这是一个过滤器：" + value + " $$$" 
               }
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
           },
           changeClass(){
               this.isclass = !this.isclass
           }
       }
    }
</script>

