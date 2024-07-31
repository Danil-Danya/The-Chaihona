<template>
    <section class="buths">
        <div class="buths__container">
            <div class="container">
                <div class="buths__content">
                    <h2 class="title buths__title">Приватные оазисы</h2>
                    <div class="buths__content-container">
                        <div class="buths__left">
                            <p class="buths__text"><strong>The Choyxona</strong>, расположенная в уединенном уголке центра города, напоминает закрытые беседки загородного дома, где вы можете собраться большой компанией в одной из 13 кабинок нового формата.</p>
                            <Button :notation="buttonNotation" />
                        </div>
                        <div class="buths__right">
                            <div class="buths__slider-navigation">
                                <button class="buths__slider-button slider-prev" @click="slidePrev">
                                    <img src="@/assets/images/slider/prev.svg" alt="Arrow">
                                </button>
                                <button class="buths__slider-button slider-next">
                                    <img src="@/assets/images/slider/next.svg" alt="Arrow"  @click="slideNext">
                                </button>
                            </div>
                            <swiper ref="buthsSwiper"
                                :effect="'coverflow'"
                                :direction="'vertical'"
                                :slides-per-view="3"
                                :navigation="{
                                    prevEl: '.slider-prev',
                                    nextEl: '.slider-next',
                                }"
                                :coverflowEffect="{
                                    rotate: 0,
                                    scale: 0.8,
                                    modifier: 1,
                                    depth: 0,
                                    slideShadows: false,
                                }"
                                :modules="modules"
                                class="buths__slider"
                            >
                                <swiper-slide v-for="img in testImagesList" :key="img">
                                    <div class="buths__item">
                                        <div class="buths__img-container">
                                            <img :src="img" alt="Slider Image" class="buths__item-img">
                                        </div>
                                        <div class="buths__item-content">
                                            <div class="buths__item-content-container">
                                                <h3 class="buths__item-title">Кабинка №1</h3>
                                                <p class="buths__item-text">VIP-кабинка на 16 персон с лаунж-зоной. PS5, кальян, настольные игры, доступ к AllPlay, Netflix, ITV</p>
                                            </div>
                                            <div class="buths__button-container">
                                                <Button :notation="buttonNotation" />
                                                <Button :notation="buttonBorderedNotation" />
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Button from "@/components/reused/Button.vue";

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import 'swiper/css';
//import 'swiper/css/pagination';

export default {
    data: () => ({
        buttonNotation: {
            text: 'Забронировать',
            path: ''
        },

        buttonBorderedNotation: {
            text: '360° тур',
            path: '',
            bordered: true,
        },

        testImagesList: [
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
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
            require('@/assets/images/buths/buths.png'),
        ]
    }),

    components: {
        Button,
        Swiper,
        SwiperSlide
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