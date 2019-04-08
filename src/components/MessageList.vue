<template lang="pug">
    .msg(:class="whatclassName") {{content}}
</template>

<script>
export default {
    props: {messageObj:Object},
    data(){
        return{
            type: this.messageObj.whattype,
            time: this.messageObj.time,
            content: this.messageObj.content,
        }
    },
    computed:{
        whatclassName(){
            let res =[];
            if(this.type == 'system'){
                res.push('system');
                res.push('broadcast');
            }else if(this.type == 'stranger'){
                res.push('message-stranger');
                res.push('text');
            }else if(this.type == 'my'){
                res.push('message-my');
                res.push('text');
            }else{
                
            }
            return res;
        }
    }
}
</script>

<style>

</style>
