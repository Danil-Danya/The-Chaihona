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
                        :slides-per-view="6"
                        :spaceBetween="10"
                        :loop="true"
                        :navigation="{
                            prevEl: '.slider-prev',
                            nextEl: '.slider-next',
                        }"
                        :modules="modules"
                    >
                        <swiper-slide v-for="slide in sliderData" :key="slide">
                            <a href="#"  class="button__round slider__bar-button" ref="button">{{ slide }}</a>
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
        sliderData: [
            'Первые блюда',
            'Национальные блюда',
            'Европейские блюда',
            'Ассорти и сеты',
            'Шашлыки',
            'Холодные закуски',
            'Горячие закуски',
            'Салаты',
            'Десерты',
        ]
    }),

    components: {
        Swiper,
        SwiperSlide,
    },

    methods: {
        slideNext() {
            console.log(this.$refs.buthsSwiper.swiper);
            this.$refs.barSwiper.swiper.slideNext();
        },
        slidePrev() {
            this.$refs.barSwiper.swiper.slidePrev();
        }
    },

    setup() {
        return {
             modules: [Navigation, EffectCoverflow],
        };
    },
}

</script>