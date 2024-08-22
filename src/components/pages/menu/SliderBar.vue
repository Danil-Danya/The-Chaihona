<template>
    <div class="slider__bar">
        <div class="slider__bar-container">
            <div class="container">
                <div class="slider__bar-content">
                    <button class="slider__bar-button-navigation slider-prev" @click="slidePrev">
                        <img src="@/assets/images/blog/slider/prev.svg" alt="Arrow">
                    </button>
                    <button class="slider__bar-button-navigation slider-next">
                        <img src="@/assets/images/blog/slider/next.svg" alt="Arrow"  @click="slideNext">
                    </button>
                    <swiper class="slider__bar-swiper"
                        :slides-per-view="slides"
                        :spaceBetween="10"
                        :loop="true"
                        :navigation="{
                            prevEl: '.slider-prev',
                            nextEl: '.slider-next',
                        }"
                        :modules="modules"
                    >
                        <swiper-slide v-for="slide in sliderData" :key="slide">
                            <a :href="`/menu?menu_type=dish#${slide.hash}`"  class="button__round slider__bar-button" ref="button">{{ slide.name }}</a>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import 'swiper/css';

export default {
    data: () => ({
        slides: 6,
        sliderData: [
            { "name": "Первые блюда", "hash": "first" },
            { "name": "Национальные блюда", "hash": "national" },
            { "name": "Европейские блюда", "hash": "europian" },
            { "name": "Ассорти и сеты", "hash": "set" },
            { "name": "Шашлыки", "hash": "shashlyki" },
            { "name": "Холодные закуски", "hash": "holodnye_zakuski" },
            { "name": "Горячие закуски", "hash": "goryachie_zakuski" },
            { "name": "Салаты", "hash": "salats" },
            { "name": "Десерты", "hash": "deserts" }
        ]
    }),

    components: {
        Swiper,
        SwiperSlide,
    },

    methods: {
        slideNext() {
            this.$refs.barSwiper.swiper.slideNext();
        },
        slidePrev() {
            this.$refs.barSwiper.swiper.slidePrev();
        },

        changeSlides () {
            const width =  window.innerWidth;

            if (width < 960)
                this.slides = 3;

            if (width < 570)
                this.slides = 1.8;
        }
    },

    setup() {
        return {
             modules: [Navigation, EffectCoverflow],
        };
    },

    mounted () {
        this.changeSlides()
    }
}

</script>