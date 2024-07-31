<template>
    <div class="blog__slider">
        <div class="blog__slider-navigation">
            <button class="buths__slider-button slider-prev" @click="slidePrev">
                <img src="@/assets/images/blog/slider/prev.svg" alt="Arrow">
            </button>
            <button class="buths__slider-button slider-next">
                <img src="@/assets/images/blog/slider/next.svg" alt="Arrow"  @click="slideNext">
            </button>
        </div>
        <swiper class="blog__slider-swiper"
            :slides-per-view="3"
            :spaceBetween="100"
            :navigation="{
                prevEl: '.slider-prev',
                nextEl: '.slider-next',
            }"
            :modules="modules"
        >
            <swiper-slide v-for="post in postDataSet" :key="post">
                <Post :notation="post"/>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>

import Post from './Post.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import 'swiper/css';

export default {
    data: () => ({
        postDataSet: [
            {
                img: require('@/assets/images/blog/post.png'),
                path: '/post',
                text: 'Роман Сайфулин об уходе из Makro, открытии The Choyxona, ресторане на берегу моря за $1 млн и мечтах о бане'
            },
            {
                img: require('@/assets/images/blog/post.png'),
                path: '',
                text: 'Роман Сайфулин об уходе из Makro, открытии The Choyxona, ресторане на берегу моря за $1 млн и мечтах о бане'
            },
            {
                img: require('@/assets/images/blog/post.png'),
                path: '/post',
                text: 'Роман Сайфулин об уходе из Makro, открытии The Choyxona, ресторане на берегу моря за $1 млн и мечтах о бане'
            },
            {
                img: require('@/assets/images/blog/post.png'),
                path: '/post',
                text: 'Роман Сайфулин об уходе из Makro, открытии The Choyxona, ресторане на берегу моря за $1 млн и мечтах о бане'
            },
            {
                img: require('@/assets/images/blog/post.png'),
                path: '/post',
                text: 'Роман Сайфулин об уходе из Makro, открытии The Choyxona, ресторане на берегу моря за $1 млн и мечтах о бане'
            },
            {
                img: require('@/assets/images/blog/post.png'),
                path: '/post',
                text: 'Роман Сайфулин об уходе из Makro, открытии The Choyxona, ресторане на берегу моря за $1 млн и мечтах о бане'
            },
            {
                img: require('@/assets/images/blog/post.png'),
                path: '/post',
                text: 'Роман Сайфулин об уходе из Makro, открытии The Choyxona, ресторане на берегу моря за $1 млн и мечтах о бане'
            },
            {
                img: require('@/assets/images/blog/post.png'),
                path: '/post',
                text: 'Роман Сайфулин об уходе из Makro, открытии The Choyxona, ресторане на берегу моря за $1 млн и мечтах о бане'
            },
            {
                img: require('@/assets/images/blog/post.png'),
                path: '/post',
                text: 'Роман Сайфулин об уходе из Makro, открытии The Choyxona, ресторане на берегу моря за $1 млн и мечтах о бане'
            },
        ]
    }),

    components: {
        Swiper,
        SwiperSlide,
        Post
    },

    methods: {
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
             modules: [Navigation, EffectCoverflow],
        };
    },
}


</script>