<template>
    <div class="blog__card-top-container">
        <form class="blog__card-top-form">
            <input type="text" class="blog__card-top-input" placeholder="Найти статью" v-model="search">
        </form>
        <div class="blog__card-top-posts">
            <h2 class="blog__card-top-title" v-if="search && posts.length === 0">Статьи не найдены</h2>
            <h2 class="blog__card-top-title" v-else>{{ search ? 'Найденые запросы:' : 'Топ статьи' }}</h2>
            <div class="blog__card-top-item" v-for="item in posts" :key="item">
                <BlogTopCard :post="item"/>
            </div>
        </div>
        <div class="blog__card-top-social">
            <h2 class="blog__card-top-title">Следите за новостями:</h2>
            <div class="blog__card-top-icon-container">
                <a :href="social.path" v-for="social in socialList" :key="social">
                    <component :is="social.icon"></component>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import BlogTopCard from '../card/BlogTopCard.vue';
import Facebook from '@/components/icons/social/Facebook.vue';
import Instagram from '@/components/icons/social/Instagram.vue';
import Telegram from '@/components/icons/social/Telegram.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
    data: () => ({
        socialList: [
            {
                icon: 'facebook', 
                path: 'https://www.facebook.com/thechoyxona'
            },
            {
                icon: 'instagram',
                path: 'https://www.instagram.com/thechoyxona'
            },
            {
                icon: 'telegram',
                path: 'https://t.me/thechoyxona'
            }
        ],

        posts: [],
        search: ''
    }),

    components: {
        BlogTopCard,
        Facebook,
        Instagram,
        Telegram
    },

    computed: {
        ...mapGetters(['getPosts'])
    },

    methods: {
        ...mapActions(['fetchPosts']),

        async updateBlog () {
            const { limit, page, search } = this;

            const params = { region: 'uzb', limit: 3, page, search };
            await this.fetchPosts(params);
            this.posts = this.getPosts.rows;
        }
    },

    async mounted () {
        await this.updateBlog();
    },

    watch: {
        'search': {
            deep: true,
            async handler () {
                await this.updateBlog();
            }
        }
    }
}

</script>