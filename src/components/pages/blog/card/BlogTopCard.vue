<template>
    <div class="blog__card-top">
        <div class="blog__card-top-images">
            <router-link to="/post" class="blog__card-top-images">
                <router-link :to="`/post/${post.unical_url_name}`">
                    <img :src="link + post.image.path" alt="Image Link" class="blog__card-top-image">
                </router-link>
            </router-link>
        </div>
        <div class="blog__card-top-content">
            <router-link :to="`/post/${post.unical_url_name}`">
                <h2 class="blog__card-top-title-t">{{ truncatedTitle }}</h2>
            </router-link>
            <div class="blog__card-top-info">
                <p class="blog__card-text">{{ post.createdAt.split('T')[0] }}</p>
                <router-link :to="`/post/${post.unical_url_name}`" class="blog__card-link">{{ $t('blog.link') }}</router-link>
            </div>
        </div>
    </div>
</template>


<script> 

export default {
    data: () => ({
        link: import.meta.env.VITE_APP_DEFAULT_IMAGES_LINK,
        locale: localStorage.getItem('locale')
    }),

    props: {
        post: {
            type: Object,
            required: true
        }
    },

    computed: {
        truncatedTitle () {
            const maxLength = 30;
            let title;

            switch (this.locale) {
                case 'eng':
                    title = this.post.title_eng;
                    break;
                case 'uzb':
                    title = this.post.title_uzb;
                    break;
                default:
                    title = this.post.title;
            }

            if (title.length > maxLength) {
                return title.substring(0, maxLength) + '...';
            }

            return title;
        }
    },
}


</script>