<style scoped>

</style>

<template>
    <Menu mode="horizontal" :theme="theme" :active-name="curItem">
        <MenuItem name="1" to="#">
            <Icon type="ios-paper" />
            内容管理
        </MenuItem>
        <MenuItem name="2" to="home">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
    </Menu>
</template>
<script>
    export default {
        data () {
            return {
                theme: 'light',
                curItem: "1"
            }
        }
    }
</script>
