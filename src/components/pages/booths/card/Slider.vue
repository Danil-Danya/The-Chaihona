<template>
    <div class="booths__slider">
        <div class="booths__slider-container">
            <div class="booths__slider-navigation">
                <button class="booths__slider-button" :class="`slider-prev-${index}`" @click="slidePrev">
                    <img src="@/assets/images/booths/slider/prev.svg" alt="Arrow">
                </button>
                <button class="booths__slider-button" :class="`slider-next-${index}`" @click="slideNext">
                    <img src="@/assets/images/booths/slider/next.svg" alt="Arrow">
                </button>
            </div>
        </div>
        <swiper class="booths__slider-swiper"
            :pagination="true"
            :loop="true"
            :navigation="{
                prevEl: `.slider-prev-${index}`,
                nextEl: `.slider-next-${index}`,
            }"
            :modules="modules"
        >
            <swiper-slide v-for="booths in boothsDataSet" :key="booths" class="booths__slider-slide">
                <img :src="booths" alt="Slide" class="booths__slider-img">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';

export default {
    data: () => ({
        boothsDataSet: [
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
        ]
    }),

    components: {
        Swiper,
        SwiperSlide,
    },

    props: {
        index: {
            type: Number,
            required: true,
        },
    },

    methods: {
        slideNext() {
            this.$refs.buthsSwiper.swiper.slideNext();
        },
        slidePrev() {
            this.$refs.buthsSwiper.swiper.slidePrev();
        }
    },

    setup() {
        return {
             modules: [Navigation, EffectCoverflow, Pagination],
        };
    },

    mounted () {
        console.log(this.index);
    }
}

</script>