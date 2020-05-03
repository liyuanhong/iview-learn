<style scoped>

</style>

<template>
    <Menu :theme="theme" active-name="1" :style='{"float":"left","margin-bottom":"100px"}' width="16%">
        <MenuGroup>
            <MenuItem name="1">
                <Icon type="md-document" />
                文章管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="md-chatbubbles" />
                评论管理
            </MenuItem>
        </MenuGroup>
    </Menu>
</template>
<script>
    export default {
        data () {
            return {
                theme: 'primary'
            }
        }
    }
</script>
