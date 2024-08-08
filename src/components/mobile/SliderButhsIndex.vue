<template>
    <swiper ref="mobileSlider"
        :loop="true"
        :slidesPerView="1"
        :space-between="15"
        :autoplay="{ delay: 3000 }"
        :navigation="{
            prevEl: '.slider-prev',
            nextEl: '.slider-next',
        }"
        :pagination="{ 
            el: '.buths-pagination',
            clickable: true,
        }"
        :modules="modules"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="buths__slider-mobile"
    >
        <swiper-slide class="buths__item-mobile" v-for="img in testImagesList" :key="img">
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
</template>

<script>
import Button from "@/components/reused/Button.vue";

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
    data: () => ({
        buttonBorderedNotation: {
            text: '360° тур',
            path: '',
            bordered: true,
        },

        buttonNotation: {
            text: 'Забронировать',
            path: ''
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
        ]
    }),

    components: {
        Swiper,
        SwiperSlide,
        Button
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
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };

        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Autoplay],
        };
    },
}
</script>