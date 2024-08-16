import { createStore } from 'vuex';

import buths from './buths/buths';
import poducts from './poducts/products';

export default createStore({
    modules: {
        buths,
        poducts
    }
})