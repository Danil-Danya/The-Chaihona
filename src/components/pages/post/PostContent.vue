<template>
    <div class="container">
        <div class="post-container" :key="$route.params.unical_url">
            <div class="post-content" v-if="post">
                <PostInfo :post="post"/>
                <PostVideo :post="post"/>
            </div>
            <div class="post-recs">
                <PostRecomend :post="post"/>
            </div>
        </div>
    </div>
</template>

<script>

import PostInfo from './content/PostInfo.vue';
import PostRecomend from './other/PostRecomend.vue';
import PostVideo from './content/PostVideo.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
    data: () => ({
        post: {},
    }),

    components: {
        PostInfo,
        PostRecomend,
        PostVideo
    },

    computed: {
        ...mapGetters(['getPost'])
    },

    methods: {
        ...mapActions(['fetchOnePost'])
    },

    async mounted () {
        const unicalUrl = this.$route.params.unical_url

        await this.fetchOnePost(unicalUrl);
        this.post = this.getPost;

        document.title = this.getPost.title;
    },

    watch: {
        '$route.params': {
            deep: true,
            async handler () {
                this.post = {};

                const unicalUrl = this.$route.params.unical_url

                await this.fetchOnePost(unicalUrl);
                this.post = this.getPost;

                document.title = this.getPost.title;
            }
        }
    }
}

</script>