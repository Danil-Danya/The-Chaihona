import axios from '@/api/axios.js';
const env = import.meta.env;

export default {
    state: {
        buths: {},
        buth: {}
    },

    actions: {
        async fetchBuths(context, params) {
            const url = 'buths';

            const response = await axios.get(url, {params});

            const buthsData = response.data;
            context.commit('setBuths', buthsData);
        },

        async fetchOneButh(context, id) {
            const url = '';

            const response = await axios.get(url);

            const buthData = response.data;
            context.commit('setButh', buthData);
        }
    },

    mutations: {
        setBuths(state, buths) {
            state.buths = buths;
        },

        setButh(state, buth) {
            state.buth = buth;
        }
    },

    getters: {
        getBuths(state) {
            return state.buths;
        },

        getButh(state) {
            return state.buth;
        }
    }
}