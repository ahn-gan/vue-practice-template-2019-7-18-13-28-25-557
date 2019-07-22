import Vue from 'vue';

import  Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counterSum: 0
    },
    mutations: {
        setCounterSum (state, data) {
            state.counterSum = data;
        }
    },
    action: {
        commitCounterSum: function ({commit}, counterSum){
            commit('setCounterSum', counterSum)
        }
    }
});

export default store;