<template>
    <div class="blog__card-container">
        <div class="blog__card-item" v-for="item in posts" :key="item">
            <BlogCard :card="item" />
        </div>
        <div class="blog__card-pagination" v-if="posts.length > limit">
            <button class="button" @click="limit+=6">Загрузить еще</button>
        </div>
    </div>
</template>

<script>

import BlogCard from '../card/BlogCard.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    data: () => ({
        posts: [],
        limit: 6,
    }),

    components: {
        BlogCard
    },

    computed: {
        ...mapGetters(['getPosts'])
    },

    methods: {
        ...mapActions(['fetchPosts']),

        async updateBlog () {
            const { limit, page } = this;

            const params = { region: 'uzb', limit, page };
            await this.fetchPosts(params);
            this.posts = this.getPosts.rows;
        }
    },

    async mounted () {
        await this.updateBlog();
    },

    watch: {
        'limit': {
            deep: true,
            async handler () {
                await this.updateBlog();
            }
        }
    }
}

</script>