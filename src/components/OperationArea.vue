<template lang="pug">
    .operationArea
      .exitBtn
        input(type='button', value='離開')
      .inputText
        input(type='text')
      .sendBtn(@click="test2")
        input(type='button', value='發送')
</template>

<script>

import { mapState , mapMutations, mapActions } from 'vuex'
import $ from "jquery";


export default {
    methods:{
        ...mapMutations(['addMsg']),
        test(){
            console.log('success');
            TweenMax.to(".operationArea",0.8,{
                transform: 'translateY(50px)'
            })
        },
        test2(evt){
            this.$store.commit('addMsg',{
                    whattype: 'system',
                    time: '04.08',
                    content: 'broadcast message'
                });

            evt.preventDefault();

            let domScroll = $('.wrapper').offset().top + $('.wrapper')[0].scrollHeight;
            TweenMax.to('.wrapper', 1.2, {scrollTo: {y: domScroll}});
            domScroll = 0;
            console.log($('.wrapper')[0].scrollHeight);

        }

        
    },
    computed:{
    ...mapState(['msgs'])
    }
}
</script>

<style lang="scss">

</style>
