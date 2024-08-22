import { createStore } from 'vuex';

import poducts from './poducts/poducts';
import buths from './buths/buths';
import post from './blog/post';

export default createStore({
    modules: {
        poducts,
        buths,
        post
    }
})