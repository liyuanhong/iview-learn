<template>
    <div>
        <Drawer title="Multi-level drawer" width="512" :closable="false" v-model="value5">
            <div :style="{'width':'100%','height':'100px','background-color':'pink','border-radius':'10px'}">

            </div>
            <div :style="{'margin-top':'10px'}">
                <Input placeholder="Enter something..." style="width: 200px" v-model="per" />
                <Button type="info" :style="{'margin-left':'10px'}" @click="changeProgress">改变进度条进度</Button>
            </div>
        </Drawer>
    </div>
</template>
<script>
    export default {
        name: "my-drawer",
        data () {
            return {
                value5: false,
                per: 25
            }
        },
        methods: {
            changeProgress(){
                this.$emit('changeProgress');
            }
        }
    }
</script>
