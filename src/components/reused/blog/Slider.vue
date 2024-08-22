<template>
    <div class="blog__slider">
        <div class="blog__slider-navigation">
            <button class="blog__slider-button blog__slider-prev" @click="slidePrev">
                <img src="@/assets/images/blog/slider/prev.svg" alt="Arrow">
            </button>
            <button class="blog__slider-button blog__slider-next">
                <img src="@/assets/images/blog/slider/next.svg" alt="Arrow"  @click="slideNext">
            </button>
        </div>
        <swiper class="blog__slider-swiper"
            :slides-per-view="width > 960 ? 3 : 1"
            :spaceBetween="100"
            :loop="true"
            :navigation="{
                prevEl: '.blog__slider-prev',
                nextEl: '.blog__slider-next',
            }"
            :modules="modules"
        >
            <swiper-slide v-for="post in posts" :key="post">
                <Post :notation="post"/>
            </swiper-slide>
        </swiper>
        
    </div>
</template>

<script>

import Post from './Post.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { mapGetters, mapActions } from 'vuex';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import 'swiper/css/effect-coverflow';
import 'swiper/css';


export default {
    data: () => ({
        width: window.innerWidth,
        posts: [],
        limit: 6,
    }),

    components: {
        Swiper,
        SwiperSlide,
        Post
    },

    computed: {
        ...mapGetters(['getPosts'])
    },

    
    methods: {
        ...mapActions(['fetchPosts']),
        slideNext() {
            console.log(this.$refs.buthsSwiper.swiper);
            this.$refs.buthsSwiper.swiper.slideNext();
        },
        slidePrev() {
            this.$refs.buthsSwiper.swiper.slidePrev();
        }
    },

    setup() {
        return {
             modules: [Navigation, Pagination, Autoplay],
        };
    },

    async mounted () {
        const { limit, page } = this;

        const params = { region: 'uzb', limit, page };
        await this.fetchPosts(params);
        this.posts = this.getPosts.rows;
        console.log(this.posts);
        
    },
}


</script>