<template>
    <section class="post-recomend">
        <h2 class="post__recomend-title">Другие наши статьи</h2>
        <div class="post__recomend-container">
            <div class="post__recomend-item" v-for="item in posts" :key="item">
                <div class="post__recomend-image">
                    <router-link :to="`/post/${item.unical_url_name}`">
                        <div class="post__recomend-bg"></div>
                        <img width="100%" :src="link + item.image.path" alt="Post" class="post__recomend-image">
                    </router-link>
                </div>
                <div class="post__recomend-content">
                    <router-link :to="`/post/${item.unical_url_name}`">
                        <h3 class="post__recomend-title-blog">{{ truncatedTitle(item.title) }}</h3>
                    </router-link>
                    <div class="post__data">
                        <p class="post__recomend-date" v-if="item.createdAt">{{ item.createdAt.split('T')[0] }} г.</p>
                        <router-link :to="`/post/${item.unical_url_name}`" class="post__recomend-link">Подробнее</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    data: () => ({
        posts: [],
        link: import.meta.env.VITE_APP_DEFAULT_IMAGES_LINK,
    }),

    computed: {
        ...mapGetters(['getPosts'])
    },

    methods: {
        ...mapActions(['fetchPosts']),

         truncatedTitle(title) {
            const maxLength = 52;
            if (title.length > maxLength) {
                return title.substring(0, maxLength) + '...';
            }
            return title;
        }
    },

    async mounted () {
        const params = { region: 'uzb', limit: 3 };
        await this.fetchPosts(params);
        this.posts = this.getPosts.rows;
    }
}

</script>