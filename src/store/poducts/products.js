import axios from '@/api/axios.js';
const env = import.meta.env;

export default {
    state: {
        products: {},
        product: {}
    },

    actions: {
        async fetchProducts(context, params) {
            const url = 'products';

            const response = await axios.get(url, { params });

            const productsData = response.data;
            context.commit('setProducts', productsData);
        },

        async fetchOneProduct(context, id) {
            const url = `products/${id}`;

            const response = await axios.get(url);

            const productData = response.data;
            context.commit('setProduct', productData);
        }
    },

    mutations: {
        setProducts(state, products) {
            state.products = products;
        },

        setProduct(state, product) {
            state.product = product;
        }
    },

    getters: {
        getProducts(state) {
            return state.products;
        },

        getProduct(state) {
            return state.product;
        }
    }
}