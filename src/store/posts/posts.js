import axios from '@/api/axios.js';
const env = import.meta.env;

export default {
    state: {
        posts: {},
        post: {}
    },

    actions: {
        async fetchPosts(context, params) {
            const url = 'posts';

            const response = await axios.get(url, { params });

            const postsData = response.data;
            context.commit('setPosts', postsData);
        },

        async fetchOnePost(context, unicalUrl) {
            const url = `posts/${unicalUrl}`;

            const response = await axios.get(url);

            const postData = response.data;
            context.commit('setPost', postData);
        }
    },

    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },

        setPost(state, post) {
            state.post = post;
        }
    },

    getters: {
        getPosts(state) {
            return state.posts;
        },

        getPost(state) {
            return state.post;
        }
    }
}