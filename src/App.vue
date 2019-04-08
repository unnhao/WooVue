<template lang="pug">
  #app
    .wrapper
      .box
      .startPage
        .logo
        .slogan 吾聊、不無聊
        input.startBtn(type='button', value='開始聊天')
      Blockquote(:messageObj="msgs")
    OperationArea
</template>

<script>
import { mapState , mapMutations, mapActions } from 'vuex'

import Blockquote from './components/Blockquote.vue';
import OperationArea from './components/OperationArea.vue';

export default {
  name: 'app',
  data () {
    return {     
    }
  },
  computed:{
      ...mapState(['msgs'])
  },
  methods: {
    ...mapMutations(['addMsg'])
  },
  components:{
    Blockquote:Blockquote,
    OperationArea:OperationArea
  },
   mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js')
    document.head.appendChild(recaptchaScript)
  }
}
</script>

<style lang="scss">
@import './style/style';
</style>
