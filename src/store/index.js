import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        msgs: [] 
    },
    mutations: {
        setMsg(state,value){
            state.msgs = value;
        },
        addMsg(state,value){
            state.msgs.push(value);
        }
    },
    actions: {
      loadPost(context){ 
        let exampleMsgs=[
            {
            whattype: 'system',
            time: '04.08',
            content: 'broadcast message'
            },
            {
                whattype: 'my',
                time: '04.08',
                content: 'my message'
            },
            {
                whattype: 'stranger',
                time: '04.08',
                content: 'stranger message'
            }
        ];
        context.commit('setMsg',exampleMsgs);
      }
    }
})
export default store