import { createStore } from 'vuex';

import buths from './buths/buths';
import poducts from './poducts/products';
import posts from './posts/posts';

export default createStore({
    modules: {
        buths,
        poducts,
        posts
    }
})