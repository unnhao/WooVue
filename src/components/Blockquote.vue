<template lang="pug">
    blockquote
        span(v-for="msg in messageObj")
            MessageList(:messageObj="msg")
</template>

<script>
import MessageList from './MessageList.vue';
export default {
    props: {messageObj:Array},
    data(){
        return{}
    },
    components:{
        MessageList: MessageList
    }
}
</script>

<style>

</style>
