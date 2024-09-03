<template>
    <div class="blog__card">
        <div class="blog__card-images" @click="replaceInPost">
            <img :src="link + card.image.path" alt="Post" class="blog__card-image">
        </div>
        <div class="blog__card-content">
            <router-link :to="`/post/${card.unical_url_name}`">
                <h2 class="blog__card-title">{{ truncatedTitle }}</h2>
            </router-link>
            <div class="blog__card-content-info">
                <div class="blog__card-date">
                    <p class="blog__card-text">{{ card.createdAt.split('T')[0] }}</p>
                </div>
                <div class="blog__card-views">
                    <span class="blog__card-icon">
                        <Views />
                    </span>
                    <p class="blog__card-text">{{ card.views }}</p>
                </div>
            </div>
            <div class="blog__card-buttons">
                <router-link :to="`/post/${card.unical_url_name}`" class="blog__card-link">{{ $t('blog.link') }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>

import Views from '@/components/icons/blog/Views.vue';

export default {
    data: () => ({
        link: import.meta.env.VITE_APP_DEFAULT_IMAGES_LINK,
        locale: localStorage.getItem('locale')
    }),

    components: {
        Views
    },

    computed: {
        truncatedTitle() {
            const maxLength = 52;
            let title;

            switch (this.locale) {
                case 'eng':
                    title = this.card.title_eng;
                    break;
                case 'uzb':
                    title = this.card.title_uzb;
                    break;
                default:
                    title = this.card.title;
            }

            if (title.length > maxLength) {
                return title.substring(0, maxLength) + '...';
            }

            return title;
        }
    },

    methods: {
        replaceInPost () {
            const unical_url = this.card.unical_url_name;
            
            this.$router.replace({
                name: 'post', 
                params: {unical_url}
            });
        }
    },

    props: {
        card: {
            type: Object,
            required: true
        }
    },

    mounted () {

    }
}

</script>