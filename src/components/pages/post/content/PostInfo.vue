<template>
    <section class="post-info">
        <h1 class="post__info-title">{{post.title}}</h1>
        <div class="post__statistic">
            <div class="post__date">
                <p class="post__statistic-text" v-if="post.createdAt">{{ post.createdAt.split('T')[0] }}</p>
                <p class="post__statistic-text" v-if="post.createdAt">{{ post.createdAt.split('T')[1].split(':')[0] }} : {{ post.createdAt.split('T')[1].split(':')[1] }}</p>
            </div>
            <div class="post__views">
                <View />
                <p class="post__statistic-text">{{post.views}}</p>
            </div>
        </div>
        <div class="post__image" v-if="post.image">
            <img :src="link + post.image.path" alt="Image" class="post__image-img" @click="toggleZoom">
            <transition name="fade">
                <ZoomImagePopup :image="link + post.image.path" @toggleZoom="toggleZoom" v-if="zoom"/>
            </transition>
        </div>
        <div class="post__paragraphs">
            <p class="post__paragraphs-text" v-for="desc in post.descriptions" :key="desc">{{ desc.description }}</p>
        </div>
    </section>
</template>

<script>

import ZoomImagePopup from '@/components/reused/popup/ZoomImagePopup.vue';

import View from '@/components/icons/post/View.vue';
import axios from '@/api/axios';

export default {
    data: () => ({
        link: import.meta.env.VITE_APP_DEFAULT_IMAGES_LINK,
        zoom: false
    }),

    components: {
        View,
        ZoomImagePopup
    },

    props: {
        post: {
            type: Object,
            required: true
        }
    },

    methods: {
        toggleZoom () {
            this.zoom = !this.zoom; 
        }
    },

    async mounted () {
        setTimeout(async() => {
            try {
                const response = await axios.patch(`posts/views/${this.post.id}`);
                console.log(response);
                
            }
            catch (error) {
                console.log(error);
            }
        }, 100);
    }
}

</script>