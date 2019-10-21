
import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

    Vue.use(Vuex);

    export default new Vuex.Store({

    state: {
        elements: [],
    },

    mutations: {
        mutateElements(state, payload){
            state.elements=payload;
        },
    },

    actions: {
        loadElements(context){
            // eslint-disable-next-line no-undef
            axios.get(`${host}` + 'v2/5185415ba171ea3a00704eed')
            .then((response)=>{
                context.commit("mutateElements", response.data) 
            })
        },
    }
})
