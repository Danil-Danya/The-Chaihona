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
                <router-link :to="`/post/${post.unical_url_name}`" class="blog__card-link">Подробнее</router-link>
            </div>
        </div>
    </div>
</template>


<script> 

export default {
    data: () => ({
        link: import.meta.env.VITE_APP_DEFAULT_IMAGES_LINK,
    }),

    props: {
        post: {
            type: Object,
            required: true
        }
    },

    computed: {
        truncatedTitle() {
            const maxLength = 30;
            if (this.post.title.length > maxLength) {
                return this.post.title.substring(0, maxLength) + '...';
            }
            return this.post.title;
        }
    },
}


</script>