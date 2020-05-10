<style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>
<template>
    <Modal
        title="Title"
        v-model="modal10"
        class-name="vertical-center-modal">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal9: false,
                modal10: false,
            }
        }
    }
</script>
