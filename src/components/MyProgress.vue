<template>
    <div>
        <Progress :percent="per" :stroke-width="20" text-inside />
    </div>
</template>
<script>
    export default {
        name: "my_progress",
        data(){
            return {
                per: 25
            }
        }
        
    }
</script>
